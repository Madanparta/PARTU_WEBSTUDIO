import { Routes,Route } from 'react-router-dom';
import './routercomponent.scss';
import Visitorpage from '../pages/visitorpage/Visitorpage';
import Footercomponent from '../components/footercomponent/Footercomponent';
import Headercomponent from '../components/headercomponent/Headercomponent';
import Contactsection from '../pages/contactsection/Contactsection';
import Privacyandpolicy from '../pages/privacyandpolicy/Privacyandpolicy';
import Infoservicepage from '../pages/infoservicepage/Infoservicepage';
import Items from '../pages/infoservicepage/items/Items';
import { Loadingcomponent } from '../components/loadingcomponent/Loadingcomponent';
import { useEffect, useState } from 'react';

const Routercomponent = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 5500);
    const finishTimer = setTimeout(() => setLoading(false), 6500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div className="route-container">
      {loading && 
        <div className={`loading-overlay ${fadeOut ? 'fade-out' : 'fade-in'}`}>
          <Loadingcomponent />
        </div>
      }

      <div className={`main-content ${!loading ? 'content-visible' : 'content-hidden'}`}>
        
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

      
    </div>
  )
}

export default Routercomponent
