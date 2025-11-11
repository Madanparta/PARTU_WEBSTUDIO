import { useNavigate } from 'react-router-dom';
import Primarybutton from '../../components/primarybutton/Primarybutton';
import Scrolldowncircle from '../../components/scrolldowncircle/Scrolldowncircle';
import Secondarybutton from '../../components/secondarybutton/Secondarybutton';
import { useDisableCopyPaste } from '../../hooks/useDisableCopyPaste';
import './herosection.scss';
import Threads from './Threads';

const Herosection = () => {
    useDisableCopyPaste(true);
    const navigate = useNavigate();

    const handleClickPrimerybutton = () => {
        navigate("/service");
    }
    const handleClickSeconderybutton = () => {
        navigate("/contact");
    }
  return (
    <div className='herosection-component'>
        <div className='heroanimation-info'>
            <h1>
                <span>Design & Innovation</span> <span>for <br /></span> <span>Impactful</span> <span>Growth</span>
            </h1>
            <p>Partu WebStudio blends creativity with strategy <br /> to turn your vision into a standout digital solution. <br />Let’s build something remarkable together.</p>

            <div className="action-container">
                <Primarybutton onClick={handleClickPrimerybutton}/>
                <Secondarybutton onClick={handleClickSeconderybutton}/>
            </div>

        </div>
        <div className="scoll-component">
            <Scrolldowncircle/>
        </div>
        <div className='threads-wrapper'>
            <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
            />
        </div>
    </div>
  )
}

export default Herosection
