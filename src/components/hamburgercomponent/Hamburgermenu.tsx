import './hamburgermenu.scss';
import { type FC } from 'react';

interface HamburgermenuProps {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburgermenu:FC<HamburgermenuProps> = ({isActive,setIsActive}) => {

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div 
      className={`menu-container ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
      <span className="menu-bar"></span>
    </div>
  )
}

export default Hamburgermenu;