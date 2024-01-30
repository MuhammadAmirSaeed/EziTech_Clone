import React from "react";
import TopHeader from "./Components/TopHeader";
import NavBar from "./Components/NavBar";
import Awards from "./Components/Awards";

import WorkData from "./Components/WorkData";
import TrandingData from "./Components/TrandingData";

import CoursesCard from "./Components/CoursesCard";
import RecommendedCourse from "./Components/RecommendedCourses";
import Jobs from "./Components/Jobs";
const App = () => {
  return (
    <div className="">
      <TopHeader />
      <NavBar />
      <Awards />
      <WorkData />
      <TrandingData />
      <RecommendedCourse />
      <Jobs />
    </div>
  );
};

export default App;
