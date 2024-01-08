
import { Button, Modal } from 'react-bootstrap'
import { Formik,Form } from 'formik'
import { CreateRequestModel, SingleResponseModel } from '../../models/abstracts/ResponseAbstracts'
import { GUID } from '../../services/BaseService'



type Props={
    onHide:any
    show:any
    modalHeader:string;
    deleteFunc:(id:GUID|number|string)=>void;
    item:any;
}

const DeleteModal = (props:Props) => {
  const handleDelete = () => {
   
    const itemId = props.item;
    props.deleteFunc(itemId);
   
  };
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
          {props.modalHeader} Sil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
            ({props.item}) Id'li {props.modalHeader} 'yi silmek istediğinize emin misiniz ?
                
         
      </Modal.Body>
      <Modal.Footer>
      <button className="btn btn-danger" type="submit" onClick={
        handleDelete
      }>
              {"Sil"}
      </button>
        <Button onClick={props.onHide}>İptal</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default DeleteModal