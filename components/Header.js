import React from "react";
import VisaLogo from "./VisaLogo.js";

const Header = ({ title }) => {
	return (
		<header className="flex flex-row items-center justify-around px-3 py-2 h-16 border-b bg-white">
			{/* <VisaLogo /> */}
			<h1 className="text-lg font-bold px-2 text-blue-800">{title}</h1>
		</header>
	);
};

export default Header;
