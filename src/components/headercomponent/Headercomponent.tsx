import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Hamburgermenu from '../hamburgercomponent/Hamburgermenu';
import './headercomponent.scss';

const Headercomponent = () => {
    const [isActive, setIsActive] = useState(false);
    const [isDimmed, setIsDimmed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/service' },
        { name: 'About', path: '/#about' },
        { name: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('menu-open');
        };
    }, [isActive]);

    useEffect(() => {
        const onScroll = () => {
            const shouldDim = window.scrollY > window.innerHeight * 0.2;
            setIsDimmed(shouldDim && !isActive);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isActive]);

    const handleMenuClick = (path: string) => {
        setIsActive(false);
        
        if (path === '/#about') {
            // Scroll to about section on home page
            if (location.pathname === '/') {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Navigate to home and then scroll to about
                navigate('/');
                setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // Regular navigation
            navigate(path);
        }
    };

    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`header-component ${isDimmed ? 'dimmed' : ''} ${isActive ? 'menu-active' : ''}`}>
            <div className='logocontainer' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
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
                                <li key={item.name}>
                                    <a 
                                        href={item.path}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleMenuClick(item.path);
                                        }}
                                    >
                                        {item.name}
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

export default Headercomponent;