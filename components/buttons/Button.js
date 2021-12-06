import React from "react";
import Link from "next/link";

const Button = (props) => {
	const { children, type, variant, description, full, href } = props;
	const setVariant = () => (variant ? `btn-${variant}` : "btn-primary");

	return href ? (
		<Link href={href}>
			<a
				role="button"
				aria-label={description}
				className={`${setVariant(variant)} ${full ? "w-full" : undefined}`}
				{...props}>
				{children}
			</a>
		</Link>
	) : (
		<button
			type={type || "button"}
			className={`${setVariant(variant)} ${full ? "w-full" : undefined}`}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
