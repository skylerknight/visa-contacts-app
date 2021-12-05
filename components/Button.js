import React from "react";

const Button = ({ children, type, variant, icon, iconPosition }) => {
	return (
		<button type={type || "button"} className={`btn-${variant} ${icon && `btn-with-icon`}`}>
			{icon}
			{children}
		</button>
	);
};

export default Button;
