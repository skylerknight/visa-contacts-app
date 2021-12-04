import React from "react";

const Header = ({ leftControl, rightControl, title }) => {
	return (
		<header className="flex flex-row items-center justify-between px-3 py-2 h-16 border-b bg-white">
			{/* <VisaLogo /> */}
			<div className="mr-auto w-8 h-8">{leftControl}</div>
			<h1 className="text-md font-bold px-2 text-gray-700">{title}</h1>
			<div className="ml-auto w-8 h-8">{rightControl}</div>
		</header>
	);
};

export default Header;
