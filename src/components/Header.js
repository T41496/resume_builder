import React from "react";

import "../assets/css/Header.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="pt_header shadow-xl flex px-5 py-3 justify-between cursor-pointer items-center">
      <div className="pt_nav flex gap-5">
        <div className="pt_nav-item">Home</div>
        <div className="pt_nav-item active">Resume</div>
        <div className="pt_nav-item">Jobs</div>
        <div className="pt_nav-item">
          Messages<span className="pt_badge pt_badge-red">4</span>
        </div>
      </div>
      <div className="pt_header-logo">
        <img src={Logo} className="pt_logo"></img>
      </div>
    </div>
  );
};

export default Header;
