import './Scrolldowncircle.scss';
import arrowdown from "../../assets/svgs/right-arrow.svg";
import { useEffect, useRef, useState } from 'react';

const Scrolldowncircle = () => {
    const [rotation, setRotation] = useState(0);
    const lastScrollY = useRef(0);
    const lastTime = useRef(Date.now());

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const currentTime = Date.now();
            const deltaY = currentY - lastScrollY.current;
            const deltaTime = currentTime - lastTime.current;

            const speed = deltaY / deltaTime;
            setRotation((prev) => prev + speed * 3);

            lastScrollY.current = currentY;
            lastTime.current = currentTime;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollDown = () => {
        setTimeout(() => {
            const nextSection = document.querySelector('.about-container');
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            }
        }, 300);
    };

    return (
        <div className='circle-component' onClick={handleScrollDown}>
            <div className="scroll-circle-container" style={{ transform: `rotate(${rotation}deg)` }}>
                <svg viewBox="0 0 200 200" className="scroll-circle-text" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
                    </defs>
                    <text>
                        <textPath xlinkHref="#circlePath">
                            SCROLL DOWN ⬇ SCROLL DOWN ⬇ SCROLL DOWN ⬇
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className='circle-arrow'>
                <img src={arrowdown} alt="" />
            </div>
        </div>
    )
}

export default Scrolldowncircle;