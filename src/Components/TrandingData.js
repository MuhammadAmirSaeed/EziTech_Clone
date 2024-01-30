import React from "react";
import TrandingTechnologies from "./TrandingTechnologies";
import mL from "../Images/animation.png";
import BlockChain from "../Images/blockchain.png";
import Amazon from "../Images/aaaa.png";
import CyberSecurity from "../Images/cyber Security.png";
import Development from "../Images/Development.png";
import Design from "../Images/Designing.png";
import Gaming from "../Images/gaming.png";
import Architecture from "../Images/Architecture.png";
import Ios from "../Images/IOS&AND.png";
import Marketing from "../Images/Marketing.png";
import ThreeD from "../Images/3d.png";
import Animation from "../Images/animation.png";
const TrandingData = () => {
  const ml = {
    imageUrl: mL,
    title: "ML&AI",
  };

  const blockChain = {
    imageUrl: BlockChain,
    title: "Block Chain",
  };
  const amazon = {
    imageUrl: Amazon,
    title: "Amazon",
  };
  const cyberSecurity = {
    imageUrl: CyberSecurity,
    title: "Cyber Security",
  };
  const development = {
    imageUrl: Development,
    title: "Development",
  };
  const design = {
    imageUrl: Design,
    title: "Design",
  };
  const gaming = {
    imageUrl: Gaming,
    title: "Gaming",
  };
  const architecture = {
    imageUrl: Architecture,
    title: "Architecture",
  };
  const ios = {
    imageUrl: Ios,
    title: "IOS & AND",
  };
  const marketing = {
    imageUrl: Marketing,
    title: "Marketing",
  };
  const threeD = {
    imageUrl: ThreeD,
    title: "3D",
  };
  const animation = {
    imageUrl: Animation,
    title: "Animation",
  };

  return (
    <div className="">
      <div className="text-center my-10 mx-40">
        <h1 className=" font-montserrat text-5xl  ">
          What new trends and technology will you discover?
        </h1>
        <h4 className="font-montserrat pt-10 text-slate-700">
          Today's technology is developing quickly, and our new technological
          trends are enabling and advancing, speeding up the pace of
          development.
        </h4>
      </div>
      <div className="flex flex-wrap gap-4  items-center text-center">
        <TrandingTechnologies {...ml} />
        <TrandingTechnologies {...blockChain} />
        <TrandingTechnologies {...amazon} />
        <TrandingTechnologies {...cyberSecurity} />
        <TrandingTechnologies {...development} />
        <TrandingTechnologies {...design} />
        <TrandingTechnologies {...gaming} />
        <TrandingTechnologies {...architecture} />
        <TrandingTechnologies {...ios} />
        <TrandingTechnologies {...marketing} />
        <TrandingTechnologies {...threeD} />
        <TrandingTechnologies {...animation} />
      </div>
    </div>
  );
};

export default TrandingData;
