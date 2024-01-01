import React, { useEffect, useState } from 'react'
import { Dropdown, Table } from 'react-bootstrap'
import { GetAllModel, SingleResponseModel, UpdateRequestModel, UpdatedResponseModel } from '../../models/responses/Abstracts/ResponseAbstracts'
import UpdateModal from '../modals/updateModal';
import { updateManufacturerInputTypes } from '../../utils/formikInputTypes/manufacturers/updateManufacturerInputTypes';
import { UpdateManufacturerRequest } from '../../models/requests/dashboard/manufacturers/UpdateManufacturerRequest';
import { updateManufacturerValidationSchema } from '../../utils/validationSchemas/manufacturers/updateManufacturerValidationSchema';
import { updateManufacturerInitialValues } from '../../utils/initialValues/manufacturers/updateManufacturerInitialValues';
import { UpdateInputTypes } from '../../utils/formikInputTypes/abstracts/abstracts';

type Props = {
    response:GetAllModel<SingleResponseModel>;
    updateInputTypes:UpdateInputTypes[];
}

const MainTable = (props:Props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [attributes,setAttributes]=useState<string[]>();
    
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
                    <td >{item[attribute].substring(0,20)}</td>
                   
          ))}  
              
            <td className='d-flex justify-content-center'>
            <Dropdown >
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                <Dropdown.Item  onClick={() => setModalShow(true)}>Güncelle</Dropdown.Item>
                    <UpdateModal 
                    show={modalShow} onHide={() => setModalShow(false)} 
                    modalHeader={'Yapıcı Firma Güncelle'} 
                    initialValues={updateManufacturerInitialValues} 
                    validationObject={updateManufacturerValidationSchema} 
                    createFunc={function (data: UpdateManufacturerRequest): void {
                                throw new Error('Function not implemented.');
                            } } 
                    formikInputTypes={props.updateInputTypes}/> 
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