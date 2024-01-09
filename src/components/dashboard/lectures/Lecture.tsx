import React, { useEffect, useState } from 'react'
import { GetListCategoryResponse } from '../../../models/responses/dashboard/categories/CategoryResponses';
import { GetListManufacturerResponse } from '../../../models/responses/dashboard/manufacturers/GetListManufacturerResponse';
import CategoryService from '../../../services/dashboard/categories/CategoryService';
import ManufacturerService from '../../../services/dashboard/manufacturers/ManufacturerService';
import { GetListLectureResponse, LectureResponse } from '../../../models/responses/dashboard/lectures/LectureResponses';
import LectureService from '../../../services/dashboard/lectures/LectureService';
import CourseService from '../../../services/dashboard/courses/CourseService';
import { GetListCourseResponse } from '../../../models/responses/dashboard/courses/CourseResponses';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
    
    type Props = {}
    
    const Lecture = (props: Props) => {
        const [addLectureName, setAddLectureName] = useState('');
        const [addDescription, setAddDescription] = useState('');
        const [addUrlName, setAddUrl] = useState('');
        const [addDuration, setAddDuration] = useState(0);

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
        const [course, setCourse] = useState<GetListCourseResponse>();
        let courseService: CourseService = new CourseService();

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
                                        {/* <div id={"addLectureCourseModal" + lecture.id }className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-lecture">
                                                    <form onSubmit={(e)=>handleFormLectureCourseAdd(e,lecture.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">İçeriğe Eğitimci Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Eğitmenler</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedCourse}
                                                                    onChange={(e) => setAddLectureCourse(e.target.value)
                                                                    }><option value="">Lütfen Bir Eğitmen Seçiniz </option>
                                                                    {instructorControl &&
                                                                        instructors.items.map((instructor:CourseResponse) => (
                                                                            <option key={instructor.id} value={instructor.id}>{instructor.firstName + " " +  instructor.lastName}</option>
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
                                        </div> */}
                                        {/* <div id={"addLectureTagModal" + lecture.id }className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-lecture">
                                                    <form onSubmit={(e)=>handleFormLectureTagAdd(e,lecture.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Etiket Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Etiketler</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedTag}
                                                                    onChange={(e) => setAddLectureTag(e.target.value)
                                                                    }><option value="">Lütfen Bir Etiket Seçiniz </option>
                                                                    {tagControl &&
                                                                        tags.items.map((tag:TagResponse) => (
                                                                            <option key={tag.id} value={tag.id}>{tag.name}</option>
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
                                        </div> */}
                                        {/* <div id={'deleteLecture' + lecture.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-lecture">
                                                    <form onSubmit={(e) => handleLectureDelete(e, lecture.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Şehir Düzeyi Sil</h4>
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
                                        </div> */}
                                        {/* <div id={'showMoreLecture' + lecture.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-lecture">

                                                    <form >
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">İçerik Göster</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>İçerik  ID</label>
                                                                {lecture.id}
                                                                <input type="text" className="form-control" value={lecture.id} disabled />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Adı  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.name}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Dili  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.languageName}
                                                                    disabled

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Açıklaması  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.description}
                                                                    disabled

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Alt Kategorisi  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.subTypeName}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Url  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.videoUrl}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Süresi  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.duration}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div> <div className="form-group">
                                                                <label>İçerik Kategorisi  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.lectureCategoryName}
                                                                    disabled
                                                                    required

                                                                />
                                                            </div> <div className="form-group">
                                                                <label>İçerik Yapımcısı  </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={lecture.manufacturerName}
                                                                    disabled
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>İçerik Eğitimcileri  </label>
                                                                {instructorControl && lecture.instructors?.map((instructor:CourseResponse)=>(
                                                                        <h3>{instructor.firstName} {instructor.lastName}</h3>
                                                                ))} 
                                                            </div> 
                                                            <div className="form-group">
                                                                <label>İçerik Tagleri  </label>
                                                                {tagControl && lecture.tags?.map((tag:TagResponse)=>(
                                                                        <h3>{tag.name}</h3>
                                                                ))} 
                                                            </div> 
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> */}


                                    </>

                                )).reverse()}



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <div id="addLectureModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-lecture">
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
                                    <label>Kurslar</label>
                                    <select className="form-control" required
                                        value={addSelectedLanguage}
                                        onChange={(e) => setAddLanguage(e.target.value)
                                        }><option value="">Lütfen Bir Kurs Seçiniz </option>
                                        {languageControl &&
                                            languages.items.map((language: LanguageResponse) => (
                                                <option key={language.id} value={language.id}>{language.name}</option>
                                            )
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>İmage Url</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddDescription(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Yapımcı Firmalar</label>
                                    <select className="form-control" required
                                        value={addSelectedManufacturer}
                                        onChange={(e) => setAddLectureManufacturer(e.target.value)
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
                                    <input type="datetime-local" className="form-control" required onChange={(e) => setAddUrl(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Bitiş Zamanı</label>
                                    <input type="datetime-local" className="form-control" required onChange={(e) => setAddUrl(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Tahmini Bitiş Süresi</label>
                                    <input type="number" className="form-control" required onChange={(e) => setAddUrl(e.target.value)} />
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