import { Link, useNavigate } from 'react-router-dom';
import './infoservicepage.scss';
import BG from '../../assets/svgs/BG.svg';
import arrowbottom from '../../assets/svgs/right-arrow.svg';
import Primarybutton from '../../components/primarybutton/Primarybutton';
import { useState, useRef } from 'react';
import { useDisableCopyPaste } from '../../hooks/useDisableCopyPaste';
import useScrollToTop from '../../hooks/useScrollToTop';

const Infoservicepage = () => {

    useDisableCopyPaste(true);
    useScrollToTop();
    const navigation = useNavigate();
    
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const servicesSectionRef = useRef<HTMLDivElement>(null);

    const item1 = btoa("Branding & Identity Design");
    const item2 = btoa("Digital Marketing");
    const item3 = btoa("UI/UX Design");
    const item4 = btoa("Web & Mobile App Development");

    const handleNavigation = (item:string) =>{
        navigation(`/service/${item}`);
    }

    const handleCardHover = (cardId: string) => {
        setHoveredCard(cardId);
    }

    const handleCardLeave = () => {
        setHoveredCard(null);
    }

    const scrollToServices = () => {
        const el = servicesSectionRef.current;
        if (el) {
            setTimeout(()=>{
                el.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            },300)
        }
    }

  return (
    <div className='infoservice-component'>
        <div className="infonav">
            <div className='line'></div>
            <p>
                <span><Link to="/">HOME</Link></span>
                <span>/</span>
                <span><Link to="/service">SERVICE</Link></span>
            </p>
        </div>

        <div className="infoservice-container">

            <div className='infoserviceheading-section'>
                <h2>
                    <span>This is</span> <span>what <br /></span>
                    <span>we do</span> <span>best</span>
                </h2>

                <div className='infosercicesubheading-section'>
                    <h4 onClick={scrollToServices}>OUR SERVICES</h4>

                    <div className='arrowdown interactive-arrow' onClick={scrollToServices}>
                        <span>
                            <img src={arrowbottom} alt="" />
                        </span>
                    </div>
                </div>
            </div>

            <div className='infoservicebody-section' ref={servicesSectionRef}>
                <div className='cards-section'>

                    <div 
                        className={`card-section ${hoveredCard === 'branding' ? 'card-hover' : ''}`}
                        onMouseEnter={() => handleCardHover('branding')}
                        onMouseLeave={handleCardLeave}
                    >
                        <h4>Branding & Identity <br />Design</h4>
                        <p className='info'>Elevate your brand's presence!</p>

                        <p className='info'>We seamlessly merge strategic insights with captivating design, crafting a cohesive brand narrative that leaves a lasting impression across all visual touchpoints.</p>

                        <ul>
                            <li><p>LOGO DESIGN</p></li>
                            <li><p>BRAND STRATEGY</p></li>
                            <li><p>BRAND MESSAGING</p></li>
                            <li><p>VISUAL IDENTITY</p></li>
                            <li><p>PACKAGING</p></li>
                        </ul>

                        <div className='moreifno'>
                            <p>READ MORE</p>
                            <div className='arrowdown interactive-arrow' onClick={()=>handleNavigation(item1)}>
                                <span>
                                    <img src={arrowbottom} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={`card-section ${hoveredCard === 'marketing' ? 'card-hover' : ''}`}
                        onMouseEnter={() => handleCardHover('marketing')}
                        onMouseLeave={handleCardLeave}
                    >
                        <h4>Digital <br /> Marketing</h4>
                        <p className='info'>Empower your brand's digital footprint!</p>

                        <p className='info'>We harness the latest trends and insights to create targeted campaigns that resonate with your audience, driving engagement, and propelling your brand to the forefront of the digital landscape.</p>

                        <ul>
                            <li><p>CONTENT CREATION</p></li>
                            <li><p>SOCIAL MEDIA MARKETING</p></li>
                            <li><p>PERFORMANCE MARKETING</p></li>
                            <li><p>SEARCH ENGINE VISIBILITY</p></li>
                        </ul>

                        <div className='moreifno'>
                            <p>READ MORE</p>
                            <div className='arrowdown interactive-arrow' onClick={()=>handleNavigation(item2)}>
                                <span>
                                    <img src={arrowbottom} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='cards-section'>

                    <div 
                        className={`card-section ${hoveredCard === 'design' ? 'card-hover' : ''}`}
                        onMouseEnter={() => handleCardHover('design')}
                        onMouseLeave={handleCardLeave}
                    >
                        <h4>UI / UX <br /> Design</h4>
                        <p className='info'>Transform user experiences into unforgettable journeys!</p>

                        <p className='info'>We combine intuitive design principles with cutting-edge technology to create interfaces that captivate and engage, ensuring seamless interactions that resonate with your audience.</p>

                        <ul>
                            <li><p>USER RESEARCH</p></li>
                            <li><p>WIREFRAMING & PROTOTYPING</p></li>
                            <li><p>UX AUDITS</p></li>
                            <li><p>INTERFACE DESIGN</p></li>
                        </ul>

                        <div className='moreifno'>
                            <p>READ MORE</p>
                            <div className='arrowdown interactive-arrow' onClick={()=>handleNavigation(item3)}>
                                <span>
                                    <img src={arrowbottom} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={`card-section ${hoveredCard === 'development' ? 'card-hover' : ''}`}
                        onMouseEnter={() => handleCardHover('development')}
                        onMouseLeave={handleCardLeave}
                    >
                        <h4>Web & Mobile <br /> App Development</h4>
                        <p className='info'>Embark on a digital journey tailored to your vision!</p>

                        <p className='info'>We seamlessly merge strategic insights with captivating design, crafting a cohesive brand narrative that leaves a lasting impression across all visual touchpoints.</p>

                        <ul>
                            <li><p>CUSTOM APP DEVELOPMENT</p></li>
                            <li><p>WEB DEVELOPMENT</p></li>
                            <li><p>UX OPTIMIZATION</p></li>
                            <li><p>AI / LLM INTEGRATION</p></li>
                            <li><p>PERFORMANCE BOOSTING</p></li>
                        </ul>

                        <div className='moreifno'>
                            <p>READ MORE</p>
                            <div className='arrowdown interactive-arrow' onClick={()=>handleNavigation(item4)}>
                                <span>
                                    <img src={arrowbottom} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="servicecontact-container">

            <div className="contactservice-infonav">
                <p>Looking to make your mark? We'll help you turn <br /> your vision into a success story.</p>
                <div className='line'></div>
            </div>

            <div className="contactinfo-section">
                <h2>
                    <span>Ready to bring your</span> <span>ideas to</span> <span>life? <br /> We're </span>
                    <span>here to help</span>
                </h2>

                <Primarybutton text="CONTACT US"/>
            </div>
        </div>


        <div className="bg-layer-top">
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
        </div>
        <div className="bg-layer-left">
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
        </div>
        <div className="bg-layer-right">
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
        </div>
    </div>
  )
}

export default Infoservicepage