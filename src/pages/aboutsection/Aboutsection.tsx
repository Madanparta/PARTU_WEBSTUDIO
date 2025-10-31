import './aboutsection.scss';
import about from '../../assets/svgs/about.jpg';
import BG from '../../assets/svgs/BG.svg';

const Aboutsection = () => {
  return (
    <div className='about-component'>
      
      <div className="aboutinfo-section">
        <div className="heading-section">
            <span>
                <img src="/logos/android-chrome-192x192.png" alt="" />
            </span>
            <h2>
                <span>Partu</span><br />
                <span>WebStudio</span>
            </h2>
        </div>

        <div className="subheading-section">
            <h3>
                <span>Discover</span><br />
                <span>Our</span> <span>Studio</span>
            </h3>
        </div>

        <p>At Partu Webstudio, we’re more than a creative agency we’re a collective of designers, developers, and visionaries dedicated to transforming ideas into extraordinary digital experiences.</p>
        <p>We believe the best work happens through collaboration. By blending diverse perspectives and skills, we create an environment where imagination thrives and innovation comes naturally.</p>
        <p>From strategy to execution, every detail reflects our commitment to crafting meaningful, impactful, and visually stunning solutions. At Partu Webstudio, creativity isn’t just part of the process it’s our defining principle.</p>
      </div>

      <div className="aboutimage-section">
        <div className="imagecontainer">
            <img src={about} alt="" />
        </div>
      </div>

      <div className="bg-layer">
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
      </div>
    </div>
  )
}

export default Aboutsection
