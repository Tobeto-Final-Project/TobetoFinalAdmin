import React, { useEffect, useState } from 'react'
import { CategoryResponse, GetListCategoryResponse } from '../../../models/responses/dashboard/categories/CategoryResponses';
import { GetListManufacturerResponse } from '../../../models/responses/dashboard/manufacturers/GetListManufacturerResponse';
import CategoryService from '../../../services/dashboard/categories/CategoryService';
import ManufacturerService from '../../../services/dashboard/manufacturers/ManufacturerService';
import { GetListLectureResponse, LectureResponse } from '../../../models/responses/dashboard/lectures/LectureResponses';
import LectureService from '../../../services/dashboard/lectures/LectureService';
import CourseService from '../../../services/dashboard/courses/CourseService';
import { CourseResponse, GetListCourseResponse } from '../../../models/responses/dashboard/courses/CourseResponses';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { ManufacturerResponse } from '../../../models/responses/dashboard/manufacturers/ManufacturerResponse';
import { CreateLectureCourseRequest, CreateLectureRequest } from '../../../models/requests/dashboard/lectures/LectureRequests';
import { GUID } from '../../../services/BaseService';
import LectureCourseService from '../../../services/dashboard/lectures/LectureCourseService';
    
    type Props = {}
    
    const Lecture = (props: Props) => {
        const [addLectureName, setAddLectureName] = useState('');
        const [addUrlName, setAddUrl] = useState('');
        const [addDuration, setAddDuration] = useState(0);
        const [endTime, setAddEndTime] = useState(Date);
        const [startTime, setAddStartTime] = useState(Date);

        const [lectures, setLecture] = useState<GetListLectureResponse>();

        const [control, setControl] = useState<boolean>(false);
        const [reloadFlag, setReloadFlag] = useState(false);

        let service: LectureService = new LectureService();

        const [categoryControl, setCategoryControl] = useState<boolean>(false);
        const [addSelectedCategory, setAddCategory] = useState<any>();
        const [categories, setCategories] = useState<GetListCategoryResponse>();
        let categoryService: CategoryService = new CategoryService();

        const [manufacturerControl, setManufacturerControl] = useState<boolean>(false);
        const [addSelectedManufacturer, setAddManufacturer] = useState<any>();
        const [manufacturers, setManufacturers] = useState<GetListManufacturerResponse>();
        let manufacturerService: ManufacturerService = new ManufacturerService();

        const [courseControl, setCourseControl] = useState<boolean>(false);
        const [addSelectedCourse, setAddCourse] = useState<any>();
        const [courses, setCourse] = useState<GetListCourseResponse>();
        let courseService: CourseService = new CourseService();

        const [lectureCourseControl,setLectureCourseControl] =useState<boolean>(false);
        const [addLectureCourse, setAddLectureCourse] = useState<any>();
        let lectureCourseService: LectureCourseService = new LectureCourseService();

        const handleFormLectureCourseAdd=(e,createLectureId:string|GUID)=>{
            e.preventDefault();
            let createLectureCourse :CreateLectureCourseRequest={
                lectureId:createLectureId,
                courseId:addSelectedCourse
            }
            lectureCourseService.create(createLectureCourse).then((res) => setReloadFlag((prev) => !prev));
        }
        const handleFormLectureAdd =(e)=>{
            e.preventDefault();
            let createdLecture:CreateLectureRequest={
                name:addLectureName,
                categoryId:addSelectedCategory,
                imageUrl:addUrlName,
                estimatedDuration:addDuration,
                manufacturerId:addSelectedManufacturer,
                startDate:new Date(startTime),
                endDate:new Date(endTime)
            }
            service.create(createdLecture).then((res) => setReloadFlag((prev) => !prev)).then(()=>setAddCourse(''));
        }
        const handleFormLectureDelete = (e, id: GUID | string) => {
            e.preventDefault();
            service.delete(id).then(() => setReloadFlag((prev) => !prev))
        }
        useEffect(() => {
            service.getAll("0", "100").then((response) => {
                console.log(response.data);
                
                setLecture(response.data);
            }).then(() => setControl(true))
                .then(() => {
                    
                    categoryService.getAll("0", "100").then((response) => {
                        setCategories(response.data);
                    }).then(() => setCategoryControl(true));
                    manufacturerService.getAll("0", "100").then((response) => {
                        setManufacturers(response.data);
                    }).then(() => setManufacturerControl(true));
                    courseService.getAll("0", "100").then((response) => {
                        setCourse(response.data);
                    }).then(() => setCourseControl(true));
                }
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
                                    <h2><b>Dersleri </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addLectureModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Adı</th>
                                    <th>Kategorisi</th>
                                    <th>Resim Url'i </th>
                                    <th>Tahmini Süresi</th>
                                    <th>Yapımcı Firma</th>
                                    <th>Başlangıç Zamanı</th>
                                    <th>Bitiş Zamanı</th>
                                    <th>Operasyonlar</th>
                                    <th>Bişiler Ekle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && lectures.items.map((lecture: LectureResponse) => (
                                    <>
                                        <tr>
                                            <td>{lecture.id}</td>
                                            <td>{lecture.name}</td>
                                            <td>{lecture.categoryName}</td>
                                            <td>{lecture.imageUrl}</td>
                                            <td>{lecture.estimatedVideoDuration}</td>
                                            <td>{lecture.manufacturerName}</td>
                                            <td>{JSON.stringify(lecture.startDate)}</td>
                                            <td>{JSON.stringify(lecture.endDate)}</td>


                                            <td>
                                                &nbsp;&nbsp;&nbsp;<a href={'#showMoreLecture' + lecture.id} className="edit" data-toggle="modal"> <FaEdit /></a> &nbsp;
                                                <a href={'#deleteLecture' + lecture.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                            <td>
                                                <a href={"#addLectureCourseModal" + lecture.id } className="btn btn-info" data-toggle="modal"> <span><FaPlus />Kurs Ekle</span></a>
                                               
                                            </td>
                                           
                                        </tr>
                                         <div id={"addLectureCourseModal" + lecture.id }className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e)=>handleFormLectureCourseAdd(e,lecture.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Derse Bir Kurs Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Kurslar</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedCourse}
                                                                    onChange={(e) => setAddCourse(e.target.value)
                                                                    }><option value="">Lütfen Bir Kurs Seçiniz </option>
                                                                    {courseControl &&
                                                                        courses.items.map((course:CourseResponse) => (
                                                                            <option key={course.id} value={course.id}>{course.name}</option>
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
                                       
                                         <div id={'deleteLecture' + lecture.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleFormLectureDelete(e, lecture.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Ders Sil</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Emin misin {lecture.name + ' isimli içeriği silemeye'}</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={'showMoreLecture' + lecture.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    <form >
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">İçerik Göster</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Ders  ID</label>
                                                                {lecture.id}
                                                                <input type="text" className="form-control" value={lecture.id} disabled />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Ders Adı  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.name}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Ders Kursları</label>
                                                                {
                                                                   lecture.courses?.map((course:CourseResponse)=>(
                                                                    <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={course.name}
                                                                    disabled

                                                                />
                                                                   ))
                                                                }
                                                               
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
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

            <div id="addLectureModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormLectureAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">Ders Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Ders Adı</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddLectureName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Kategoriler</label>
                                    <select className="form-control" required
                                        value={addSelectedCategory}
                                        onChange={(e) => setAddCategory(e.target.value)
                                        }><option value="">Lütfen Bir Kurs Seçiniz </option>
                                        {categoryControl &&
                                            categories.items.map((category: CategoryResponse) => (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>İmage Url</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddUrl(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Yapımcı Firmalar</label>
                                    <select className="form-control" required
                                        value={addSelectedManufacturer}
                                        onChange={(e) => setAddManufacturer(e.target.value)
                                        }><option value="">Lütfen Bir Yapıcı Firma Seçiniz </option>
                                        {manufacturerControl &&
                                            manufacturers.items.map((manufacturer: ManufacturerResponse) => (
                                                <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                               
                                <div className="form-group">
                                    <label>Başlangıç Zamanı</label>
                                    <input type="datetime-local" className="form-control" required onChange={(e) => setAddStartTime(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Bitiş Zamanı</label>
                                    <input type="datetime-local" className="form-control" required onChange={(e) => setAddEndTime(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Tahmini Bitiş Süresi</label>
                                    <input type="number" className="form-control" required onChange={(e) => setAddDuration(parseInt(e.target.value))} />
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
    
    export default Lecture