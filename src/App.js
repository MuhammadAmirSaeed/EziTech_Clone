import React from "react";
import TopHeader from "./Components/TopHeader";
import NavBar from "./Components/NavBar";
import Awards from "./Components/Awards";

import WorkData from "./Components/WorkData";
import TrandingData from "./Components/TrandingData";
import RecommendedCourses from "./Components/RecommendedCourses";
const App = () => {
  return (
    <div className=" ">
      <TopHeader />
      <NavBar />
      <Awards />
      <WorkData />
      <TrandingData />
      <RecommendedCourses />
    </div>
  );
};

export default App;
