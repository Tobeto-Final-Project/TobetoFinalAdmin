import { Button, Modal } from 'react-bootstrap'

import { SingleResponseModel, UpdateRequestModel } from '../../models/abstracts/ResponseAbstracts'
import { useEffect, useState } from 'react'


type Props={
    onHide:any
    show:any
    modalHeader:string;
    item:SingleResponseModel;
    attributes:string[];
}

const ShowModal = (props:Props) => {
  console.log(props.attributes);
  
    const [attributes,setAttributes]=useState<string[]>();
    const [control,setAttributeControl]=useState<boolean>(false);
    useEffect(() => {
      setAttributes(props.attributes);
      const timer = setTimeout(() => {
        if (attributes!=null) {
          setAttributeControl(true)
        }
        
      }, 1000);
      return () => clearTimeout(timer); 
    }, [])
    
    


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
        {control && attributes?.map((attribute)=>(
            <div>{attribute} ={' '}
                {props.item[attribute]}
            </div>
        ))} 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ShowModal