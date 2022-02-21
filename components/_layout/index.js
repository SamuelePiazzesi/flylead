import React from "react";
import Hero2 from "../ui/hero-2";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
	return (
		<div className="bg-white">
			<div className="relative overflow-hidden">
				<Hero2 />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
