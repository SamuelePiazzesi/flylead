import React from "react";
import Hero2 from "../ui/hero";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<div className="bg-white">
			<div className="relative bg-gray-900 overflow-hidden">
				<Header />

				<main>{children}</main>

				<Footer />
			</div>
		</div>
	);
};

export default Layout;
