// components/Footer.js
import React, { forwardRef } from "react";
import logo from "../assets/logo_yell.png"; // Assuming the logo image is stored in the "assets" folder
import "../styles/footer.css"; // Import the custom CSS for the footer

const Footer = forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" className="footer-logo-img" />
        </div>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
