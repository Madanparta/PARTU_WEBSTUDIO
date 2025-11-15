import './taptop.scss';
import arrowbottom from '../../assets/svgs/right-arrow.svg';

export const Taptop = () => {
    return (
        <nav className='taptopComponent'>
            <div className='arrowdown'>
              <span>
                <img src={arrowbottom} alt="" />
              </span>
            </div>
            <p className='horizontal-text'>BACK TO TOP</p>
        </nav>
    )
}