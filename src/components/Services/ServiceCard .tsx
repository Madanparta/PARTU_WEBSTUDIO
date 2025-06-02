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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description, features }) => {
  return (
    <div className={`service_card ${title === 'Website' ? 'website' : ''}`}>
      <div className="card_header">
        <h5>{title}</h5>
        <h3>{price}</h3>
        <h6>{description}</h6>
      </div>

      <ul>
        {features.map(({ text, isAddOn }, idx) => (
          <li key={idx}>
            <span>
              <img src={isAddOn ? addIcon : checkedCircle} alt={text} />
            </span>
            {text}
          </li>
        ))}
      </ul>

      <div className="card_footer">
        <span>Secure your package now</span>
        <span><img src={arrowRight} alt="arrow icon" /></span>
      </div>
    </div>
  );
};

export default ServiceCard;
