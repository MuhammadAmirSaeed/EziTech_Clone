import React from "react";
import ImageWithPresident from "../Images/Pic With President.png";

const Awards = () => {
  return (
    <div className=" mt-4  text-center">
      Best IT Services Award 2023
      <div className="flex flex-row  gap-20">
        <div>
          <img src={ImageWithPresident} alter="image" className="w-96 h-40" />
        </div>
        <div className="mb-4">
          <span className="font-bold">Ezitech Is affiliated With</span>
          <button
            className="text-blue-700 font-sans"
            onClick={() => (window.location.href = "https://www.eziline.com/")}
          >
            Eziline Software House
          </button>
          . Eziline has been awarded the prestigious Best Software House in IT
          sector award by the President of Pakistan. This is an incredible
          achievement and a testament to the hard work and dedication of the
          entire team at Eziline Software House. The award is a great
          recognition of the company’s achievements in the field of IT and
          serves as a major milestone in its journey towards success.
          <div className="my-4">
            This award is a huge source of motivation and inspiration for the
            entire team at Eziline Software House.{" "}
            <span className="font-bold">
              It is a validation of the company’s commitment to innovation,
              excellence, and customer satisfaction.
            </span>{" "}
            The award acknowledges the hard work and dedication of every member
            of the team who has contributed to the success of the company.
          </div>
          <div>
            Ismail Shah, the CEO of Eziline Software House Pvt Ltd, received the
            Best Services Award in the IT sector from the President of Pakistan,
            Dr. Arif Alvi, in recognition of his remarkable contributions to the
            country’s technology industry.
          </div>
        </div>
      </div>
      <button className="bg-blue-700">Eziline Profile</button>
    </div>
  );
};

export default Awards;
