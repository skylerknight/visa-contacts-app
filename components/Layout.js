import React from "react";
import VisaLogo from "./VisaLogo.js";

const Layout = ({ children }) => {
	return (
		<div className="grid grid-cols-3 gap-5 min-h-screen p-5">
			<div className="hidden lg:col-span-1 lg:flex flex-col bg-blue-800 rounded-lg">
				<div className="flex flex-col flex-1 items-center justify-center">
					<VisaLogo />
					<h1 className="mt-5 text-3xl font-bold text-white">Visa Contacts</h1>
				</div>
			</div>
			<div className="col-span-3 lg:col-span-2 flex flex-col items-center justify-center border rounded-lg overflow-hidden">
				<div className="flex flex-col w-full h-full">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
