import React from "react";
import Navbar from "../components/navagation";
import FloatingPlus from "../components/floatingPlus";

const Layout = ({ children }) => {
  return (
	<>
	  <Navbar />
	  <main>{children}</main>
	  <div><FloatingPlus /></div>
	</>
  );
};

export default Layout;