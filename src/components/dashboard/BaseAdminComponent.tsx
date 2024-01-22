import React, { useEffect, useState } from 'react'
import MainTable from '../../components/dashboard/MainTable'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";
import AddModal from '../../components/modals/addModal';
import { BaseAdminComponentRequirements, CreateInputTypes, UpdateInitialValues, UpdateInputTypes } from '../../utils/requirements/form/formRequirementsAbstract';
import { CreateRequestModel, CreatedResponseModel, GetAllModel, SingleResponseModel, UpdateRequestModel } from '../../models/abstracts/ResponseAbstracts';
import { GUID } from '../../services/BaseService';
import ExceptionService from '../../services/ExceptionService';



type Props = {
    requirement: BaseAdminComponentRequirements;
}

const BaseAdminComponent = (props: Props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [anyObject, setObjects] = useState<GetAllModel<SingleResponseModel>>();
    const [mainControl, setMainControl] = useState(false);
    const [reloadFlag, setReloadFlag] = useState(false);

    let exceptionService:ExceptionService=new ExceptionService();
    const create = (initialValues: CreateRequestModel) => {
        props.requirement.service.create(initialValues).then((response) => {
            setShow(true);
            setModalShow(false);
            setToastMessage("Eklendi");
            setReloadFlag((prev) => !prev);
        }).catch((err:any)=>{
            console.log(exceptionService.showExceptionMessage(JSON.stringify(err.response.data)));
            
        })
    }
    const update = (initialValues: UpdateInitialValues) => {
        props.requirement.service.update(initialValues).then((response) => {
            setShow(true);
            setModalShow(false);
            setReloadFlag((prev) => !prev);
        }).then(() => setToastMessage("Güncellendi")).catch((err:any)=>{
            console.log(exceptionService.showExceptionMessage(JSON.stringify(err.response.data)));
            
        });
    }

    const deleteAny = (id: GUID | number | string) => {
        props.requirement.service.delete(id).then(

        ).then(() => { setToastMessage("Silindi"); setReloadFlag((prev) => !prev); }).catch((err:any)=>{
            console.log(exceptionService.showExceptionMessage(JSON.stringify(err.response.data)));
            
        })
    }


    useEffect(() => {
        props.requirement.service.getAll("0", "100")
            .then((response) => {
                setObjects(response.data);
            })
            .then(() => {
                setMainControl(true)
            }).catch((err:any)=>{
                console.log(exceptionService.showExceptionMessage(JSON.stringify(err.response.data)));
                
            });

    }, [reloadFlag])

    return (<>
        <Row>
            <Col xs={12}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body >{toastMessage}</Toast.Body>
                </Toast>
            </Col>

        </Row>
        <>
            {!mainControl && "Şu Anda Burası Boş Ekle!"}
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2><b>{props.requirement.componentHeader} </b> Yönet </h2>
                                </div>
                                <div className="col-sm-6">
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Ekle <FaPlus></FaPlus>
                                    </Button>
                                    <AddModal
                                        modalHeader={props.requirement.componentHeader}
                                        show={modalShow}
                                        validationObject={props.requirement.createValidationSchema}
                                        initialValues={props.requirement.createInitialValues}
                                        onHide={() => setModalShow(false)}
                                        formikInputTypes={props.requirement.createInputTypes}
                                        createFunc={create} />
                                </div>
                            </div>
                        </div>
                        {mainControl &&
                        <MainTable
                            response={anyObject}
                            updateInputTypes={props.requirement.updateInputTypes}
                            updateInitialValues={props.requirement.updateInitialValues}
                            updateValidationSchema={props.requirement.updateValidationSchema}
                            updateFunc={update}
                            updateModalHeader={props.requirement.componentHeader}
                            deleteFunc={deleteAny}
                        />}
                    </div>
                </div>
            </div>


        </>
    </>
    )
}

export default BaseAdminComponent