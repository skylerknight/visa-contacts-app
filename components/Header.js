import React from "react";

const Header = ({ leftControl, rightControl, title, centerTitle }) => {
	return (
		<header className="flex flex-col relative p-5">
			<div className="flex flex-row items-center justify-between">
				<div className="mr-auto">{leftControl}</div>
				<div className="ml-auto">{rightControl}</div>
			</div>
			<div className="px-5 mt-10 w-full max-w-screen-md mx-auto">
				<h1 className={`text-xl ${centerTitle && "text-center"} font-bold px-2 text-[#242424]`}>
					{title}
				</h1>
			</div>
		</header>
	);
};

export default Header;
