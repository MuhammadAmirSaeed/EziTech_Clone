import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { TbLocationFilled } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";

const Jobs = () => {
  const cardStyle = {
    backgroundImage: `url('../Images/coding.jpg')`, // Check the image path
  };

  return (
    <div>
      <div
        className="block max-w-sm rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700"
        style={cardStyle}
      >
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-white dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-base text-neutral-600 text-white dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Jobs;
