
import { Button, Modal } from 'react-bootstrap'
import FormikInput from '../FormikInput'
import { Formik,Form } from 'formik'
import { AnyObject, object, string } from 'yup'
import { CreateRequestModel } from '../../models/abstracts/ResponseAbstracts'
import { CreateInitialValues, CreateInputTypes } from '../../utils/requirements/form/formRequirementsAbstract'



type Props={
    onHide:any
    show:any
    modalHeader:string;
    initialValues:CreateInitialValues;
    validationObject:AnyObject;
    createFunc:(data:CreateRequestModel)=>void;
    formikInputTypes?:CreateInputTypes[];
}

const AddModal = (props:Props) => {
    const initialValues:CreateRequestModel = props.initialValues;
    const validationSchema = props.validationObject;
  console.log(initialValues);
  
    
 
    
  return (
    <>
     <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalHeader} Ekle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={initialValues}
          onSubmit={(initialValues:CreateRequestModel) => {
            console.log(initialValues);
            
            props.createFunc(initialValues)
          }}
          validationSchema={validationSchema}
        >
            <Form>
                {props.formikInputTypes.map((type)=>(
                    <FormikInput
                    name={type.name}
                    label={type.label}
                    placeHolder={type?.placeHolder}
                    value={type?.value}
                    type ={type?.type}
                  />
                ))}
            <button className="btn btn-success" type="submit" >
              
              {"Ekle"}
              
            </button>
            </Form>
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default AddModal