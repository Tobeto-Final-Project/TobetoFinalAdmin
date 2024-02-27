import React, { useEffect, useState } from 'react'
import ExceptionService from '../../../services/ExceptionService';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import {CreateQuizRequest, UpdateQuizRequest } from '../../../models/requests/dashboard/quizs/QuizRequests';
import { GetListCityResponse, CityResponse } from '../../../models/responses/dashboard/cities/CityResponses';
import { GetListQuizResponse, QuizResponse } from '../../../models/responses/dashboard/quizs/QuizResponses';
import { GUID } from '../../../services/BaseService';
import CityService from '../../../services/dashboard/cities/CityService';
import QuizService from '../../../services/dashboard/quizs/QuizService';
import PoolService from '../../../services/dashboard/pools/PoolService';
import { PoolResponse } from '../../../models/responses/dashboard/pools/PoolsResponses';
import { toast } from 'react-toastify';

type Props = {}

const Quiz = (props: Props) => {
    let exceptionService:ExceptionService=new ExceptionService();

    const [addSelectedPool, setAddSelectedPool] = useState<any>();
    const [addQuizName, setAddQuizName] = useState('');
    
    const [updateSelectedCity, setUpdateSelectedCity] = useState<any>();
    const [updateQuizName, setUpdateQuizName] = useState('');

    const [Quizs, setQuizs] = useState<GetListQuizResponse>();
    
    const [QuizId,setQuizId] = useState<any>();

    const [pools, setPools] = useState<GetListCityResponse>();
    const [control, setControl] = useState<boolean>(false);
    const [reloadFlag, setReloadFlag] = useState(false);
    const [imageUrl,setImageUrl]=useState<string>();
    const [QuizName,setQuizName]=useState<string>();
    const [QuizDesc,setQuizDesc]=useState<string>();
    const [QuizQuestionCount,setQuizQuestionCount]=useState<string>();
    const [QuizDuration,setQuizDuration]=useState<string>();

    let service: QuizService = new QuizService();
    let poolService: PoolService = new PoolService();

    const handleFormAdd = () => {
        let Quiz: CreateQuizRequest = {
            name: QuizName,
            description:QuizDesc,
            duration:parseInt(QuizDuration) ,
            quizQuestionCount: parseInt(QuizQuestionCount),
            poolId: addSelectedPool
        };

        service.create(Quiz).then((res) => setReloadFlag((prev) => !prev)).catch((err:any)=>{
            alert(err.response.data.detail)           
            console.log(err);
            
            
        });
    };

    const handleDelete = (e, id: number) => {
        e.preventDefault();
        service.delete(id).then(() => setReloadFlag((prev) => !prev)).catch((err:any)=>{
            console.log(err.response.data);
            
        })
    }

    useEffect(() => {
        service.getAll("0", "300").then((response) => {

            setQuizs(response.data);
        }).then(() => setControl(true))
            .then(() =>
                poolService.getAll("0", "100").then((response:any) => {
                    setPools(response.data);
                    console.log(response);
                    console.log(pools);
                    
                    
                })
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
                                    <h2><b>Sınavları </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addQuizModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Sınav Adı</th>
                                    <th>Sınav Süresi</th>
                                    <th>Sil</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && Quizs.items.map((Quiz: QuizResponse) => (
                                    <>
                                        <tr>

                                            <td>{Quiz.id}</td>
                                            <td>{Quiz?.name}</td>
                                            <td>{Quiz.duration}</td>
                                            <td>
                                               
                                                <a href={'#deleteQuiz' + Quiz.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                           
                                        </tr>
                                        
                                       <div id={'deleteQuiz' + Quiz.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleDelete(e, Quiz.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Sınav Sil</h4>
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

                                )).reverse( )}



                            </tbody>
                        </table>
                      
                    </div>
                </div>
            </div>

         <div id="addQuizModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">Sınav Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Sınav Adı</label>
                                    <input type="text" className="form-control" required onChange={(e) => setQuizName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Sınav Açıklama</label>
                                    <input type="text" required className="form-control" onChange={(e) => setQuizDesc(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Sınav Süresi</label>
                                    <input type="number" required className="form-control" onChange={(e) => setQuizDuration(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Sınav Soru Sayısı</label>
                                    <input type="number" required className="form-control" onChange={(e) => setQuizQuestionCount(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Lütfen Sınavınızın Hangi Havuzdan Olacağını Seçiniz</label><br />
                                    <select className="form-control" required
                                                                    value={addSelectedPool}
                                                                    onChange={(e) => setAddSelectedPool(e.target.value)
                                                                    }><option value="">Lütfen Bir Havuz Seçiniz </option>
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

export default Quiz;

function toastr(detail: any) {
    throw new Error('Function not implemented.');
}
