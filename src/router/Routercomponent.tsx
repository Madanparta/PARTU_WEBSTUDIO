import { Routes,Route } from 'react-router-dom';
import './routercomponent.scss';
import Visitorpage from '../pages/visitorpage/Visitorpage';
import Footercomponent from '../components/footercomponent/Footercomponent';
import Headercomponent from '../components/headercomponent/Headercomponent';
// import { useColor } from '../contexts/ColorContext';

const Routercomponent = () => {
  // const { textColor } = useColor();
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
      </Routes>

      <div className='footer-container'>
        <Footercomponent/>
      </div>
      
    </div>
  )
}

export default Routercomponent
