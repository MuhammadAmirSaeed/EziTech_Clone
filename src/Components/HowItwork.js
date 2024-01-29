import React from "react";

const HowItwork = ({ imageUrl, title, description }) => {
  return (
    <div>
      <div className=" flex flex-row">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-60" src={imageUrl} alt={title} />
          <div className="px-6 py-4">
            <div className="text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItwork;
