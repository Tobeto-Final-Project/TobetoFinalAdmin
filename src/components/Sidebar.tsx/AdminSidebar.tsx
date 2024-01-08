import './style.css'
import 'react-bootstrap-sidebar-menu/dist/index'
import { Link } from 'react-router-dom';
import './style.css'
import { FaBuilding, FaChalkboardTeacher, FaDiscourse, FaFilePrescription, FaFileVideo, FaFillDrip, FaFontAwesome, FaHandshakeSlash, FaHashtag, FaLanguage, FaLayerGroup, FaMegaport, FaMountain, FaScroll, FaSpeakap, FaSquareFull, FaTag, FaTeamspeak, FaUber, FaUniversity, FaUserAlt, FaUserFriends, FaUsps, FaVideo } from 'react-icons/fa';

type Props = {}
const menuItems=[
  {
     name:'Öğrenciler',
     key:'first',
     to:'/ogrenciler',
     icon:<FaUserFriends/>
  }, {
    name:'Duyurular',
    key:'second',
    to:'/duyurular',
    icon:<FaScroll/>
 },
 {
  name:'Sınıflar',
  key:'third',
  to:'/duyurular',
  icon:<FaUniversity/>
},{
  name:'Genel Kategoriler',
  key:'fourth',
  to:'/duyurular',
  icon:<FaLayerGroup/>
},{
  name:'Ülkeler',
  key:'fifth',
  to:'/duyurular',
  icon:<FaMountain/>
},
{
  name:'İlçeler',
  key:'e',
  to:'/duyurular',
  icon:<FaMountain/>
},
{
  name:'Videolar',
  key:'a',
  to:'/duyurular',
  icon:<FaFileVideo/>
},{
  name:'Tagler',
  key:'b',
  to:'/duyurular',
  icon:<FaTag/>
},{
  name:'Kurslar',
  key:'c',
  to:'/duyurular',
  icon:<FaDiscourse/>
},
{
  name:'Modüller',
  key:'d',
  to:'/duyurular',
  icon:<FaFilePrescription/>
},{
  name:'Sınavlar',
  key:'f',
  to:'/duyurular',
  icon:<FaTeamspeak/>
},{
  name:'Eğitimciler',
  key:'g',
  to:'/duyurular',
  icon:<FaChalkboardTeacher/>
},{
  name:'Diller',
  key:'h',
  to:'/duyurular',
  icon:<FaLanguage/>
},{
  name:'Dil Seviyeleri',
  key:'ı',
  to:'/duyurular',
  icon:<FaSpeakap/>
},{
  name:'Yapımcı Firmalar',
  key:'i',
  to:'/firmalar',
  icon:<FaBuilding/>
},{
  name:'Yetenekler',
  key:'j',
  to:'/duyurular',
  icon:<FaFillDrip/>
},{
  name:'Sosyal Medyalar',
  key:'k',
  to:'/duyurular',
  icon:<FaHashtag/>
},{
  name:'Başvurular',
  key:'l',
  to:'/duyurular',
  icon:<FaUber/>
},{
  name:'Video Kategorileri',
  key:'m',
  to:'/duyurular',
  icon:<FaUsps/>
},{
  name:'Anketler',
  key:'n',
  to:'/duyurular',
  icon:<FaSquareFull/>
},
]
const AdminSidebar = (props: Props) => {

    var menuHolder = document.getElementById('menuHolder')
    var siteBrand = document.getElementById('siteBrand')
    function menuToggle(){
      if(menuHolder.className == "drawMenu") menuHolder.className = ""
      else menuHolder.className = "drawMenu"
    }
    if(window.innerWidth < 426) siteBrand.innerHTML = "MAS"
    window.onresize = function(){
      if(window.innerWidth < 420) siteBrand.innerHTML = "MAS"
      else siteBrand.innerHTML = "Tobeto Admin Panel"
    }

  return (
  <>
    <div id="menuHolder">
      <div role="navigation" className="sticky-top border-bottom border-top" id="mainNavigation">
        <div className="flexMain">
          <div className="flex2">
            <button className="whiteLink siteLink" style={{borderRight:"1px solid #eaeaea"}} onClick={()=>menuToggle()}><i className="fas fa-bars me-2"></i> MENU</button>
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
              <a href="#" className="nav-menu-item">{item.icon} {item.name}</a>

          ))}
        </div>
      </div>
    </div></>
  )
}


export default AdminSidebar