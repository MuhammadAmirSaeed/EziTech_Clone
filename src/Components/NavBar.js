import React, { useState } from "react";
import EzilineLogo from "../Images/EZITECH-LOGO-white.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Seminars from "../Pages/Seminars";
import InternPortal from "../Pages/InternPortal";

const NavBar = () => {
  const [showCertificatesContent, setShowCertificatesContent] = useState(false);

  const handleHoverCertificates = () => {
    setShowCertificatesContent(true);
  };

  const handleLeaveCertificates = () => {
    setShowCertificatesContent(false);
  };

  const handleClickHome = () => {
    <Home />;
    console.log("Home clicked");
  };

  const handleClickAbout = () => {
    <About />;
    console.log("About clicked");
  };

  const handleClickSeminars = () => {
    <Seminars />;
    console.log("Seminars clicked");
  };

  const handleClickInternPortal = () => {
    <InternPortal />;
    console.log("InternPortal clicked");
  };

  return (
    <div
      className="  "
      style={{ backgroundImage: `url("../Images/nav image.jpg")` }}
    >
      <div className="flex pl-40 bg-blue-900 text-white">
        <img
          src={EzilineLogo}
          class="text-blue-500 h-10 w-20  mr-10 text-center text-blue-700"
          alt="Eziline Logo"
          onClick={handleClickHome}
        />
        <button className="p-1" onClick={handleClickHome}>
          Home
        </button>
        <button className="p-4" onClick={handleClickAbout}>
          About
        </button>
        <button
          className="p-4"
          onMouseEnter={handleHoverCertificates}
          onMouseLeave={handleLeaveCertificates}
        >
          Certificates
          {showCertificatesContent && (
            <div>
              <ul>
                <li>Free Courses</li>
                <li>OnSite Courses</li>
              </ul>
            </div>
          )}
        </button>
        <button className="p-4" onClick={handleClickSeminars}>
          Seminars
        </button>
        <button className="p-4" onClick={handleClickInternPortal}>
          InternPortal
        </button>
      </div>
    </div>
  );
};

export default NavBar;
