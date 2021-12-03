import React from "react";
import VisaLogo from "./VisaLogo.js";

const Header = () => {
	return (
		<header className="flex flex-row items-center justify-center px-3 py-2 h-16 border-b bg-white">
			<VisaLogo />
			<h1 className="sr-only text-lg font-bold px-2 text-blue-800">Visa Contacts</h1>
		</header>
	);
};

export default Header;
