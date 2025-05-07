import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component
import Footer from "../components/Footer"; // Assuming you have a Footer component
import { Outlet } from "react-router-dom";

const Layout = () => {
  // Create a reference for the footer element
  const footerRef = useRef(null);
  
  // State to store the footer height
  const [footerHeight, setFooterHeight] = useState(0);

  // Update the footer height once the component has mounted
  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default Layout;
