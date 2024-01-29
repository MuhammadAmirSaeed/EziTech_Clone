import React from "react";
import Login from "../Pages/Login";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Register from "../Pages/Register";

function TopHeader() {
  return (
    <div
      className="bg-blue-500 text-xs  gap-2 text-white py-2 flex flex-row text-center pl-60
    "
    >
      <div>
        <CallIcon />
        +92 3455555396
      </div>
      <div classNam="">
        <LocationOnIcon />
        Office #304-B Amna Plaza, Rawalpindi, Pakistan
      </div>

      <div>
        <AccessTimeIcon />
        Mon - Fri 8.00 - 20.00
      </div>
      <div className="flex flex-row gap-3 test-xs pl-9">
        <a href="https://www.facebook.com">
          <FacebookOutlinedIcon />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.behance.com">
          <FaBehance fontSize={"20px"} />
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon />
        </a>
        <a href="https://www.youtube.com">
          <FaYoutube fontSize={"20px"} />
        </a>
      </div>

      <div className=" font-serif  text-base ml-auto pr-4">
        <button onClick={<Login />}>Login</button>|
        <button onClick={<Register />}>Register</button>
      </div>
    </div>
  );
}

export default TopHeader;
