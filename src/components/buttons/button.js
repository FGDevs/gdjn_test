import React from "react";
import './css/button.css';

const Button = ({ label, leftIcon, rightIcon, handleClick, disabled }) => (
  <button className="mainbutton" onClick={handleClick} disabled={disabled}>
    { leftIcon ? <span> {leftIcon} </span> : null }
    { label } 
    { rightIcon ? <span> {rightIcon} </span> : null	}
	</button>
);

export default Button;