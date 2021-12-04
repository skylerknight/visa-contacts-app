import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";

const Header = ({ leftControl, rightControl, title }) => {
	return (
		<header className="flex flex-row items-center justify-center relative p-5 border-b bg-white">
			<div className="relative z-20">
				<h1 className="text-lg font-bold px-2 text-[#242424]">{title}</h1>
			</div>
			<div className="absolute inset-5 flex flex-row items-center justify-center z-10">
				<div className="mr-auto">{leftControl}</div>
				<div className="ml-auto">{rightControl}</div>
			</div>
		</header>
	);
};

export default Header;
