import React from "react";

const Header = ({ leftControls, rightControls, title, centerTitle }) => {
	return (
		<header className="flex flex-col relative pb-5 lg:p-5">
			<nav
				role="navigaiton"
				className="flex flex-row items-center justify-between w-full mx-auto max-w-screen-md lg:max-w-full"
				aria-label="Main Menu">
				<div>{leftControls}</div>
				<div>{rightControls}</div>
			</nav>
			<div className="lg:px-5 mt-10 w-full max-w-screen-md mx-auto">
				<h2 className={`${centerTitle && "text-center"}`}>{title}</h2>
			</div>
		</header>
	);
};

export default Header;
