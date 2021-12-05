import React from "react";

const Header = ({ leftControl, rightControl, title, centerTitle }) => {
	return (
		<header className="flex flex-col relative pb-5 lg:p-5">
			<div className="flex flex-row items-center justify-between">
				<div className="mr-auto">{leftControl}</div>
				<div className="ml-auto">{rightControl}</div>
			</div>
			<div className="px-5 mt-10 w-full max-w-screen-md mx-auto">
				<h1 className={`text-xl font-bold ${centerTitle && "text-center"}`}>{title}</h1>
			</div>
		</header>
	);
};

export default Header;
