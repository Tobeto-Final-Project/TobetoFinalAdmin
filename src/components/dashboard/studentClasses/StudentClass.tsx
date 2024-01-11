import React, { useEffect, useState } from 'react'
import "./StudentClass.css";
import { Button, Modal } from 'react-bootstrap';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import { CreateRequestModel } from '../../../models/abstracts/ResponseAbstracts';
import FormikInput from '../../FormikInput';
import { object, string } from 'yup';
import { CreateStudentClassRequest } from '../../../models/requests/dashboard/studentClasses/StudentClassRequests';
import { CreateInputTypes } from '../../../utils/requirements/form/formRequirementsAbstract';
import StudentClassService from '../../../services/dashboard/studentClasses/StudentClassService';
import { GetListStudentClassResponse } from '../../../models/responses/dashboard/studentClasses/StudentClassResponses';
import { GUID } from '../../../services/BaseService';
type Props = {}

const StudentClass = (props: Props) => {
    const [addClassModalShow, setAddClassModalShow] = useState(false);
    const [deleteClassModalShow, setDeleteClassModalShow] = useState(false);
    const [studentClasses, setStudentClasses] = useState<GetListStudentClassResponse>();
    const [mainControl, setMainControl] = useState(false);
    const [reloadFlag, setReloadFlag] = useState(false);

    const createStudentClassInitialValues = {
        name: ''
    }
    console.log(createStudentClassInitialValues);

    const createStudentClassValidationSchema = object({
        name: string().required('İsim Alanı Zorunludur*')
    });
    const createStudentClassInputTypes: CreateInputTypes[] = [
        { name: 'name', label: 'Sınıf Adı' }
    ];
    let studentClassService: StudentClassService = new StudentClassService();

    useEffect(() => {
        studentClassService.getAll("0", "100").then((response) => {
            setStudentClasses(response.data);
        }).then(() => setMainControl(true));
    }, [reloadFlag])



    const handleStudentClassAddForm = (initialValues: CreateStudentClassRequest) => {
        studentClassService.create(initialValues).then(() => {
            setAddClassModalShow(false);
            setReloadFlag((prev) => !prev);
        })
    }
    const handleStudentClassDelete = (e, id: GUID | string) => {
        e.preventDefault();
        studentClassService.delete(id).then(() => {
            setDeleteClassModalShow(false);
            setReloadFlag((prev) => !prev);
        })
    }
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
                                        <h1 className="postcard__title blue" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <a href="">{studentClass.name}</a>
                                            <a href={'#deleteStudentClass' + studentClass.id} className="delete" data-toggle="modal"><FaTrash /></a>
                                        </h1>


                                        <ul className="postcard__tagbox" style={{ display: 'flex', alignItems: 'center' }}>
                                            <li className="tag__item play blue">
                                                <a href="#">Anket Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a href="#">Duyuru Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a href="#">Sınav Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a href="#">Öğrenci Ekle</a>
                                            </li>
                                            <li className="tag__item play blue">
                                                <a href="#">Ders Ekle</a>
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
                        onSubmit={async (values, { resetForm }) => {
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