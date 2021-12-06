import React from "react";
import Link from "next/link";

const IconButton = (props) => {
	const { children, type, variant, href } = props;
	const setVariant = () => (variant ? `icon-btn-${variant}` : "icon-btn-primary");

	return href ? (
		<Link href={href}>
			<a role="button" className={`${setVariant(variant)}`} {...props}>
				{children}
			</a>
		</Link>
	) : (
		<button type={type || "button"} className={`${setVariant(variant)}`} {...props}>
			{children}
		</button>
	);
};

export default IconButton;
