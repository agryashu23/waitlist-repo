import React, { useState } from "react";
import axios from "axios";
import Logo from "./assets/channels_logo.svg";
import Logo2 from "./assets/logo.svg";
import ChipImage from "./assets/chips_home_image.svg";
import ArrowRight from "./assets/Arrow_right.svg";
import "./App.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="og-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Channels.social</title>
        <link rel="icon" href={Logo2} />
      </Helmet>

      <div className="left-panel">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="content-box">
          <h2>Chips.social</h2>
          <h3>is now Channels.social</h3>
          <p className="description">
            All your data has been securely transferred to Channels, which will
            provide you a better experience.
          </p>
          <div className="cta-buttons">
            <button
              className="primary-btn"
              onClick={() => (window.location.href = "https://channels.social")}
            >
              Check out Channels.social
            </button>
            <a
              href="https://calendly.com/channels_social/talk-to-us"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <img src={ChipImage} alt="illustration" className="right-image" />
      </div>
    </div>
  );
}

export default App;
