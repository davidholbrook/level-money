import React from "react";
import Navbar from "../components/navagation";

const Layout = ({ children }) => {
  return (
	<>
	  <Navbar />
	  <main>{children}</main>
	</>
  );
};

export default Layout;