
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import './style.css'

import 'react-bootstrap-sidebar-menu/dist/index'
import { useState } from 'react';
import { Button, Col, Nav, Offcanvas, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'

type Props = {}
const options = [

  {
    name: 'Disable backdrop',
    scroll: true,
    backdrop: false,
  },
];
const menuItems=[
  {
     name:'Öğrenciler',
     key:'first',
     to:'/ogrenciler'
  }, {
    name:'Duyurular',
    key:'second',
    to:'/duyurular'
 },
 {
  name:'Sınıflar',
  key:'third',
  to:'/duyurular'
},{
  name:'Genel Kategoriler',
  key:'fourth',
  to:'/duyurular'
},{
  name:'Ülkeler',
  key:'fifth',
  to:'/duyurular'
},{
  name:'Videolar',
  key:'a',
  to:'/duyurular'
},{
  name:'Tagler',
  key:'b',
  to:'/duyurular'
},{
  name:'Kurslar',
  key:'c',
  to:'/duyurular'
},
{
  name:'Modüller',
  key:'d',
  to:'/duyurular'
},{
  name:'İlçeler',
  key:'e',
  to:'/duyurular'
},{
  name:'Sınavlar',
  key:'f',
  to:'/duyurular'
},{
  name:'Eğitimciler',
  key:'g',
  to:'/duyurular'
},{
  name:'Diller',
  key:'h',
  to:'/duyurular'
},{
  name:'Dil Seviyeleri',
  key:'ı',
  to:'/duyurular'
},{
  name:'Yapımcı Firmalar',
  key:'i',
  to:'/firmalar'
},{
  name:'Yetenekler',
  key:'j',
  to:'/duyurular'
},{
  name:'Sosyal Medyalar',
  key:'k',
  to:'/duyurular'
},{
  name:'Başvurular',
  key:'l',
  to:'/duyurular'
},{
  name:'Video Kategorileri',
  key:'m',
  to:'/duyurular'
},{
  name:'Anketler',
  key:'n',
  to:'/duyurular'
},
]
const AdminSidebar = (props: Props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
  <div>
    <Button variant="primary" onClick={toggleShow} className="me-2">
      .
    </Button>
    <div>   <Offcanvas  show={show} onHide={handleClose} {...props}>
      <Offcanvas.Header >
        <Offcanvas.Title>Admin Panel <span className='' onClick={toggleShow}>X</span></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="flex-column">
                {menuItems.map((object)=>(
                  <Nav.Item >
                  <Nav.Link eventKey={object.key} ><Link className='btn btn-info' style={{ textDecoration: 'none' }} to={object.to}>{object.name}</Link></Nav.Link>
                </Nav.Item>
                ))}
                
              </Nav>
            </Col>
            
          </Row>
        </Tab.Container>
      </Offcanvas.Body>
    </Offcanvas>
    </div>
 
  </div>
  )
}
function Sidebar(parameters) {
  return (
    <>
      {options.map((props, idx) => (
        <AdminSidebar key={idx} {...props} />
      ))}
    </>
  )
}

export default Sidebar