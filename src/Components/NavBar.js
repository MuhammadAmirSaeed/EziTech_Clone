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
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url(${require("../Images/nav image.jpg")})`,
        height: "400px",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        {/* put other code
         */}

        <div className="flex pl-40 text-white">
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

      <div className="flex h-full items-center justify-center">
        <div className="text-white">
          <h2 className="mb-4 text-4xl font-semibold">
            Learn the fundamentals with our experts in
          </h2>
          <h4 className="mb-6 text-xl font-semibold">
            Utilize Effective Training to react your Potential!
          </h4>

          {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
          <div class="mb-3">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />

              {/* <!--Search button--> */}
              <button
                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
