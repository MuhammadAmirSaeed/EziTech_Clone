import React from "react";
import HowItwork from "./HowItwork";
import LoginImage from "../Images/Login.jpg";
import SelectCourse from "../Images/Course Select.jpg";
import StartLearning from "../Images/Start Learning.jpg";

const WorkData = () => {
  const signUpData = {
    imageUrl: LoginImage,
    title: "Sign up",
    description:
      "Enter your name, email, and contact details to get started. It truly is that simple!",
  };

  const selectCourse = {
    imageUrl: SelectCourse,
    title: "Select course",
    description:
      "Browse our extensive and ever-expanding variety of courses for professional development.",
  };
  const startLearning = {
    imageUrl: StartLearning,
    title: "Start Learning",
    description:
      "Do the tasks, and your teacher will evaluate them before providing you with thorough",
  };

  return (
    <div>
      <div className=" font-montserrat text-3xl text-center">How it Work?</div>
      <div className=" flex flex-row gap-2">
        <HowItwork {...signUpData} />
        <HowItwork {...selectCourse} />
        <HowItwork {...startLearning} />
      </div>
    </div>
  );
};

export default WorkData;
