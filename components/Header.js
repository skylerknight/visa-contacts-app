import React from "react";

const Header = ({ leftControl, rightControl, title }) => {
	return (
		<header className="flex flex-col items-center justify-between border-b p-5 bg-white">
			{/* <VisaLogo /> */}
			<div className="flex flex-row w-full items-center justify-between">
				<div className="mr-auto w-8 h-8">{leftControl}</div>
				<div className="ml-auto w-8 h-8">{rightControl}</div>
			</div>
			<div className="px-5 py-5">
				<h1 className="text-4xl font-bold px-2 text-[#242424]">{title}</h1>
			</div>
		</header>
	);
};

export default Header;
