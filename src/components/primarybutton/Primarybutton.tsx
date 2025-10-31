import './primarybutton.scss';
import rightarrow from '../../assets/svgs/right-arrow.svg';

const Primarybutton = () => {
  return (
    <div className='primary-component'>
      <span>WHAT WE DO</span>

      <div className='action-btn'>
        <span>
            <img src={rightarrow} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Primarybutton
