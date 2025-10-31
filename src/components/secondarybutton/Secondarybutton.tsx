import './secondarybutton.scss';
import rightarrow from '../../assets/svgs/right-arrow.svg';

const Secondarybutton = () => {
  return (
    <div className='secondary-component'>
      <span>DISCUSS A PROJECT</span>

      <div className='action-btn'>
        <span>
            <img src={rightarrow} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Secondarybutton
