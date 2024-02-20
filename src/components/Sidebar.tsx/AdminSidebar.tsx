import './style.css'
import 'react-bootstrap-sidebar-menu/dist/index'
import { Link } from 'react-router-dom';
import './style.css'
import { FaBuilding, FaChalkboardTeacher, FaDiscourse, FaFilePrescription, FaFileVideo, FaFillDrip, FaFontAwesome, FaHandshakeSlash, FaHashtag, FaLanguage, FaLayerGroup, FaMegaport, FaMountain, FaScroll, FaSpeakap, FaSquareFull, FaTag, FaTeamspeak, FaUber, FaUniversity, FaUserAlt, FaUserFriends, FaUsps, FaVideo } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type Props = {}
const menuItems=[
  // {
  //    name:'Öğrenciler',
  //    key:'first',
  //    to:'/ogrenciler',
  //    icon:<FaUserFriends/>
  // }, 
  {
    name:'Duyurular',
    key:'second',
    to:'/duyurular',
    icon:<FaScroll/>
 },
 {
  name:'Sınıflar',
  key:'third',
  to:'/siniflar',
  icon:<FaUniversity/>
},
{
  name:'Dersler',
  key:'d',
  to:'/dersler',
  icon:<FaFilePrescription/>
},
,{
  name:'Kurslar',
  key:'c',
  to:'/kurslar',
  icon:<FaDiscourse/>
},

{
  name:'İçerikler',
  key:'a',
  to:'/icerikler',
  icon:<FaFileVideo/>
},{
  name:'Genel Kategoriler',
  key:'fourth',
  to:'/genelKategoriler',
  icon:<FaLayerGroup/>
},{
  name:'Şehirler',
  key:'fifth',
  to:'/sehirler',
  icon:<FaMountain/>
},
{
  name:'İlçeler',
  key:'e',
  to:'/ilceler',
  icon:<FaMountain/>
},
{
  name:'Etiketler',
  key:'b',
  to:'/etiketler',
  icon:<FaTag/>
},
{
  name:'Sınavlar',
  key:'f',
  to:'/sinavlar',
  icon:<FaTeamspeak/>
},{
  name:'Eğitimciler',
  key:'g',
  to:'/egitimciler',
  icon:<FaChalkboardTeacher/>
},{
  name:'Diller',
  key:'h',
  to:'/diller',
  icon:<FaLanguage/>
},{
  name:'Dil Seviyeleri',
  key:'ı',
  to:'/dilSeviyeleri',
  icon:<FaSpeakap/>
},{
  name:'Yapımcı Firmalar',
  key:'i',
  to:'/yapimciFirmalar',
  icon:<FaBuilding/>
},{
  name:'Yetenekler',
  key:'j',
  to:'/yetenekler',
  icon:<FaFillDrip/>
},{
  name:'Sosyal Medyalar',
  key:'k',
  to:'/sosyalMedyalar',
  icon:<FaHashtag/>
},{
  name:'Başvurular',
  key:'l',
  to:'/basvurular',
  icon:<FaUber/>
},{
  name:'İçerik Kategorileri',
  key:'m',
  to:'/icerikKategorileri',
  icon:<FaUsps/>
},{
  name:'Anketler',
  key:'n',
  to:'/anketler',
  icon:<FaSquareFull/>
},{
  name:'Alt Kategoriler',
  key:'n',
  to:'/altKategoriler',
  icon:<FaSquareFull/>
},
]
const AdminSidebar = (props: Props) => {

    const[toggle,setToggle] = useState('');

    function menuToggle (){
      if(toggle == "drawMenu") {setToggle("")   }
      else {setToggle("drawMenu")}
    }

    

  return (
  <>
    <div id="menuHolder" className={toggle}>
      <div role="navigation" className="sticky-top border-bottom border-top" id="mainNavigation">
        <div className="flexMain">
          <div className="flex2">
            <button className="whiteLink siteLink "  style={{borderRight:"1px solid #eaeaea"}} onClick={()=>menuToggle()}><i className="fas fa-bars me-2"></i> MENU</button>
          </div>
          <div className="flex3 text-center" id="siteBrand">
            Tobeto Admin Panel
          </div>
    
          <div className="flex2 text-end d-block d-md-none">
            <button className="whiteLink siteLink"><i className="fas fa-search"></i></button>
          </div>
    
          <div className="flex2 text-end d-none d-md-block">
            <button className=" siteLink">Çıkış</button>
          </div>
        </div>
      </div>
    
      <div id="menuDrawer">
        
        <div>
          {menuItems.map((item)=>(
              <Link to={item.to} className="nav-menu-item">{item.icon} {item.name}</Link>

          ))}
        </div>
      </div>
    </div></>
  )
}


export default AdminSidebar