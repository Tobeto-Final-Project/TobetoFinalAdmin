import React, { useEffect, useState } from 'react'
import "./StudentClass.css";
import { Button, Col, Modal, Row, Toast } from 'react-bootstrap';
import { FaAddressBook, FaFileArchive, FaPlus, FaTrash } from 'react-icons/fa';
import { Formik, Form, FormikHelpers, FormikValues, ErrorMessage, Field } from 'formik';
import FormikInput from '../../FormikInput';
import { object, string } from 'yup';
import { CreateClassAnnouncementRequest, CreateClassExamRequest, CreateClassLectureRequest, CreateClassStudentRequest, CreateClassSurveyRequest, CreateStudentClassRequest } from '../../../models/requests/dashboard/studentClasses/StudentClassRequests';
import { CreateInputTypes } from '../../../utils/requirements/form/formRequirementsAbstract';
import StudentClassService from '../../../services/dashboard/studentClasses/StudentClassService';
import { GetListStudentClassResponse, StudentClassResponse } from '../../../models/responses/dashboard/studentClasses/StudentClassResponses';
import { GUID } from '../../../services/BaseService';
import SurveyService from '../../../services/dashboard/surveys/SurveyService';
import { GetListSurveyResponse, SurveyResponse } from '../../../models/responses/dashboard/surveys/SurveyResponses';
import ClassSurveyService from '../../../services/dashboard/classSurveys/ClassSurveyService';
import { GetListAnnouncementResponse } from '../../../models/responses/dashboard/announcements/AnnouncementResponses';
import AnnouncementService from '../../../services/dashboard/announcements/AnnouncementService';
import ClassAnnouncementService from '../../../services/dashboard/classAnnouncements/ClassAnnouncementService';
import { GetListExamResponse } from '../../../models/responses/dashboard/exams/ExamResponses';
import ClassExamService from '../../../services/dashboard/classExams/ClassExamService';
import ExamService from '../../../services/dashboard/exams/ExamService';
import { GetListLectureResponse } from '../../../models/responses/dashboard/lectures/LectureResponses';
import ClassLectureService from '../../../services/dashboard/classLectures/ClassLectureService';
import LectureService from '../../../services/dashboard/lectures/LectureService';
import { GetListStudentResponse } from '../../../models/responses/dashboard/students/StudentResponses';
import ClassStudentService from '../../../services/dashboard/classStudents/ClassStudentService';
import StudentService from '../../../services/dashboard/students/StudentService';
type Props = {}

