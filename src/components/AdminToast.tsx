import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
type Props = {
  show:boolean,
  body:string
}
function AdminToast(props:Props) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={12}>
        <Toast onClose={() => setShow(false)} show={props.show} delay={3000} autohide>
          
          <Toast.Body>{props.body}</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
  );
}

export default AdminToast;