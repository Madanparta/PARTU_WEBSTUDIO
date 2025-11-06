import './primarybutton.scss';
import rightarrow from '../../assets/svgs/right-arrow.svg';
import type { FC } from 'react';

interface PrimarybuttonProps {
  text?:string;
  onClick?: () => void;
  ariaLabel?: string;
}
const Primarybutton:FC<PrimarybuttonProps> = ({text="WHAT WE DO", onClick, ariaLabel}) => {
  return (
    <button className='primary-component' type='button' onClick={onClick} aria-label={ariaLabel ?? text}>
      <span className="primary-text">{text}</span>

      <div className='action-btn'>
        <span className="action-btn" aria-hidden="true">
            <img src={rightarrow} alt="" />
        </span>
      </div>
    </button>
  )
}

export default Primarybutton
