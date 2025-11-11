import './footercomponent.scss';
import instagram from '../../assets/svgs/instagram-Unicons.svg';
import linkdin from '../../assets/svgs/Linkedin-Unicons.svg';
import email from '../../assets/svgs/Email-Unicons.svg';
import phone from '../../assets/svgs/PhoneOutline.svg';
import whatsapp from '../../assets/svgs/Whatsapp-Unicons.svg';
import twitter from '../../assets/svgs/Twitter-Unicons.svg';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

const Footercomponent = () => {
  const phoneNumber = '+919220305374';
  const whatsappNumber = '919220305374';
  const emailAddress = 'info.partuwebstudio@gmail.com'

  const openWhatsApp = useCallback((text = '') => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className='footer-component' role="contentinfo">
      
      <div className='footerinfo-container'>
        <div className='logocontainer' aria-hidden="false">
          <a href="/" title="Partu WebStudio home" aria-label="Home">
            <img src="/logos/android-chrome-192x192.png" alt="" />
          </a>
        </div>
        <div className='navcontainer'>

          <div className='navitems'>
            <p className='navitem'><Link to="/">Home</Link></p>
            <p className='navitem'><Link to="/service">Service</Link></p>
            <p className='navitem'><Link to="/contact">Contact</Link></p>
            <p className='navitem'><Link to="/policy">Privacy & Policy</Link></p>
          </div>

          <div className="mediaitems">
            <div className="social-media-items" aria-label="Social links">
              <p className='item'>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={linkdin} alt="LinkedIn" />
                </a>
              </p>
              <p className='item'>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src={instagram} alt="Instagram" />
                </a>
              </p>
              <p className='item'>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <img src={twitter} alt="Twitter" />
                </a>
              </p>
            </div>

            <div className="searchcontainer" aria-hidden="false">

              <div className='search-bg' aria-hidden="true"></div>
              <input type="text" aria-label="Search" placeholder="Search"/>

            </div>
          </div>

        </div>
      </div>

      <div className='contactinfo-container' aria-label="Contact information">
        <div className="effectcontainer" aria-hidden="true"></div>
        <div className="glasscontainer">

          <p>Need Help?</p>

          <a href={`tel:${phoneNumber}`} aria-label={`Call ${phoneNumber}`} style={{textDecoration:"none"}}>
            <div className='infocard' id='firstinfocard' role="button" tabIndex={0}>
              <span><img src={phone} alt=''/></span>
              <span>{phoneNumber}</span>
            </div>
          </a>
          <div className='infocard' onClick={() => openWhatsApp('Hi Partu WebStudio, I would like to enquire about...')} aria-label="Open WhatsApp chat" title="Open WhatsApp chat" >
            <span><img src={whatsapp} alt=''/></span>
            <span>{phoneNumber}</span>
          </div>

          <a href={`mailto:${emailAddress}`} aria-label={`Email ${emailAddress}`} style={{textDecoration:"none"}}>
            <div className='infocard' role="button" tabIndex={0}>
              <span><img src={email} alt=''/></span>
              <span>{emailAddress}</span>
            </div>
          </a>

        </div>
      </div>

      <div className='copyright-container' aria-hidden="false">
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
