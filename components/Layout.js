import React from "react";
import VisaLogo from "./VisaLogo.js";

const Layout = ({ children }) => {
	return (
		<div className="grid grid-cols-2 min-h-screen">
			<div className="flex flex-col bg-blue-800">
				<div className="flex flex-col flex-1 items-center justify-center">
					<VisaLogo />
					<h1 className="mt-5 text-3xl text-white font-bold">Visa Contacts</h1>
				</div>
				<div className="w-full h-80 grid grid-flow-col gap-5 p-10">
					<div className="bg-white"></div>
					<div className="bg-black"></div>
					<div className="border-2"></div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center bg-gray-50">
				<div className="flex flex-col w-full h-full border">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
