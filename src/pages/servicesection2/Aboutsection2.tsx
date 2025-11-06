import './aboutsection2.scss';
import about2 from '../../assets/svgs/about2.png';
import BG from '../../assets/svgs/BG.svg';
import Primarybutton from '../../components/primarybutton/Primarybutton';

const Aboutsection2 = () => {
  return (
    <div className='about2-component' aria-labelledby="about2-heading">
      <div className='about2info-section'>
        <h2>Calling All <br /> Creatives!</h2>
        <p>At Partu Webstudio, we’re a team of passionate innovators who believe work should be both purposeful and playful. We experiment boldly, collaborate deeply, and celebrate creativity in every form.</p>
        <p>If you’re ready to create, grow, and have fun doing it your place is here. Join us and be part of something extraordinary.</p>

        <div className='btn-section'>
          <Primarybutton/>
        </div>

        <h4>
          <span>This is us,</span> <span>delivering <br /></span>
          <span>exceptional</span> <span>results.</span>
        </h4>
      </div>

      <div className='about2image-section' aria-hidden="true">
        <div className="imagecontainer">
            <img src={about2} alt="" />
        </div>
      </div>

      <div className="bg-layer" aria-hidden="true">
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
        <img src={BG} alt=''/>
      </div>
    </div>
  )
}

export default Aboutsection2
