import { Button, Modal } from 'react-bootstrap'
import FormikInput from '../FormikInput'
import { Formik,Form } from 'formik'
import { AnyObject, object, string } from 'yup'
import { UpdateRequestModel } from '../../models/abstracts/ResponseAbstracts'
import { UpdateInputTypes } from '../../utils/requirements/form/formRequirementsAbstract'


type Props={
    onHide:any
    show:any
    modalHeader:string;
    initialValues:UpdateRequestModel;
    validationObject:AnyObject;
    updateFunc:(data:UpdateRequestModel)=>void;
    formikInputTypes:UpdateInputTypes[];
}

const ShowModal = (props:Props) => {
    const initialValues:UpdateRequestModel = props.initialValues;
    const validationSchema = props.validationObject;
 


  return (
    <>
     <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalHeader} Görüntüle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={initialValues}
          onSubmit={(initialValues:UpdateRequestModel) => {
            props.updateFunc(initialValues)
          }}
          validationSchema={validationSchema}
        >
            <Form>
                {props.formikInputTypes.map((type)=>(
                    <FormikInput
                    name={type.name}
                    label={type.label}
                    disabled={true}
                  />
                ))}
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

export default ShowModal