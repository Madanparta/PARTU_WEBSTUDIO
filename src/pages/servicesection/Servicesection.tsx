import './servicesection.scss';
import eyeimage from '../../assets/svgs/eye-img.jpg';
import Primarybutton from '../../components/primarybutton/Primarybutton';
import rightarrow from '../../assets/svgs/right-arrow.svg';
import BG from '../../assets/svgs/BG.svg';

const Servicesection = () => {
  return (
    <div className='sericesection-component'>

      <div className="heading-section">
        <div className="z-layout">
          <span className="icon-image">
            <img src={eyeimage} alt="" />
          </span>
          <div className="text-content">
            <div className="first-line">
              <span className="distinctive">Distinctive</span>
              <span className="solutions">Solutions</span>
            </div>
            <div className="second-line">
              <span className="for-your">For Your</span>
              <span className="business">Business.</span>
              <Primarybutton/>
            </div>
          </div>
        </div>
      </div>

      <div className="cards-section">

        <div className="cardcontainer">
            <h4>Branding & Identity <br /> Design</h4>
            <p>We craft distinctive brand identities that capture your essence and connect deeply with your audience.</p>

            <span>
                <img src={rightarrow} alt="" />
            </span>
        </div>

        <div className="cardcontainer">
            <h4>Digital Marketing</h4>
            <p>We elevate your brand’s presence through data-driven strategies that inspire engagement and growth.</p>

            <span>
                <img src={rightarrow} alt="" />
            </span>
        </div>

        <div className="cardcontainer">
            <h4>UI / UX Design</h4>
            <p>We design intuitive, human-centered experiences that blend beauty with seamless functionality.</p>

            <span>
                <img src={rightarrow} alt="" />
            </span>
        </div>

        <div className="cardcontainer">
            <h4>Web & Mobile <br /> App Development</h4>
            <p>We build powerful, scalable digital products that bring your ideas to life across every platform.</p>

            <span>
                <img src={rightarrow} alt="" />
            </span>
        </div>

      </div>

      <div className="bg-layer">
        <img src={BG} alt=''/>
      </div>
    </div>
  )
}

export default Servicesection