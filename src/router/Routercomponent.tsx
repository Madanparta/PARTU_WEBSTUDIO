import { Routes,Route } from 'react-router-dom';
import './routercomponent.scss';
import Visitorpage from '../pages/visitorpage/Visitorpage';
import Footercomponent from '../components/footercomponent/Footercomponent';
import Headercomponent from '../components/headercomponent/Headercomponent';
import Contactsection from '../pages/contactsection/Contactsection';
import Privacyandpolicy from '../pages/privacyandpolicy/Privacyandpolicy';
import Infoservicepage from '../pages/infoservicepage/Infoservicepage';
import Items from '../pages/infoservicepage/items/Items';

const Routercomponent = () => {
  return (
    <div className="route-container">

      {/* <nav className='micronav'>
        <p className='horizontal-text' style={{ color: textColor }} onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}>
          HOME
        </p>
      </nav> */}

      <div className="header-container">
        <Headercomponent/>
      </div>

      <Routes>
        <Route path="/" element={<Visitorpage/>}/>
        <Route path="/contact" element={<Contactsection/>}/>
        <Route path="/policy" element={<Privacyandpolicy/>}/>
        <Route path="/service" element={<Infoservicepage/>}/>

        <Route path="/service/:encoded" element={<Items />} />
      </Routes>

      <div className='footer-container'>
        <Footercomponent/>
      </div>
      
    </div>
  )
}

export default Routercomponent
