import React from "react";

const Inputbox = ({
	value,
	leftIcon,
	rightIcon,
	placeholder,
	handleOnChange,
	}) => (
  <div>
		{ leftIcon ? <span> {leftIcon} </span> : null }
		<input value			= {value} 
					 placeholder= {placeholder? placeholder:""}
					 onChange		= {handleOnChange}
    />
		{ rightIcon ? <span> {rightIcon} </span> : null }
  </div>
);

export default Inputbox;
