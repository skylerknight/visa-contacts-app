import React from "react";
import VisaLogo from "./VisaLogo.js";

const Layout = ({ children }) => {
	return (
		<div className="theme-dark bg-base grid grid-cols-3 gap-5 h-screen">
			<div className="hidden lg:col-span-1 lg:flex flex-col bg-primary max-h-screen">
				<div className="flex flex-col flex-1 items-center justify-center">
					<VisaLogo />
					<h1 className="mt-5 text-3xl">Visa Contacts</h1>
				</div>
			</div>
			<div className="p-5 col-span-3 lg:col-span-2 flex flex-col items-center justify-center overlfow-x-hidden overflow-y-scroll">
				<div className="flex flex-col w-full h-full">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
