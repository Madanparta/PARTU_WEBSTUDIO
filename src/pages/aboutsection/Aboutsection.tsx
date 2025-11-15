import './aboutsection.scss';
import about from '../../assets/svgs/about.jpg';
import BG from '../../assets/svgs/BG.svg';
import { useDisableCopyPaste } from '../../hooks/useDisableCopyPaste';

const Aboutsection = () => {
  useDisableCopyPaste(true);
  return (
    <section className='about-component' aria-labelledby="about-heading">
      
      <div className="aboutinfo-section">
        <div className="heading-section">
            <span className="brand-logo" aria-hidden="true">
                <img src="/logos/android-chrome-192x192.png" alt="" />
            </span>
            <h2 id="about-heading">
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

        <div className="about-paragraphs">
          <p>At Partu Webstudio, we’re more than a creative agency we’re a collective of designers, developers, and visionaries dedicated to transforming ideas into extraordinary digital experiences.</p>
          <p>We believe the best work happens through collaboration. By blending diverse perspectives and skills, we create an environment where imagination thrives and innovation comes naturally.</p>
          <p>From strategy to execution, every detail reflects our commitment to crafting meaningful, impactful, and visually stunning solutions. At Partu Webstudio, creativity isn’t just part of the process it’s our defining principle.</p>
        </div>

      </div>

      <aside className="aboutimage-section" aria-hidden="true">
        <div className="imagecontainer">
            <img src={about} alt="" />
        </div>
      </aside>

      <div className="bg-layer" aria-hidden="true">
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
      </div>
    </section>
  )
}

export default Aboutsection
