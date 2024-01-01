import React, { useEffect, useState } from 'react'
import MainTable from '../../components/dashboard/MainTable'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import { FaPlus } from "react-icons/fa";
import AddModal from '../../components/modals/addModal';
import { CreateManufacturerRequest } from '../../models/requests/dashboard/manufacturers/CreateManufacturerRequest';
import { object, string } from 'yup';
import ManufacturerService from '../../services/dashboard/manufacturers/ManufacturerService';
import { ManufacturerResponse } from '../../models/responses/dashboard/manufacturers/ManufacturerResponse';
import { GetListManufacturerResponse } from '../../models/responses/dashboard/manufacturers/GetListManufacturerResponse';
import { createManufacturerValidationSchema } from '../../utils/validationSchemas/manufacturers/createManufacturerValidationSchema';
import { CreateInputTypes, UpdateInputTypes } from '../../utils/formikInputTypes/abstracts/abstracts';


type Props = {
    createInputTypes:CreateInputTypes[];
    updateInputTypes:UpdateInputTypes[];
}

const Manufacturer = (props: Props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [manufacturers, setManufacturers] = useState<GetListManufacturerResponse>();
    const [mainControl,setMainControl]=useState(false);

    let service: ManufacturerService = new ManufacturerService();
    
    
   
    const submit = (initialValues: CreateManufacturerRequest) => {
        service.create(initialValues).then((response) => {
            setShow(true);
            setModalShow(false);
            initialValues.name = "";
            setToastMessage(response.data.name + "Eklendi")
        })
    }
    


    useEffect(() => {
        service.getAll("0", "10")
        .then((response) => {
            setManufacturers(response.data);
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
                    <h2>Yapımcı Firmalar</h2>
                </div>
                <div className="col-md-2">
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ekle <FaPlus></FaPlus>
                    </Button>

                    <AddModal modalHeader='Yapıcı Firma Ekle'
                        show={modalShow}
                        validationObject={createManufacturerValidationSchema}
                        initialValues={createManufacturerValidationSchema}
                        onHide={() => setModalShow(false)}

                        formikInputTypes={props.createInputTypes}
                        createFunc={submit} />


                </div>
            </div>
            <div className="row mt-3">
                <hr />
                <div className="col-md-12">{mainControl && <MainTable response={manufacturers} updateInputTypes={props.updateInputTypes} />}</div>
            </div>
        </div>
    </>
    )
}

export default Manufacturer