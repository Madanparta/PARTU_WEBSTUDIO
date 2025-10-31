import { useState, useEffect } from 'react';
import Hamburgermenu from '../hamburgercomponent/Hamburgermenu';
import './headercomponent.scss';

const Headercomponent = () => {
    const [isActive, setIsActive] = useState(false);
    const menuItems = ['Home', 'Services', 'About', 'Contact'];

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isActive]);

    const handleMenuClick = () => {
        setIsActive(false);
    };

    return (
        <div className='header-component'>
            <div className='logocontainer'>
                <img src="/logos/android-chrome-192x192.png" alt="Logo" />
            </div>
            <div className='menucontainer'>
                <Hamburgermenu isActive={isActive} setIsActive={setIsActive}/>
            </div>

            <div className={`menu-overlay ${isActive ? 'active' : ''}`}>
                <div className="menu-content">
                    <nav className="navigation">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={item}>
                                    <a 
                                        href="#" 
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onClick={handleMenuClick}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Headercomponent