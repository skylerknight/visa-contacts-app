import React from "react";
import VisaLogo from "./VisaLogo.js";

const Layout = ({ children }) => {
	return (
		<div className="grid grid-cols-3 min-h-screen">
			<div className="col-span-1 flex flex-col bg-blue-800">
				<div className="flex flex-col flex-1 items-center justify-center">
					<VisaLogo />
					<h1 className="mt-5 text-3xl text-white font-bold">Visa Contacts</h1>
				</div>
				{/* <div className="w-full h-80 grid grid-flow-col gap-5 p-10">
					<div className="bg-white"></div>
					<div className="bg-blue-900"></div>
					<div className="border-2"></div>
				</div> */}
			</div>
			<div className="col-span-2 flex flex-col items-center justify-center">
				<div className="flex flex-col w-full h-full border">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
