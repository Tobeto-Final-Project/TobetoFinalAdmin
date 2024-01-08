import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import '../otherTable/AlternativeTable.css';
import { useEffect, useState } from 'react';
import { GUID } from '../../../services/BaseService';
import { Field } from 'formik';
import { CreateDistrictRequest, UpdateDistrictRequest } from '../../../models/requests/dashboard/districts/DistrictRequests';
import { GetListCityResponse, CityResponse } from '../../../models/responses/dashboard/cities/CityResponses';
import { GetListDistrictResponse, DistrictResponse } from '../../../models/responses/dashboard/districts/DistrictResponses';
import CityService from '../../../services/dashboard/cities/CityService';
import DistrictService from '../../../services/dashboard/districts/DistrictService';

type Props = {}

const District = (props: Props) => {

    const [addSelectedCity, setAddSelectedCity] = useState<any>();
    const [adddistrictName, setAddDistrictName] = useState('');
    
    const [updateSelectedCity, setUpdateSelectedCity] = useState<any>();
    const [updatedistrictName, setUpdateDistrictName] = useState('');

    const [districts, setDistricts] = useState<GetListDistrictResponse>();
    
    const [districtId,setDistrictId] = useState<any>();

    const [citys, setCitys] = useState<GetListCityResponse>();
    const [cityControl, setCityControl] = useState<boolean>(false);
    const [control, setControl] = useState<boolean>(false);
    const [reloadFlag, setReloadFlag] = useState(false);

    let service: DistrictService = new DistrictService();
    let cityService: CityService = new CityService();

    const handleFormAdd = (e) => {
        e.preventDefault();

        let district: CreateDistrictRequest = {
            cityId: addSelectedCity,
            name: adddistrictName
        };

        service.create(district).then((res) => setReloadFlag((prev) => !prev));
    };

    const handleFormUpdate = (e,updateId:any) => {
        e.preventDefault();
        console.log(updateId);
        
        let updateDistrict: UpdateDistrictRequest={
        id:updateId,
        name:updatedistrictName,
        cityId:updateSelectedCity
    }
       
        service.update(updateDistrict).then((res) => setReloadFlag((prev) => !prev));
    };

    const handleDelete = (e, id: GUID) => {
        e.preventDefault();
        service.delete(id).then(() => setReloadFlag((prev) => !prev))
    }

    useEffect(() => {
        service.getAll("0", "100").then((response) => {

            setDistricts(response.data);
        }).then(() => setControl(true))
            .then(() =>
                cityService.getAll("0", "100").then((response) => {
                    setCitys(response.data);
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
                                    <h2><b>İlçeleri </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addDistrictModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>İlçe Adı</th>
                                    <th>Hangi Şehrin</th>
                                    <th>Operasyon</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && districts.items.map((district: DistrictResponse) => (
                                    <>
                                        <tr>

                                            <td>{district.id}</td>
                                            <td>{district.name}</td>
                                            <td>{district.cityName}</td>
                                            <td>
                                                &nbsp;&nbsp;&nbsp;<a href={'#updatedistrict' + district.id} className="edit" data-toggle="modal"> <FaEdit /></a> &nbsp;
                                                <a href={'#deletedistrict' + district.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                        </tr>
                                       <div id={'deletedistrict' + district.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleDelete(e, district.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Şehir Düzeyi Sil</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Emin misin {district.cityName + ' isimli dilin  ' + district.name + ' isimli dil düzeyini silemeye'}</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={'updatedistrict' + district.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    
                                                    <form >
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Şehir Düzeyi Güncelle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <div className="form-group">
                                                                <label>Şehir  ID</label>
                                                                {district.id}
                                                                <input type="text" className="form-control" value={district.id} disabled/>
                                                            </div>
                                                            <div className="form-group">

                                                                <label>Şehir  Adı</label>

                                                                <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                defaultValue={district.name} 
                                                                
                                                                required 
                                                                onChange={(e) => {setUpdateDistrictName(e.target.value) ;console.log(e.target.value);
                                                                }}
                                                                />

                                                            </div>
                                                            <div className="form-group">
                                                                <label>Şehirler</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedCity}
                                                                    onChange={(e) => setUpdateSelectedCity(e.target.value)
                                                                    }><option value={district.cityId} selected>{district.cityName}</option>
                                                                    {cityControl &&
                                                                        citys.items.map((city: CityResponse) => (

                                                                            <option key={city.id} value={city.id}>{city.name}</option>
                                                                        )
                                                                        )
                                                                    }

                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-success" onClick={(e)=>{handleFormUpdate(e,district.id)}} value="Güncelle" />
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

         <div id="addDistrictModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">Şehir Düzeyi Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Şehir Düzey Adı</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddDistrictName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Şehirler</label>
                                    <select className="form-control" required
                                        value={addSelectedCity}
                                        onChange={(e) => setAddSelectedCity(e.target.value)
                                        }><option value="">Lütfen Bir Şehir Seçiniz </option>
                                        {cityControl &&
                                            citys.items.map((city: CityResponse) => (

                                                <option key={city.id} value={city.id}>{city.name}</option>

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

export default District



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

