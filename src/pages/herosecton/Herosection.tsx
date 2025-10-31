import Primarybutton from '../../components/primarybutton/Primarybutton';
import Scrolldowncircle from '../../components/scrolldowncircle/Scrolldowncircle';
import Secondarybutton from '../../components/secondarybutton/Secondarybutton';
import './herosection.scss';
import Threads from './Threads';

const Herosection = () => {
  return (
    <div className='herosection-component'>
        <div className='heroanimation-info'>
            <h1>
                <span>Design & Innovation</span> <span>for <br /></span> <span>Impactful</span> <span>Growth</span>
            </h1>
            <p>Partu WebStudio blends creativity with strategy <br /> to turn your vision into a standout digital solution. <br />Let’s build something remarkable together.</p>

            <div className="action-container">
                <Primarybutton/>
                <Secondarybutton/>
            </div>

        </div>
        <div className="scoll-component">
            <Scrolldowncircle/>
        </div>
        <div style={{ width: '100%', height: '800px', position: 'relative' }}>
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
