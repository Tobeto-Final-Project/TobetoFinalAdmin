import React, { useEffect, useState } from 'react'
import ExceptionService from '../../../services/ExceptionService';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { CreateOptionRequest, CreatePoolQuestionRequest, CreateQuestionOptionRequest, CreateQuestionRequest, UpdateQuestionRequest } from '../../../models/requests/dashboard/questions/QuestionRequests';
import { GetListCityResponse, CityResponse } from '../../../models/responses/dashboard/cities/CityResponses';
import { GetListQuestionResponse, QuestionResponse } from '../../../models/responses/dashboard/questions/QuestionResponses';
import { GUID } from '../../../services/BaseService';
import CityService from '../../../services/dashboard/cities/CityService';
import QuestionService from '../../../services/dashboard/questions/QuestionService';
import PoolService from '../../../services/dashboard/pools/PoolService';
import { PoolResponse } from '../../../models/responses/dashboard/pools/PoolsResponses';

type Props = {}

const Question = (props: Props) => {
    let exceptionService:ExceptionService=new ExceptionService();

    const [addSelectedPool, setAddSelectedPool] = useState<any>();
    const [addQuestionName, setAddQuestionName] = useState('');
    
    const [updateSelectedCity, setUpdateSelectedCity] = useState<any>();
    const [updateQuestionName, setUpdateQuestionName] = useState('');

    const [Questions, setQuestions] = useState<GetListQuestionResponse>();
    
    const [QuestionId,setQuestionId] = useState<any>();

    const [pools, setPools] = useState<GetListCityResponse>();
    const [cityControl, setCityControl] = useState<boolean>(false);
    const [control, setControl] = useState<boolean>(false);
    const [reloadFlag, setReloadFlag] = useState(false);
    const [options,setOption]=useState<string>();
    const [createdOptions,setCreatedOptions]=useState<any[]>([]);
    const [correctOption,setCorrectOptionId]=useState<number>();
    const [imageUrl,setImageUrl]=useState<string>();
    const [questionName,setQuestionName]=useState<string>();

    let service: QuestionService = new QuestionService();
    let poolService: PoolService = new PoolService();

    const handleFormAdd = () => {
        let questionOptions:CreateQuestionOptionRequest[]=[];
        createdOptions.map((a:any)=>{
            let questionOptionn:CreateQuestionOptionRequest={optionId:2}
            questionOptionn.optionId=a.id;
            questionOptions.push(questionOptionn);
        })
        let Question: CreateQuestionRequest = {
            imageUrl: imageUrl||null,
            sentence: questionName,
            correctOptionId: correctOption,
            questionOptions:questionOptions
        };

        service.create(Question).then((res) => setReloadFlag((prev) => !prev)).catch((err:any)=>{
            console.log(err.response.data);
            
        });
    };

    const handleOptionAdd=()=>{
        console.log(createdOptions);
        
        let option: CreateOptionRequest = {
            text: options
        };
        service.addOption(option).then((res) => {
            setReloadFlag((prev) => !prev);
            setCreatedOptions(prevList=>[...prevList, res.data])
            console.log(res);
            
            
        }).catch((err:any)=>{
            console.log(err);
            
        });
    }

    const handleDelete = (e, id: number) => {
        e.preventDefault();
        service.delete(id).then(() => setReloadFlag((prev) => !prev)).catch((err:any)=>{
            console.log(err.response.data);
            
        })
    }

    const handleFormContentPoolAdd = (e,questionId:number)=>{
        e.preventDefault();
        let questionPool:CreatePoolQuestionRequest={
            questionId : questionId,
            poolId : addSelectedPool
        }
        service.createPoolQuestion(questionPool).then(() => setReloadFlag((prev) => !prev)).catch((e)=>console.log(e)
        )
    }
    useEffect(() => {
        service.getAll("0", "300").then((response) => {

            setQuestions(response.data);
        }).then(() => setControl(true))
            .then(() =>
                poolService.getAll("0", "100").then((response:any) => {
                    setPools(response.data);
                    console.log(response);
                    console.log(pools);
                    
                    
                })
                    .then(() => setCityControl(true))
            );



    }, [reloadFlag]);

    return (
        <>
            {!control && "Şu Anda Burası Boş Ekle!"}
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2><b>Soruları </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addQuestionModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Resim</th>
                                    <th>Soru Cümlesi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && Questions.items.map((Question: QuestionResponse) => (
                                    <>
                                        <tr>

                                            <td>{Question.id}</td>
                                            <td>{Question?.imageUrl}</td>
                                            <td>{Question.sentence}</td>
                                            <td>
                                               
                                                <a href={'#deleteQuestion' + Question.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                            <td>
                                                <a href={"#addQuestionModal" + Question.id } className="btn btn-info" data-toggle="modal"> <span><FaPlus />Havuza Ekle</span></a>
                                            </td>
                                        </tr>
                                        <div id={"addQuestionModal" + Question.id }className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e)=>handleFormContentPoolAdd(e,Question.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Etiket Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Havuzlar</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedPool}
                                                                    onChange={(e) => setAddSelectedPool(e.target.value)
                                                                    }><option value="">Lütfen Bir Etiket Seçiniz </option>
                                                                    {
                                                                        pools?.items.map((pool:PoolResponse) => (
                                                                            <option key={pool.id} value={pool.id}>{pool.name}</option>
                                                                        )
                                                                        )
                                                                    }
                                                                </select>
                                                            </div>
                                                         
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-success" value="Add" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                       <div id={'deleteQuestion' + Question.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleDelete(e, Question.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Soru Sil</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            
                                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        

                                    </>

                                ))}



                            </tbody>
                        </table>
                      
                    </div>
                </div>
            </div>

         <div id="addQuestionModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">İlçe Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Soru Cümlesi</label>
                                    <input type="text" className="form-control" required onChange={(e) => setQuestionName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Resim Linki (zorunlu değil)</label>
                                    <input type="text" className="form-control" onChange={(e) => setImageUrl(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Seçenek Ekle</label>
                                    <input type="text" className="form-control" required onChange={(e) => setOption(e.target.value)}/>
                                    <button type="button" className='btn btn-danger' onClick={()=>handleOptionAdd()}>Seçeneği Ekle</button>
                                </div>
                                <div className="form-group">
                                    <label>Eklediğiniz Seçenekler (Doğru Seçeneğini Seçiniz)</label><br />
                                   {createdOptions?.map((x)=>(<><input type="checkbox" name="" onClick={()=>setCorrectOptionId(x.id)} id="" />{x.text}<br /></>))}
                                </div> 
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Kapat" />
                                <input  className="btn btn-success" onClick={()=>handleFormAdd()} value="Ekle" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;