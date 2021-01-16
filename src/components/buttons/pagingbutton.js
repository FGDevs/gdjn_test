import React from "react";

const Button = ({ label, leftIcon, rightIcon, handleClick, disabled }) => (
  <button onClick={handleClick} disabled={disabled}>
    { leftIcon ? <span> {leftIcon} </span> : null }
    { label } 
    { rightIcon ? <span> {rightIcon} </span> : null	}
	</button>
);

export default Button;
