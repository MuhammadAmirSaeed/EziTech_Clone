import React from "react";
import JS from "../Images/icon-js.png";
import { BsFilePerson, BsPersonSquare } from "react-icons/bs";
import { TbLocationFilled } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";

const Jobs = () => {
  // const cardStyle = {
  //   backgroundImage: `url('../Images/coding.jpg')`, // Check the image path
  // };

  const cardStyle = {
    backgroundImage: `url(${require("../Images/coding.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
  };

  return (
    <div className=" max-w-xs overflow-hidden rounded shadow-lg">
      {/* <!-- component --> */}
      <div className="w-screen h-screen bg-white flex flex-col flex-wrap  ">
        <div className=" ">
          {/* <!-- Profile Card --> */}
          <div
            className=" shadow-lg bg-blue-800 w-full flex flex-row flex-wrap p-3 antialiased"
            style={cardStyle}
          >
            <div className="gap-3 flex flex-row">
              <div>
                <h1 className="text-white font-montserrat font-bold ">
                  Backend Developer
                </h1>
                <hr className="font-bold my-1" />
                <h4 className="text-white">EZITECH</h4>
              </div>
              <div className="md:w-1/3 w-20">
                <img
                  className="rounded-lg shadow-lg antialiased w-20 "
                  src={JS}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
        {/* my card item */}
        <div className="flex flex-row mt-10 gap-3 text-center font-montserrat mx-3">
          <BsFilePerson className="bg-slate-200  text-blue-700 mt-1" />{" "}
          <span className=" text-base"> Employment-</span>
          <span className=" bg-slate-100 px-2 rounded-md text-slate-500">
            Hybrid
          </span>
        </div>
        <div className="flex flex-row mt-10 gap-3 text-center font-montserrat mx-3">
          <BsFilePerson className="bg-slate-200  text-blue-700 mt-1" />{" "}
          <span className=" text-base"> Employment-</span>
          <span className=" bg-slate-100 px-2 rounded-md text-slate-500">
            Hybrid
          </span>
        </div>
        <div className="flex flex-row mt-10 gap-3 text-center font-montserrat mx-3">
          <BsFilePerson className="bg-slate-200  text-blue-700 mt-1" />{" "}
          <span className=" text-base"> Employment-</span>
          <span className=" bg-slate-100 px-2 rounded-md text-slate-500">
            Hybrid
          </span>
        </div>
      </div>
      {/* <!-- End Profile Card --> */}
    </div>
  );
};

export default Jobs;
