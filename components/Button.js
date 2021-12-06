import React from "react";
import Link from "next/link";

const Button = ({ children, type, variant, href }) => {
	const setVariant = () => (variant ? `btn-${variant}` : "btn-primary");

	return href ? (
		<Link href={href}>
			<a role="button" className={`${setVariant(variant)}`}>
				{children}
			</a>
		</Link>
	) : (
		<button type={type || "button"} className={`${setVariant(variant)}`}>
			{children}
		</button>
	);
};

export default Button;
