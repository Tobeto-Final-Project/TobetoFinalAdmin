import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Modal, Table } from 'react-bootstrap'
import { GetAllModel, SingleResponseModel, UpdateRequestModel, UpdatedResponseModel } from '../../models/abstracts/ResponseAbstracts'
import UpdateModal from '../modals/updateModal';
import { UpdateInitialValues, UpdateInputTypes, updateValidationSchema } from '../../utils/requirements/form/formRequirementsAbstract';
import { Form, Formik } from 'formik';
import FormikInput from '../FormikInput';
import { json } from 'stream/consumers';


type Props = {
    response:GetAllModel<SingleResponseModel>;
    updateInputTypes:UpdateInputTypes[];
    updateInitialValues:UpdateInitialValues;
    updateValidationSchema:updateValidationSchema;
    updateFunc:(data:UpdateRequestModel)=>void;
    updateModalHeader:string
}

const MainTable = (props:Props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [attributes,setAttributes]=useState<string[]>();
    const initialValues:UpdateRequestModel = props.updateInitialValues;
    const validationSchema = props.updateValidationSchema;

     useEffect(() => {
       const attribute =Object.keys(props.response.items[0]);
       setAttributes(attribute);
    
       
      }, [])
  
       
       
    
    
  return (
    <>
     <Table  {...props}>
      <thead>
        <tr>
          <th>#</th>
            {attributes?.map((attribute) => (
            <th >{attribute}</th>
          ))}   
          <th> Operasyonlar</th>
        </tr>
      </thead>
      <tbody>
        {props.response.items.map((item:any,index)=>(
            <tr>
            <td>{index+1}</td>
            {attributes?.map((attribute) => (
                    <td >{item[attribute]}</td>
                   
          ))}  
              
            <td className='d-flex justify-content-center'>
            <Dropdown >
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                
              </Dropdown.Toggle>
              
             
              <Dropdown.Menu>
                <Dropdown.Item  onClick={() => setModalShow(true)}>Güncelle</Dropdown.Item>
                     <Modal
                      show={modalShow}
                      
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          {props.updateModalHeader} Güncelle
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik initialValues={initialValues}
                          onSubmit={(initialValues: UpdateRequestModel) => {
                            props.updateFunc(initialValues)
                          }}
                          validationSchema={validationSchema}
                        >
                          <Form>
                            
                            {props.updateInputTypes.map((type) => (
                              <FormikInput
                                name={type.name}
                                label={type.label}
                                value={Object.values(item[0]).toString()}//not end
                              />
                            ))}
                            <button className="btn btn-success" type="submit" >

                              {"Güncelle"}

                            </button>
                          </Form>
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={()=>setModalShow(false)}  >Close</Button>
                      </Modal.Footer>
                    </Modal>
                <Dropdown.Item href="#/action-2">Sil</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Görüntüle</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></td>
          </tr>
        ))}
        
       
      </tbody>
    </Table>
    </>
  )
}

export default MainTable