const StudentClass = (props: Props) => {
    const [addClassModalShow, setAddClassModalShow] = useState(false);
    const [studentClasses, setStudentClasses] = useState<GetListStudentClassResponse>();
    const [mainControl, setMainControl] = useState(false);
    const [getAllControl, setGetAllControl] = useState(false);
    const [reloadFlag, setReloadFlag] = useState(false);
    const [getAllDetailModalShow, setGetAllDetailModalShow] = useState(false);
    const [classForShowClassModal, setClassForShowClassModal] = useState<StudentClassResponse>();

    //Öğrenciler
    const [addClassStudentModalShow, setAddClassStudentModalShow] = useState(false);
    const [classForClassStudentModal, setClassForClassStudentModal] = useState<StudentClassResponse>();
    const [students, setStudents] = useState<GetListStudentResponse>();
    const [studentControl, setStudentControl] = useState(false);
    const createClassStudentInitialValues: CreateClassStudentRequest = {
        studentClassId: '',
        studentId: '',
    }
    const createClassStudentValidationSchema = object({
        studentId: string().required('Student Id Alanı Zorunludur*')

    });
    let studentService: StudentService = new StudentService();
    let classStudentService: ClassStudentService = new ClassStudentService();
    const handleClassStudentAddForm = (initialValues: CreateClassStudentRequest) => {

        classStudentService.create({ studentClassId: classForClassStudentModal.id, studentId: initialValues.studentId }).then(() => {
            setAddClassStudentModalShow(false);
            setReloadFlag((prev) => !prev);
        }).then((r) => {
            console.log(r);
        })
    }

    //dersler
    const [addClassLectureModalShow, setAddClassLectureModalShow] = useState(false);
    const [classForClassLectureModal, setClassForClassLectureModal] = useState<StudentClassResponse>();
    const [lectures, setLectures] = useState<GetListLectureResponse>();
    const [lectureControl, setLectureControl] = useState(false);
    const createClassLectureInitialValues: CreateClassLectureRequest = {
        studentClassId: '',
        lectureId: '',
    }
    const createClassLectureValidationSchema = object({
        lectureId: string().required('Lecture Id Alanı Zorunludur*')

    });
    const createClassLectureInputTypes: CreateInputTypes[] = [
        { name: 'classId', label: 'Sınıf Id' },
        { name: 'lectureId', label: 'Dersler' }
    ];
    let lectureService: LectureService = new LectureService();
    let classLectureService: ClassLectureService = new ClassLectureService();
    const handleClassLectureAddForm = (initialValues: CreateClassLectureRequest) => {

        classLectureService.create({ studentClassId: classForClassLectureModal.id, lectureId: initialValues.lectureId }).then(() => {
            setAddClassLectureModalShow(false);
            setReloadFlag((prev) => !prev);
        }).then((r) => {
            console.log(r);
        })
    }
    //sınavlar
    const [addClassExamModalShow, setAddClassExamModalShow] = useState(false);
    const [classForClassExamModal, setClassForClassExamModal] = useState<StudentClassResponse>();
    const [exams, setExams] = useState<GetListExamResponse>();
    const [examControl, setExamControl] = useState(false);
    const createClassExamInitialValues: CreateClassExamRequest = {
        studentClassId: '',
        examId: '',
    }
    const createClassExamValidationSchema = object({
        examId: string().required('Exam Id Alanı Zorunludur*')

    });
    const createClassExamInputTypes: CreateInputTypes[] = [
        { name: 'classId', label: 'Sınıf Id' },
        { name: 'examId', label: 'Anketler' }
    ];
    let examService: ExamService = new ExamService();
    let classExamService: ClassExamService = new ClassExamService();
    const handleClassExamAddForm = (initialValues: CreateClassExamRequest) => {

        classExamService.create({ studentClassId: classForClassExamModal.id, examId: initialValues.examId }).then(() => {
            setAddClassExamModalShow(false);
            setReloadFlag((prev) => !prev);
        }).then((r) => {
            console.log(r);
        })
    }//
    //anketler
    const [addClassSurveyModalShow, setAddClassSurveyModalShow] = useState(false);
    const [classForClassSurveyModal, setClassForClassSurveyModal] = useState<StudentClassResponse>();
    const [surveys, setSurveys] = useState<GetListSurveyResponse>();
    const [surveyControl, setSurveyControl] = useState(false);
    const createClassSurveyInitialValues: CreateClassSurveyRequest = {
        studentClassId: '',
        surveyId: '',
    }
    const createClassSurveyValidationSchema = object({
        surveyId: string().required('Survey Id Alanı Zorunludur*')

    });
    const createClassSurveyInputTypes: CreateInputTypes[] = [
        { name: 'classId', label: 'Sınıf Id' },
        { name: 'surveyId', label: 'Anketler' }
    ];
    let surveyService: SurveyService = new SurveyService();
    let classSurveyService: ClassSurveyService = new ClassSurveyService();
    const handleClassSurveyAddForm = (initialValues: CreateClassSurveyRequest) => {

        classSurveyService.create({ studentClassId: classForClassSurveyModal.id, surveyId: initialValues.surveyId }).then(() => {
            setAddClassSurveyModalShow(false);
            setReloadFlag((prev) => !prev);
        }).then((r) => {
            console.log(r);
        })
    }//

    //Duyurular
    const [addClassAnnouncementModalShow, setAddClassAnnouncementModalShow] = useState(false);
    const [classForClassAnnouncementModal, setClassForClassAnnouncementModal] = useState<StudentClassResponse>();
    const [announcements, setAnnouncements] = useState<GetListAnnouncementResponse>();
    const [announcementControl, setAnnouncementControl] = useState(false);
    const createClassAnnouncementInitialValues: CreateClassAnnouncementRequest = {
        studentClassId: '',
        announcementId: '',
    }
    const createClassAnnouncementValidationSchema = object({
        announcementId: string().required('Announcement Id Alanı Zorunludur*')

    });
    const createClassAnnouncementInputTypes: CreateInputTypes[] = [
        { name: 'classId', label: 'Sınıf Id' },
        { name: 'announcementId', label: 'Anketler' }
    ];
    let announcementService: AnnouncementService = new AnnouncementService();
    let classAnnouncementService: ClassAnnouncementService = new ClassAnnouncementService();
    const handleClassAnnouncementAddForm = (initialValues: CreateClassAnnouncementRequest) => {

        classAnnouncementService.create({ studentClassId: classForClassAnnouncementModal.id, announcementId: initialValues.announcementId }).then(() => {
            setAddClassAnnouncementModalShow(false);
            setReloadFlag((prev) => !prev);
        }).then((r) => {
            console.log(r);
        });
    }
    //
    const createStudentClassInitialValues = {
        name: ''
    }

    const createStudentClassValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const createStudentClassInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Sınıf Adı' }
    ];
    let studentClassService: StudentClassService = new StudentClassService();
    const handleStudentClassAddForm = (initialValues: CreateStudentClassRequest) => {
        studentClassService.create(initialValues).then(() => {
            setAddClassModalShow(false);
            setReloadFlag((prev) => !prev);
        });
    }
    const handleStudentClassDelete = (e, id: GUID | string) => {
        e.preventDefault();
        studentClassService.delete(id).then(() => {
            setReloadFlag((prev) => !prev);
        })
    }

    useEffect(() => {
        studentClassService.getAll("0", "100").then((response) => {
            setStudentClasses(response.data);
            console.log(response.data.items);

        }).then(() => {
            setMainControl(true)

        }).then(() => {
            surveyService.getAll('0', '100').then((response) => {
                setSurveys(response.data);
            }).then(() => { setSurveyControl(true) });

            announcementService.getAll('0', '100').then((response) => {
                setAnnouncements(response.data);
            }).then(() => { setAnnouncementControl(true) });

            examService.getAll('0', '100').then((response) => {
                setExams(response.data);
            }).then(() => { setExamControl(true) });

            lectureService.getAll('0', '100').then((response) => {
                setLectures(response.data);
            }).then(() => { setLectureControl(true) });

            studentService.getAll('0', '100').then((response) => {
                setStudents(response.data);
                console.log(response.data );
                
            }).then(() => { setStudentControl(true) });
        });
    }, [reloadFlag])





    return (
        <>
            {mainControl && <><section className="light">
                <div className="container py-2">
                    <div className="h1 text-center text-dark" id="pageHeaderTitle">Sınıflar  <Button variant="warning" onClick={() => setAddClassModalShow(true)}>
                        Ekle <FaPlus />
                    </Button></div>
                    {
                        studentClasses.items.map((studentClass) => (
                            <>
                                <article className="postcard light blue">
                                    <a className="postcard__img_link" href="#">
                                        <img className="postcard__img" src="https://img.freepik.com/free-vector/empty-classroom-interior-with-chalkboard_1308-65378.jpg" alt="Image Title" />
                                    </a>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title blue" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                            <a>{studentClass.name} <FaFileArchive onClick={() => {
                                                setClassForShowClassModal(studentClass); setGetAllDetailModalShow(true); setGetAllControl(true); 
                                            }} style={{ fontSize: '32px', cursor: 'pointer' }} /></a>
                                            <a href={'#deleteStudentClass' + studentClass.id} className="delete" data-toggle="modal" style={{ color: 'red' }}><FaTrash /></a>
                                        </h1>


                                        <ul className="postcard__tagbox" style={{ display: 'flex', alignItems: 'center' }}>
                                            <li className="tag__item play blue">
                                                <a onClick={() => { setClassForClassSurveyModal(studentClass); setAddClassSurveyModalShow(true) }}>Anket Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a onClick={() => { setClassForClassAnnouncementModal(studentClass); setAddClassAnnouncementModalShow(true) }}>Duyuru Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a onClick={() => { setClassForClassExamModal(studentClass); setAddClassExamModalShow(true) }}>Sınav Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a onClick={() => { setClassForClassLectureModal(studentClass); setAddClassLectureModalShow(true) }}>Ders Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a onClick={() => { setClassForClassStudentModal(studentClass); setAddClassStudentModalShow(true) }}>Öğrenci Ekle</a>
                                            </li>
                                        </ul>

                                    </div>


                                </article>
                                <div id={'deleteStudentClass' + studentClass.id} className="modal fade">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <form onSubmit={(e) => handleStudentClassDelete(e, studentClass.id)}>
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Sınıf Sil</h4>
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Emin misin {studentClass.name + ' isimli içeriği silemeye'}</p>
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

                        )).reverse()
                    }


                </div>
            </section>

            </>

            }
            {getAllControl &&
                <Modal
                    onHide={() => setGetAllDetailModalShow(false)}
                    show={getAllDetailModalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {classForShowClassModal.name} Sınıf'ı Detayları
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={createClassStudentInitialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                handleClassStudentAddForm(values)
                            }}
                            validationSchema={createClassStudentValidationSchema}
                        >
                            <Form >

                                <div className="mb-3 ">
                                    <h3>Sınavlar</h3>
                                    {
                                        classForShowClassModal.exams.map((exam) => (
                                            <>
                                                {
                                                    <div>{
                                                        <div>
                                                            {exam.name}
                                                        </div>

                                                    }
                                                    </div>
                                                }
                                            </>
                                        ))
                                    }
                                    <h3>Duyurular</h3>
                                    {
                                        classForShowClassModal.announcements.map((announcement) => (
                                            <>
                                                {
                                                    <div>{
                                                        <div>
                                                            {announcement.name}
                                                        </div>

                                                    }
                                                    </div>
                                                }
                                            </>
                                        ))
                                    }
                                    <h3>Dersler</h3>
                                    {
                                        classForShowClassModal.lectures.map((lecture) => (
                                            <>
                                                {
                                                    <div>{
                                                        <div>
                                                            {lecture.name}
                                                        </div>

                                                    }
                                                    </div>
                                                }
                                            </>
                                        ))
                                    }
                                    <h3>Anketler</h3>
                                    {
                                        classForShowClassModal.surveys.map((survey) => (
                                            <>
                                                {
                                                    <div>{
                                                        <div>
                                                            {survey.name}
                                                        </div>

                                                    }
                                                    </div>
                                                }
                                            </>
                                        ))
                                    }
                                    <h3>Öğrenciler</h3>
                                    {
                                        classForShowClassModal.students.map((student) => (
                                            <>
                                                    {console.log(student)}
                                                { 
                                                
                                                    <div>{
                                                        <div>
                                                            Adı:{student.userFirstName} Soyadı:{student.userLastName} Email:{student.userEmail}
                                                        </div>

                                                    }
                                                    </div>
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </Form>
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setGetAllDetailModalShow(false)}>Close</Button>
                    </Modal.Footer>


                </Modal>}
            {classForClassStudentModal &&
                <Modal
                    onHide={() => setAddClassStudentModalShow(false)}
                    show={addClassStudentModalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {classForClassStudentModal.name} Sınıf'ına Öğrenci Ekle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={createClassStudentInitialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                handleClassStudentAddForm(values)
                            }}
                            validationSchema={createClassStudentValidationSchema}
                        >
                            <Form >
                                <div className="mb-3 ">
                                    <label className="form-label">Sınıf Id &nbsp;</label>
                                    <Field
                                        name={'classId'}
                                        type={'text'}
                                        className="login-input"
                                        value={classForClassStudentModal.id}
                                        disabled
                                    />
                                    <ErrorMessage name={"classId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Öğrenciler &nbsp;</label>
                                    <Field name={'studentId'} as='select' className='form-control'>
                                        <option value="">Lütfen Bir Öğrenci Seçiniz</option>
                                        {
                                            students.items.map((student) => (
                                                <option value={student.id}>{student.userFirstName} {student.userLastName}  {student.userEmail}</option>
                                            ))
                                        }

                                    </Field>
                                    <ErrorMessage name={"studentId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>

                                <Button className="btn btn-success" type="submit" value={'Ekle'}   >
                                    {"Ekle"}
                                </Button>
                            </Form>
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setAddClassStudentModalShow(false)}>Close</Button>
                    </Modal.Footer>


                </Modal>}


            {classForClassLectureModal &&
                <Modal
                    onHide={() => setAddClassLectureModalShow(false)}
                    show={addClassLectureModalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {classForClassLectureModal.name} Sınıf'ına Ders Ekle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={createClassLectureInitialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                handleClassLectureAddForm(values)
                            }}
                            validationSchema={createClassLectureValidationSchema}
                        >
                            <Form >
                                <div className="mb-3 ">
                                    <label className="form-label">Sınıf Id &nbsp;</label>
                                    <Field
                                        name={'classId'}
                                        type={'text'}
                                        className="login-input"
                                        value={classForClassLectureModal.id}
                                        disabled
                                    />
                                    <ErrorMessage name={"classId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Dersler &nbsp;</label>
                                    <Field name={'lectureId'} as='select' defaulValue='' className='form-control'>
                                        <option value="">Lütfen Bir Ders Seçiniz</option>
                                        {
                                            lectures.items.map((lecture) => (
                                                <option value={lecture.id}>{lecture.name}</option>
                                            ))
                                        }

                                    </Field>
                                    <ErrorMessage name={"lectureId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>

                                <Button className="btn btn-success" type="submit" value={'Ekle'}   >
                                    {"Ekle"}
                                </Button>
                            </Form>
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setAddClassLectureModalShow(false)}>Close</Button>
                    </Modal.Footer>


                </Modal>}

            {classForClassExamModal &&
                <Modal
                    onHide={() => setAddClassExamModalShow(false)}
                    show={addClassExamModalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {classForClassExamModal.name} Sınıf'ına Sınav Ekle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={createClassExamInitialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                handleClassExamAddForm(values)
                            }}
                            validationSchema={createClassExamValidationSchema}
                        >
                            <Form >
                                <div className="mb-3 ">
                                    <label className="form-label">Sınıf Id &nbsp;</label>
                                    <Field
                                        name={'classId'}
                                        type={'text'}
                                        className="login-input"
                                        value={classForClassExamModal.id}
                                        disabled
                                    />
                                    <ErrorMessage name={"classId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Sınavlar &nbsp;</label>
                                    <Field name={'examId'} as='select' defaulValue='' className='form-control'>
                                        <option value="">Lütfen Bir Sınav Seçiniz</option>
                                        {
                                            exams.items.map((exam) => (
                                                <option value={exam.id}>{exam.name}</option>
                                            ))
                                        }

                                    </Field>
                                    <ErrorMessage name={"examId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>

                                <Button className="btn btn-success" type="submit" value={'Ekle'}   >
                                    {"Ekle"}
                                </Button>
                            </Form>
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setAddClassExamModalShow(false)}>Close</Button>
                    </Modal.Footer>


                </Modal>}

            {classForClassAnnouncementModal &&
                <Modal
                    onHide={() => setAddClassAnnouncementModalShow(false)}
                    show={addClassAnnouncementModalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {classForClassAnnouncementModal.name} Sınıf'ına Anket Ekle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={createClassAnnouncementInitialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                handleClassAnnouncementAddForm(values)
                            }}
                            validationSchema={createClassAnnouncementValidationSchema}
                        >
                            <Form >
                                <div className="mb-3 ">
                                    <label className="form-label">Sınıf Id &nbsp;</label>
                                    <Field
                                        name={'classId'}
                                        type={'text'}
                                        className="login-input"
                                        value={classForClassAnnouncementModal.id}
                                        disabled
                                    />
                                    <ErrorMessage name={"classId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Duyurular &nbsp;</label>
                                    <Field name={'announcementId'} as='select' defaulValue='' className='form-control'>
                                        <option value="">Lütfen Bir Duyuru Seçiniz</option>
                                        {
                                            announcements.items.map((announcement) => (
                                                <option value={announcement.id}>{announcement.name}</option>
                                            ))
                                        }

                                    </Field>
                                    <ErrorMessage name={"announcementId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>

                                <Button className="btn btn-success" type="submit" value={'Ekle'}   >
                                    {"Ekle"}
                                </Button>
                            </Form>
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setAddClassAnnouncementModalShow(false)}>Close</Button>
                    </Modal.Footer>


                </Modal>}

            {classForClassSurveyModal &&
                <Modal
                    onHide={() => setAddClassSurveyModalShow(false)}
                    show={addClassSurveyModalShow}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {classForClassSurveyModal.name} Sınıf'ına Anket Ekle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={createClassSurveyInitialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                handleClassSurveyAddForm(values)
                            }}
                            validationSchema={createClassSurveyValidationSchema}
                        >
                            <Form >
                                <div className="mb-3 ">
                                    <label className="form-label">Sınıf Id &nbsp;</label>
                                    <Field
                                        name={'classId'}
                                        type={'text'}
                                        className="login-input"
                                        value={classForClassSurveyModal.id}
                                        disabled
                                    />
                                    <ErrorMessage name={"classId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label">Anketler &nbsp;</label>
                                    <Field name={'surveyId'} as='select' defaulValue='' className='form-control'>
                                        <option value="">Lütfen Bir Anket Seçiniz</option>
                                        {
                                            surveys.items.map((survey) => (
                                                <option value={survey.id}>{survey.name}</option>
                                            ))
                                        }

                                    </Field>
                                    <ErrorMessage name={"surveyId"}>
                                        {message => <Row>
                                            <Col xs={12}>
                                                <Toast show={true} delay={3000} autohide>
                                                    <Toast.Body >{message}</Toast.Body>
                                                </Toast>
                                            </Col>

                                        </Row>}
                                    </ErrorMessage>
                                </div>

                                <Button className="btn btn-success" type="submit" value={'Ekle'}   >
                                    {"Ekle"}
                                </Button>
                            </Form>
                        </Formik>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setAddClassSurveyModalShow(false)}>Close</Button>
                    </Modal.Footer>


                </Modal>}

            <Modal
                onHide={() => setAddClassModalShow(false)}
                show={addClassModalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sınıf Ekle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={createStudentClassInitialValues}
                        onSubmit={async (values) => {
                            console.log(values);
                            handleStudentClassAddForm(values)
                        }}
                        validationSchema={createStudentClassValidationSchema}
                    >
                        <Form >

                            {createStudentClassInputTypes.map((studentClassInput) => (
                                <FormikInput name={studentClassInput.name} label={studentClassInput.label} type="text"
                                />
                            ))}

                            <Button className="btn btn-success" type="submit" value={'Ekle'}   >
                                {"Ekle"}
                            </Button>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setAddClassModalShow(false)}>Close</Button>
                </Modal.Footer>


            </Modal>
        </>
    )
}

export default StudentClass