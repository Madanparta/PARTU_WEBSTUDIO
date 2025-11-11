import './secondarybutton.scss';
import rightarrow from '../../assets/svgs/right-arrow.svg';

interface SecondarybuttonProps {
  text?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const Secondarybutton = ({ text = 'DISCUSS A PROJECT', onClick, ariaLabel }: SecondarybuttonProps) => {
  return (
    <button className='secondary-component' type="button" onClick={onClick} aria-label={ariaLabel ?? text}>
      <span className="secondary-text">{text}</span>


      <span className="action-btn" aria-hidden="true">
          <img src={rightarrow} alt="" />
      </span>
    </button>
  )
}

export default Secondarybutton
