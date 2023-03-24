import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="container">
        
    <div className="row g-5">
      <div className="col-12 col-md-6 col-lg-3">
        <img width={200} src={logo} alt="" />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <h4>Company</h4>
        <p>Privacy Policy</p>
        <p>Return Policy</p>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <h4>Address</h4>
        <p>3883 Jubla Street</p>
        <p>Nahda, Dammamy</p>
        <p>Saudi Arabia, 34243</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
