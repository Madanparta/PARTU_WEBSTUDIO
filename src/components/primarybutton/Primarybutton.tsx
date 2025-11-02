import './primarybutton.scss';
import rightarrow from '../../assets/svgs/right-arrow.svg';
import type { FC } from 'react';

interface PrimarybuttonProps {
  text?:string;
}
const Primarybutton:FC<PrimarybuttonProps> = ({text="WHAT WE DO"}) => {
  return (
    <div className='primary-component'>
      <span>{text}</span>

      <div className='action-btn'>
        <span>
            <img src={rightarrow} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Primarybutton
