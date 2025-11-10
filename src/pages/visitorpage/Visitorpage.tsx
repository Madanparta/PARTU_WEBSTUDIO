import SectionWrapper from '../../components/sectionwrapper/Sectionwrapper';
import Aboutsection from '../aboutsection/Aboutsection';
import Herosection from '../herosecton/Herosection';
import Servicesection from '../servicesection/Servicesection';
import Aboutsection2 from '../servicesection2/Aboutsection2';
import './visitorpage.scss';

const Visitorpage = () => {
  return (
    <div className='visiter-container'>
      <SectionWrapper backgroundColor="black" textColor="white">
        <Herosection/>
      </SectionWrapper>

      <SectionWrapper backgroundColor="white" textColor="black">
        <div className="about-container" id="about">
          <Aboutsection/>
        </div>
      </SectionWrapper>

      <SectionWrapper backgroundColor="black" textColor="white">
        <div className='service-container'>
          <div className="infonav">
            <p>Experts crafting your <br />Creative Future</p>
            <div className='line'></div>
          </div>
          <Servicesection/>
        </div>
      </SectionWrapper>

      <SectionWrapper backgroundColor="white" textColor="black">
        <div className="about2-container">
          <Aboutsection2/>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Visitorpage