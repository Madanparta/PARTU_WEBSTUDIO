import React from 'react';
import checkedCircle from '../../assets/svgs/checkCircleIcon.svg';
import addIcon from '../../assets/svgs/addIcon.svg';
import arrowRight from '../../assets/svgs/arrow-right.svg';

type Feature = {
  text: string;
  isAddOn: boolean;
};

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  highlights?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, features,highlights }) => {
  const smoothScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };
  return (
    <div className={`service_card ${title === 'Professional Website' ? 'website' : ''}`} onClick={() => smoothScrollTo("Contact")}>
      <div className="card_header">
        <h5>{title}</h5>
        <h3 dangerouslySetInnerHTML={{ __html: price }} />
        <h6>{description}</h6>
      </div>

      <ul>
        {features.map(({ text, isAddOn }, idx) => (
          <li key={idx}>
            <span>
              <img src={isAddOn ? addIcon : checkedCircle} alt="" aria-hidden="true" />
            </span>
            {text}
          </li>
        ))}
      </ul>

      <div className='highlights'>
        {highlights?.map((highlight, idx) => (
          <p key={idx}>{highlight}</p>
        ))}
      </div>

      <div className="card_footer">
        <span>Secure your package now</span>
        <span><img src={arrowRight} alt="" aria-hidden="true" /></span>
      </div>
    </div>
  );
};

export default ServiceCard;
