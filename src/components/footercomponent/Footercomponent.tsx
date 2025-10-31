import './footercomponent.scss';
import instagram from '../../assets/svgs/instagram-Unicons.svg';
import linkdin from '../../assets/svgs/Linkedin-Unicons.svg';
import email from '../../assets/svgs/Email-Unicons.svg';
import phone from '../../assets/svgs/PhoneOutline.svg';
import whatsapp from '../../assets/svgs/Whatsapp-Unicons.svg';
import twitter from '../../assets/svgs/Twitter-Unicons.svg';
import { Link } from 'react-router-dom';

const Footercomponent = () => {
  return (
    <div className='footer-component'>
      
      <div className='footerinfo-container'>
        <div className='logocontainer'>
          <img src="/logos/android-chrome-192x192.png" alt="" />
        </div>
        <div className='navcontainer'>

          <div className='navitems'>
            <p className='navitem'>
              <Link to="">Home</Link>
            </p>
            <p className='navitem'>
              <Link to="">Service</Link>
            </p>
            <p className='navitem'>
              <Link to="">Contact</Link>
            </p>
            <p className='navitem'>
              <Link to="">Privacy & Policy</Link>
            </p>
          </div>

          <div className="mediaitems">
            <div className="social-media-items">
              <p className='item'>
                <Link to=""><img src={linkdin} alt="" /></Link>
              </p>
              <p className='item'>
                <Link to=""><img src={instagram} alt="" /></Link>
              </p>
              <p className='item'>
                <Link to=""><img src={twitter} alt="" /></Link>
              </p>
            </div>

            <div className="searchcontainer">

              <div className='search-bg'></div>
              <input type="text" />

            </div>
          </div>

        </div>
      </div>

      <div className='contactinfo-container'>
        <div className="effectcontainer"></div>
        <div className="glasscontainer">

          <p>Need Help?</p>

          <div className='infocard' id='firstinfocard'>
            <span><img src={phone} alt=''/></span>
            <span>+91 92203 05374</span>
          </div>
          <div className='infocard'>
            <span><img src={whatsapp} alt=''/></span>
            <span>+91 92203 05374</span>
          </div>
          <div className='infocard'>
            <span><img src={email} alt=''/></span>
            <span>info.partuwebstudio@gmail.com</span>
          </div>

        </div>
      </div>

      <div className='copyright-container'>
        <p>
            <span>©</span>
            <span>Partu WebStudio</span>
            <span>All Right Reserved.</span>
        </p>
      </div>
    </div>
  )
}

export default Footercomponent
