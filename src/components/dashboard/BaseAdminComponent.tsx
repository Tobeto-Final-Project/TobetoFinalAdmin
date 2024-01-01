import React, { useEffect, useState } from 'react'
import MainTable from '../../components/dashboard/MainTable'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";
import AddModal from '../../components/modals/addModal';
import { BaseAdminComponentRequirements, CreateInputTypes, UpdateInitialValues, UpdateInputTypes } from '../../utils/requirements/form/formRequirementsAbstract';
import { CreateRequestModel, GetAllModel, SingleResponseModel, UpdateRequestModel } from '../../models/abstracts/ResponseAbstracts';



type Props = {
    requirement:BaseAdminComponentRequirements;
}

const BaseAdminComponent = (props: Props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [anyObject, setObjects] = useState<GetAllModel<SingleResponseModel>>();
    const [mainControl,setMainControl]=useState(false);

    const create = (initialValues:CreateRequestModel) => {
       
       
       props.requirement.service.create(initialValues).then((response) => {
            setShow(true);
           setModalShow(false);
            setToastMessage("Eklendi")
         })
     }
    const update=(initialValues:UpdateInitialValues)=>{
        props.requirement.service.update(initialValues).then((response) => {
            setShow(true);
            setModalShow(false);
            
        }).then(()=>setToastMessage("Güncellendi"));
    }
    useEffect(() => {
        props.requirement.service.getAll("0", "10")
        .then((response) => {
            setObjects(response.data);
        })
        .then(()=>{
            setMainControl(true)
        });

    }, [])

    return (<>
        <Row>
            <Col xs={12}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body >{toastMessage}</Toast.Body>
                </Toast>
            </Col>

        </Row>
        <div className="container mt-5">
            <div className="row d-flex justify-content-between">

                <div className="col-md-10">
                    <h2>{props.requirement.componentHeader}</h2>
                </div>
                <div className="col-md-2">
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ekle <FaPlus></FaPlus>
                    </Button>

                    <AddModal 
                        modalHeader={props.requirement.componentHeader}
                        show={modalShow}
                        validationObject={props.requirement.createValidationSchema}
                        initialValues={props.requirement.createInitialValues}//burda kaldık .....
                        onHide={() => setModalShow(false)}
                        formikInputTypes={props.requirement.createInputTypes}
                        createFunc={create} />


                </div>
            </div>
            <div className="row mt-3">
                <hr />
                <div className="col-md-12">
                    {mainControl && 
                    <MainTable 
                    response={anyObject}
                    updateInputTypes={props.requirement.updateInputTypes} 
                    updateInitialValues={props.requirement.updateInitialValues} 
                    updateValidationSchema={props.requirement.updateValidationSchema} 
                    updateFunc={update} 
                    updateModalHeader={props.requirement.componentHeader}                     
                    />}
                    </div>
            </div>
        </div>
    </>
    )
}

export default BaseAdminComponent