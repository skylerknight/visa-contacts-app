import React from "react";
import VisaLogo from "./VisaLogo.js";

import { useTheme } from "../contexts/theme";

const Layout = ({ children }) => {
	const { theme } = useTheme();
	return (
		<div className={`theme-${theme} bg-base grid grid-cols-3 gap-5 h-screen`}>
			<div className="hidden lg:col-span-1 lg:flex flex-col bg-primary max-h-screen">
				<div className="flex flex-col flex-1 items-center justify-center">
					<VisaLogo />
					<h1 className="mt-5 text-3xl text-primary-foreground" aria-hidden="true">
						Visa Contacts
					</h1>
				</div>
			</div>
			<div className="p-5 col-span-3 lg:col-span-2 flex flex-col items-center justify-center overlfow-x-hidden overflow-y-scroll">
				<div className="flex flex-col w-full h-full">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
