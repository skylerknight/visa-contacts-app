import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col m-auto w-full max-w-lg min-h-[500px] border">{children}</div>
		</div>
	);
};

export default Layout;
