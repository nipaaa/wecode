import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="shadow mb-5 py-3">
      <div className="container">
        <img width={200} src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
