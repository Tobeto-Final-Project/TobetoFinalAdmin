import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import '../otherTable/AlternativeTable.css';
import { useEffect, useState } from 'react';
import LanguageLevelService from '../../../services/dashboard/languagelevels/LanguageLevelService';
import { GetListLanguageLevelResponse, LanguageLevelResponse } from '../../../models/responses/dashboard/languagelevels/LanguageLevelResponses';
import { CreateLanguageLevelRequest, UpdateLanguageLevelRequest } from '../../../models/requests/dashboard/languagelevels/LanguageLevelRequests';
import { GetListLanguageResponse, LanguageResponse } from '../../../models/responses/dashboard/languages/LanguageResponses';
import LanguageService from '../../../services/dashboard/languages/LanguageService';
import { GUID } from '../../../services/BaseService';
import { Field } from 'formik';

type Props = {}

const LanguageLevel = (props: Props) => {

    const [addSelectedLanguage, setAddSelectedLanguage] = useState<any>();
    const [addlanguageLevelName, setAddLanguageLevelName] = useState('');
    
    const [updateSelectedLanguage, setUpdateSelectedLanguage] = useState<any>();
    const [updatelanguageLevelName, setUpdateLanguageLevelName] = useState('');

    const [languageLevels, setLanguageLevels] = useState<GetListLanguageLevelResponse>();
    
    const [languageLevelId,setLanguageLevelId] = useState<any>();

    const [languages, setLanguages] = useState<GetListLanguageResponse>();
    const [languageControl, setLanguageControl] = useState<boolean>(false);
    const [control, setControl] = useState<boolean>(false);
    const [reloadFlag, setReloadFlag] = useState(false);

    let service: LanguageLevelService = new LanguageLevelService();
    let languageService: LanguageService = new LanguageService();

    const handleFormLanguageLevelAdd = (e) => {
        e.preventDefault();

        let languageLevel: CreateLanguageLevelRequest = {
            languageId: addSelectedLanguage,
            name: addlanguageLevelName
        };

        service.create(languageLevel).then((res) => setReloadFlag((prev) => !prev));
    };

    const handleFormLanguageLevelUpdate = (e,updateId:any) => {
        e.preventDefault();
        console.log(updateId);
        
        let updateLanguageLevel: UpdateLanguageLevelRequest={
        id:updateId,
        name:updatelanguageLevelName,
        languageId:updateSelectedLanguage
    }
       
        service.update(updateLanguageLevel).then((res) => setReloadFlag((prev) => !prev));
    };

    const handleLanguageLevelDelete = (e, id: GUID) => {
        e.preventDefault();
        service.delete(id).then(() => setReloadFlag((prev) => !prev))
    }

    useEffect(() => {
        service.getAll("0", "100").then((response) => {

            setLanguageLevels(response.data);
        }).then(() => setControl(true))
            .then(() =>
                languageService.getAll("0", "100").then((response) => {
                    setLanguages(response.data);
                })
                    .then(() => setLanguageControl(true))
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
                                    <h2><b>Dil Düzeylerini </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addLanguageLevelModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Dil Düzey Adı</th>
                                    <th>Hangi Dilin</th>
                                    <th>Operasyon</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && languageLevels.items.map((languageLevel: LanguageLevelResponse) => (
                                    <>
                                        <tr>

                                            <td>{languageLevel.id}</td>
                                            <td>{languageLevel.name}</td>
                                            <td>{languageLevel.languageName}</td>
                                            <td>
                                                &nbsp;&nbsp;&nbsp;<a href={'#editlanguagelevel' + languageLevel.id} className="edit" data-toggle="modal"> <FaEdit /></a> &nbsp;
                                                <a href={'#deletelanguagelevel' + languageLevel.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                        </tr>
                                       <div id={'deletelanguagelevel' + languageLevel.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleLanguageLevelDelete(e, languageLevel.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Dil Düzeyi Sil</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Emin misin {languageLevel.languageName + ' isimli dilin  ' + languageLevel.name + ' isimli dil düzeyini silemeye'}</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={'editlanguagelevel' + languageLevel.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    
                                                    <form >
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Dil Düzeyi Güncelle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="form-group">
                                                                <label>Dil Düzey ID</label>
                                                                {languageLevel.id}
                                                                <input type="text" className="form-control" value={languageLevel.id} disabled/>
                                                            </div>
                                                            <div className="form-group">

                                                                <label>Dil Düzey Adı</label>

                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                defaultValue={languageLevel.name} 
                                                                
                                                                required 
                                                                onChange={(e) => {setUpdateLanguageLevelName(e.target.value) ;console.log(e.target.value);
                                                                }}
                                                                />

                                                            </div>
                                                            <div className="form-group">
                                                                <label>Diller</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedLanguage}
                                                                    onChange={(e) => setUpdateSelectedLanguage(e.target.value)
                                                                    }><option defaultValue={languageLevel.languageId} selected>{languageLevel.languageName} + {languageLevel.languageId}</option>
                                                                    {languageControl &&
                                                                        languages.items.map((language: LanguageResponse) => (

                                                                            <option key={language.id} value={language.id}>{language.name}</option>
                                                                        )
                                                                        )
                                                                    }

                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-success" onClick={(e)=>{handleFormLanguageLevelUpdate(e,languageLevel.id)}} value="Güncelle" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> 


                                    </>

                                )).reverse()}



                            </tbody>
                        </table>
                      
                    </div>
                </div>
            </div>

         <div id="addLanguageLevelModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormLanguageLevelAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">Dil Düzeyi Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Dil Düzey Adı</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddLanguageLevelName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Diller</label>
                                    <select className="form-control" required
                                        value={addSelectedLanguage}
                                        onChange={(e) => setAddSelectedLanguage(e.target.value)
                                        }><option value="">Lütfen Bir Dil Seçiniz </option>
                                        {languageControl &&
                                            languages.items.map((language: LanguageResponse) => (

                                                <option key={language.id} value={language.id}>{language.name}</option>

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
        </>
    )
}

export default LanguageLevel



{/* <div id="addEmployeeModal" className="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Add Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Address</label>
						<textarea class="form-control" required></textarea>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" class="form-control" required>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
					<input type="submit" class="btn btn-success" value="Add">
				</div>
			</form>
		</div>
	</div>
</div>
<!-- Edit Modal HTML -->
<div id="editEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Edit Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>Name</label>
						<input type="text" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="email" class="form-control" required>
					</div>
					<div class="form-group">
						<label>Address</label>
						<textarea class="form-control" required></textarea>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" class="form-control" required>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
					<input type="submit" class="btn btn-info" value="Save">
				</div>
			</form>
		</div>
	</div>
</div>
<!-- Delete Modal HTML -->
<div id="deleteEmployeeModal" class="modal fade">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Delete Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<p>Are you sure you want to delete these Records?</p>
					<p class="text-warning"><small>This action cannot be undone.</small></p>
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
					<input type="submit" class="btn btn-danger" value="Delete">
				</div>
			</form>
		</div>
	</div>
</div> */}

