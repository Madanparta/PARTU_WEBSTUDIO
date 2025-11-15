import './servicesection.scss';
import eyeimage from '../../assets/svgs/eye-img.jpg';
import Primarybutton from '../../components/primarybutton/Primarybutton';
import rightarrow from '../../assets/svgs/right-arrow.svg';
import BG from '../../assets/svgs/BG.svg';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisableCopyPaste } from '../../hooks/useDisableCopyPaste';

const cardData  = [
  {
    title: <>Branding & Identity <br/> Design</>,
    desc: 'We craft distinctive brand identities that capture your essence and connect deeply with your audience.',
  },
  {
    title: 'Digital Marketing',
    desc: 'We elevate your brand’s presence through data-driven strategies that inspire engagement and growth.',
  },
  {
    title: 'UI / UX Design',
    desc: 'We design intuitive, human-centered experiences that blend beauty with seamless functionality.',
  },
  {
    title: <>Web & Mobile <br/> App Development</>,
    desc: 'We build powerful, scalable digital products that bring your ideas to life across every platform.',
  },
];

const Servicesection = () => {
  const navigate = useNavigate();
  useDisableCopyPaste(true);

  const handleCardClick = useCallback(() => {
    navigate("/service");
  }, []);

  return (
    <div className='sericesection-component'>

      <div className="heading-section" aria-hidden="false">
        <div className="z-layout">
          <span className="icon-image" aria-hidden="true">
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
              <Primarybutton onClick={()=>navigate("/service")}/>
            </div>
          </div>
        </div>
      </div>

      <div className="cards-section" role="list" aria-label="Our services">

        {cardData.map((c, i) => (
          <div
            key={i}
            role="listitem"
            tabIndex={0}
            className="cardcontainer"
            onClick={() => handleCardClick()}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(); } }}
            aria-label={`Open details for ${typeof c.title === 'string' ? c.title : 'service'}`}
          >
            <h4>{c.title}</h4>
            <p>{c.desc}</p>

            <span className="arrowwrap" aria-hidden="true">
                <img src={rightarrow} alt="" />
            </span>
          </div>
        ))}
      </div>

      <div className="bg-layer" aria-hidden="true">
        <img src={BG} alt=''/>
      </div>
    </div>
  )
}

export default Servicesection