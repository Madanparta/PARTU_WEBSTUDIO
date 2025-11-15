import { useEffect, useRef, useState } from 'react';
import Aboutsection from '../aboutsection/Aboutsection';
import Herosection from '../herosecton/Herosection';
import Servicesection from '../servicesection/Servicesection';
import Aboutsection2 from '../servicesection2/Aboutsection2';
import './visitorpage.scss';

const Visitorpage = () => {
  const [componentBGChange,setComponentBGChange] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setComponentBGChange(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className='visiter-container'>

      <Herosection/>

      <div className={`about-container ${componentBGChange ? "about-container-BGChange" : "" }`} id="about" ref={componentRef}>
        <Aboutsection/>
      </div>

      <div className='service-container'>
        <div className="infonav">
          <p>Experts crafting your <br />Creative Future</p>
          <div className='line'></div>
        </div>
        <Servicesection/>
      </div>

      <div className="about2-container">
        <Aboutsection2/>
      </div>

    </div>
  )
}

export default Visitorpage