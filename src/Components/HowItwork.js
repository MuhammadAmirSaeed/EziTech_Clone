import React from "react";

const HowItwork = ({ imageUrl, title, description }) => {
  return (
    <div>
      <div className=" ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
          <img className="w-60 text-center" src={imageUrl} alt={title} />
          <div className="px-6 py-4">
            <div className="text-xl mb-2 text-center">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItwork;
