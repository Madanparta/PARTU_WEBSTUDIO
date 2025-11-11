import Aboutsection from '../aboutsection/Aboutsection';
import Herosection from '../herosecton/Herosection';
import Servicesection from '../servicesection/Servicesection';
import Aboutsection2 from '../servicesection2/Aboutsection2';
import './visitorpage.scss';

const Visitorpage = () => {

  return (
    <div className='visiter-container'>

      <Herosection/>

      <div className="about-container" id="about">
        <Aboutsection/>
      </div>

      <div className='service-container'>
        <div className="infonav">
          <p>Experts crafting your <br />Creative Future</p>
          <div className='line'></div>
        </div>
        <Servicesection/>
      </div>

      <div className="about2-container">
        <Aboutsection2/>
      </div>

    </div>
  )
}

export default Visitorpage