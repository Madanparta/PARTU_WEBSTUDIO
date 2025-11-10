import './primarybutton.scss';
import rightarrow from '../../assets/svgs/right-arrow.svg';
import { useState, type FC } from 'react';

interface PrimarybuttonProps {
  text?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Primarybutton: FC<PrimarybuttonProps> = ({
  text = "WHAT WE DO",
  onClick,
  ariaLabel,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (_e: React.MouseEvent) => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && !loading) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (!disabled && !loading) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleTouchStart = () => {
    if (!disabled && !loading) {
      setIsPressed(true);
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`primary-component ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''} ${className}`}
      type={type}
      onClick={handleClick}
      aria-label={ariaLabel ?? text}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-busy={loading}
    >
      <span className="button-background" aria-hidden="true"></span>
      
      <span className="primary-text">
        {loading ? (
          <span className="loading-text">
            <span className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>
        ) : (
          children || text
        )}
      </span>

      <div className='action-btn'>
        <span className="action-icon" aria-hidden="true">
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <img src={rightarrow} alt="" className={isHovered ? 'hovered' : ''} />
          )}
        </span>
      </div>
    </button>
  );
}

export default Primarybutton;