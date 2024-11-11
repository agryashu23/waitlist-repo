import React from "react";
import Logo from "./assets/logo.svg";
import "./App.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <img src={Logo} alt="Logo" className="footer-logo"></img>

          <div className="footer-info">
            <p>Follow us @channels.social</p>
            <div className="footer-links">
              <a
                href="https://www.instagram.com/chips.social/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/chips2connect/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="footer-copy">
          &copy; 2023 Chips2Connect Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
