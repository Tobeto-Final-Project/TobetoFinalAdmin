
import { Button, Modal } from 'react-bootstrap'
import FormikInput from '../FormikInput'
import { Formik,Form } from 'formik'
import { AnyObject, object, string } from 'yup'
import { CreateRequestModel } from '../../models/responses/Abstracts/ResponseAbstracts'
import { xService } from '../../services/xService'
import { CreateInputTypes } from '../../utils/formikInputTypes/abstracts/abstracts'


type Props={
    onHide:any
    show:any
    modalHeader:string;
    initialValues?:CreateRequestModel;
    validationObject?:AnyObject;
    createFunc:(data:CreateRequestModel)=>void;
    formikInputTypes?:CreateInputTypes[];
}

const AddModal = (props:Props) => {
    const initialValues:CreateRequestModel = props.initialValues;
    const validationSchema = props.validationObject;

    console.log(props.initialValues);
    console.log(props.validationObject);
 
    
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
          {props.modalHeader}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={initialValues}
          onSubmit={(initialValues:CreateRequestModel) => {
            props.createFunc(initialValues)
          }}
          validationSchema={validationSchema}
        >
            <Form>
                {props.formikInputTypes.map((type)=>(
                    <FormikInput
                    name={type.name}
                    label={type.label}
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