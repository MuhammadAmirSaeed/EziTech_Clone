import React from "react";

const TrandingTechnologies = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-wrap mt-10 mb-10 text-center p-4">
      <div className="w-auto h-auto max-w-sm overflow-hidden rounded shadow-lg">
        <div className="flex items-center justify-center ">
          <img className="text-center" src={imageUrl} alt={title} />
        </div>
        <div className="p-5">
          <div className="font-bold ">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TrandingTechnologies;
