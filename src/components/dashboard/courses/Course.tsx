import React, { useEffect, useState } from 'react'
import { CreateCourseContentRequest, CreateCourseRequest, UpdateCourseRequest } from '../../../models/requests/dashboard/courses/CourseRequests';
import { ContentResponse, GetListContentResponse } from '../../../models/responses/dashboard/contents/ContentResponses';
import { CourseResponse, GetListCourseResponse } from '../../../models/responses/dashboard/courses/CourseResponses';
import { GUID } from '../../../services/BaseService';
import ContentService from '../../../services/dashboard/contents/ContentService';
import CourseService from '../../../services/dashboard/courses/CourseService';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { CityResponse } from '../../../models/responses/dashboard/cities/CityResponses';
import { json } from 'stream/consumers';
import CourseContentService from '../../../services/dashboard/courses/CourseContentService';

type Props = {}

const Course = (props: Props) => {
    const [addSelectedContent, setAddSelectedContent] = useState<any>();
    const [addCourseName, setAddCourseName] = useState('');

    const [updateSelectedContent, setUpdateSelectedContent] = useState<any>();
    const [updateCourseName, setUpdateCourseName] = useState('');

    const [courses, setCourses] = useState<GetListCourseResponse>();

    const [courseId, setCourseId] = useState<any>();

    const [contents, setContents] = useState<GetListContentResponse>();
    const [contentControl, setContentControl] = useState<boolean>(false);
    const [control, setControl] = useState<boolean>(false);
    const [reloadFlag, setReloadFlag] = useState(false);

    let service: CourseService = new CourseService();
    let contentService: ContentService = new ContentService();
    let courseContentService:CourseContentService = new CourseContentService();
    const handleFormCourseAdd = (e) => {
        e.preventDefault();

        let Course: CreateCourseRequest = {
            name: addCourseName
        };

        service.create(Course).then((res) => setReloadFlag((prev) => !prev));
    };
    const handleFormContentAdd = (e,courseId:GUID|string) => {
        e.preventDefault();

        let CourseContent: CreateCourseContentRequest = {
            courseId: courseId,
            contentId:addSelectedContent
        };

        courseContentService.create(CourseContent).then((res) => setReloadFlag((prev) => !prev));
    };

    const handleFormCourseDelete = (e, id: GUID | string) => {
        e.preventDefault();
        service.delete(id).then(() => setReloadFlag((prev) => !prev))
    }


    useEffect(() => {
        service.getAll("0", "100").then((response) => {

            setCourses(response.data);
        }).then(() => setControl(true))
            .then(() =>
                contentService.getAll("0", "100").then((response) => {
                    setContents(response.data);
                })
                    .then(() => setContentControl(true))
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
                                    <h2><b>Kursları </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addCourseModal" className="btn btn-success" data-toggle="modal"> <span><FaPlus /> Ekle</span></a>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>İsim</th>
                                    <th>Operasyonlar</th>
                                    <th>İçerik Ekle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {control && courses.items.map((course: CourseResponse) => (
                                    <>
                                        <tr>

                                            <td>{course.id}</td>
                                            <td>{course.name}</td>
                                            <td>
                                                &nbsp;&nbsp;&nbsp;<a href={'#showMorecourse' + course.id} className="edit" data-toggle="modal"> <FaEdit /></a> &nbsp;
                                                <a href={'#deletecourse' + course.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                            </td>
                                            <td>
                                                <a href={"#addCourseContentModal" + course.id } className="btn btn-info" data-toggle="modal"> <span><FaPlus />İçerik Ekle</span></a>
                                            </td>
                                        </tr>
                                        <div id={'deletecourse' + course.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e) => handleFormCourseDelete(e, course.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Kurs Sil</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Emin misin {course.name + ' isimli kursu silmeye '}</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                                            <input type="submit" className="btn btn-danger" value="Delete" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={'showMorecourse' + course.id} className="modal fade">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    <form >
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Kurs Güncelle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>Kurs  ID</label>
                                                                <input type="text" className="form-control" value={course.id} disabled />
                                                            </div>
                                                            <div className="form-group">

                                                                <label>Kurs  Adı</label>

                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={course.name}


                                                                    disabled
                                                                />

                                                            </div>
                                                            <div className="form-group">
                                                                <h3>Contents</h3>
                                                                {
                                                                    course.contents.map((content) => (
                                                                        <>
                                                                            Adı = {content.name} <br />
                                                                            Eğitimcileri = {content.instructors.map((x) =>
                                                                            (
                                                                                <>
                                                                                <div>{x.firstName} {x.lastName}</div>
                                                                               
                                                                                </>
                                                                            )
                                                                            )}

                                                                      
                                                                      <br />  </>))
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
                                        <div id={"addCourseContentModal" + course.id} className="modal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <form onSubmit={(e)=> handleFormContentAdd(e,course.id)}>
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">İçerik Ekle</h4>
                                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>İçerikler</label>
                                                                <select className="form-control" required
                                                                    value={addSelectedContent}
                                                                    onChange={(e) => setAddSelectedContent(e.target.value)
                                                                    }><option value="">Lütfen Bir İçerik Seçiniz </option>
                                                                    {contentControl &&
                                                                        contents.items.map((content: ContentResponse) => (

                                                                            <option key={content.id} value={content.id}>{content.name}</option>

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

                                )).reverse()}



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


            <div id="addCourseModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleFormCourseAdd}>
                            <div className="modal-header">
                                <h4 className="modal-title">Kurs Ekle</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Kurs Adı</label>
                                    <input type="text" className="form-control" required onChange={(e) => setAddCourseName(e.target.value)} />
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

export default Course