import React from "react";

const TrandingTechnologies = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-row  items-center  ">
      <div className="max-w-sm w-auto h-auto rounded overflow-hidden shadow-lg">
        <img className="w-full h-auto" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="text-xl mb-2">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TrandingTechnologies;
