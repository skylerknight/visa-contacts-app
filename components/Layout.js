import React from "react";
import VisaLogo from "./VisaLogo.js";

import { useTheme } from "../contexts/theme";

const Layout = ({ children }) => {
	const { theme } = useTheme();
	return (
		<div
			className={`theme-${theme} bg-base flex flex-col min-h-screen lg:grid lg:grid-cols-3 lg:gap-5`}>
			<aside className="flex flex-col bg-primary w-full px-5 py-6 lg:flex-1 lg:m-5 lg:-mr-5 lg:rounded-lg lg:w-auto lg:col-span-1">
				<div className="flex flex-col flex-1 items-center justify-center">
					<VisaLogo />
					<h1 className="mt-5 text-3xl text-primary-foreground" aria-hidden="true">
						Visa Contacts
					</h1>
				</div>
			</aside>
			<div className="flex flex-col items-center justify-center col-span-3 pt-8 p-5 lg:col-span-2 lg:overlfow-x-hidden lg:overflow-y-scroll">
				<div className="flex flex-col w-full h-full">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
