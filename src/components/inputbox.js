import React from "react";
import './css/inputbox.css';

const Inputbox = ({
	value,
	leftIcon,
	rightIcon,
	placeholder,
	handleOnChange,
	}) => (
  <div className="inputBx">
		{ leftIcon ? <span> {leftIcon} </span> : null }
		<input value			= {value} 
					 placeholder= {placeholder? placeholder:""}
					 onChange		= {handleOnChange}
    />
		{ rightIcon ? <span> {rightIcon} </span> : null }
  </div>
);

export default Inputbox;
