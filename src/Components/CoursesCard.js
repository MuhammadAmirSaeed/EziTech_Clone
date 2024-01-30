// CoursesCard.js
import React from "react";
import { FaRegStar } from "react-icons/fa";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FaRegEye } from "react-icons/fa";

const CoursesCard = ({
  image,
  title,
  description,
  duration,
  views,
  rating,
  price,
}) => {
  console.log(image, title, description, duration, views, rating, price);

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg h-full   w-60 ">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl ">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className=" pb-2 inline-block py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 flex flex-row gap-7 rounded-md">
        <span className="">
          <AccessTimeIcon /> {duration}
        </span>
        <span className="flex flex-row gap-3 text-center">
          <FaRegEye className="mt-1" /> {views}
        </span>
      </div>
      <hr className="m-3 text-slate-950" />
      <div className="flex flex-row text-slate-500">
        {typeof rating === "number" &&
          Array(rating)
            .fill()
            .map((_, index) => <FaRegStar key={index} />)}
      </div>
      <div className="px-6 py-2">{price}</div>
    </div>
  );
};

export default CoursesCard;
