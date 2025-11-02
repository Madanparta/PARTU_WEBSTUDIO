import './contactsection.scss';
import BG from '../../assets/svgs/BG.svg';
import { Link } from 'react-router-dom';
import arrowbottom from '../../assets/svgs/right-arrow.svg';
import Primarybutton from '../../components/primarybutton/Primarybutton';

const Contactsection = () => {
  return (
    <div className='contact-component'>
        <div className="infonav">
            <div className='line'></div>
            <p>
                <span><Link to="/">HOME</Link></span>
                <span>/</span>
                <span><Link to="/contact">CONTACT</Link></span>
            </p>
        </div>

        <div className="contact-container">
            <div className="contactheading-section">
                <h2>Get in touch!</h2>
                <div className='arrowdown'>
                    <span>
                        <img src={arrowbottom} alt="" />
                    </span>
                </div>
            </div>

            <div className="contactbody-section">
                <h4>
                    <span>Let's</span>
                    <span>Talk</span>
                </h4>

                <div className='inputsalgin'>
                    <div className='inputcontainer name'>
                        <label htmlFor="name">WHAT’S YOUR NAME</label>
                        <input type="text" />
                    </div>

                    <div className='inputcontainer email'>
                        <label htmlFor="email">YOUR EMAIL</label>
                        <input type="email" />
                    </div>
                </div>

                <div className='inputcontainer number'>
                    <label htmlFor="email">YOUR CONTACT NUMBER</label>
                    <input type="number" />
                </div>

                <div className='inputcontainer details'>
                    <label htmlFor="details">WHAT WOULD YOU LIKE TO TALK ABOUT?</label>
                    <textarea rows={8}/>
                </div>
            </div>

            <div className="contactfooter-section">
                <p>
                    <span className='impo'>*</span>
                    <span>We promise not to disclose your personal information to third parties.</span>
                </p>
                <Primarybutton/>
            </div>
        </div>

        <div className="bg-layer-top">
            <img src={BG} alt=''/>
        </div>
        <div className="bg-layer-bottom">
            <img src={BG} alt=''/>
        </div>
    </div>
  )
}

export default Contactsection
