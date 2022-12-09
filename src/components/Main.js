import React from "react";

import "../assets/css/Main.css";

import Infos from "./Infos";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="container mx-auto p-5 flex flex-col gap-6 pt_main">
      <Infos></Infos>
      <Educations></Educations>
      <Experiences></Experiences>
      <Skills></Skills>
    </div>
  );
};

export default Main;
