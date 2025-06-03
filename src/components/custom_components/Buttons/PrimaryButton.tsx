import type { FC, MouseEvent } from 'react';
import './PrimaryButton.scss';

interface PrimaryButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isdisabled?: boolean;
  customStype?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  buttonText,
  type = "button",
  onClick,
  isdisabled = false,
  customStype = "",
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("primary-ripple");

    const rect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isdisabled}
      className={`primary-button ${customStype}`}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
