// Button.tsx

import React from "react";
import "./Button.css";

interface customStyle {
  [key: string]: string;
}

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  color?: string;
  labelColor?: string;
  customStyle?: customStyle;
  labelStyle?: customStyle;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color,
  labelColor,
  customStyle,
  labelStyle,
}) => {
  let buttonStyles = {
    backgroundColor: color,
    fontSize:30,
    color: labelColor,
    padding:'0.5%',
    borderRadius: "4px",
    cursor: "pointer",
    borderWidth: 0,
    transition: 'opacity 0.3s',
  };

  if (labelColor) {
    buttonStyles = { ...buttonStyles, ...customStyle };
  }

  return (
    <button  data-testid="styled-button" className="button" style={buttonStyles} onClick={onClick}>
      <span style={labelStyle}>{label}</span>
    </button>
  );
};

export default Button;
