import React from "react";

const Header = ({ leftControls, rightControls, title, centerTitle }) => {
	return (
		<header className="flex flex-col relative pb-5 lg:p-5">
			<div className="flex flex-row items-center justify-between">
				<div className="mr-auto">{leftControls}</div>
				<div className="ml-auto">{rightControls}</div>
			</div>
			<div className="px-5 mt-10 w-full max-w-screen-md mx-auto">
				<h1 className={`${centerTitle && "text-center"}`}>{title}</h1>
			</div>
		</header>
	);
};

export default Header;
