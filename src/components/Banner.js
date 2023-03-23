import React from "react";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import appstore from "../assets/appstore.svg";
import googleplay from "../assets/googleplay.png";

const Banner = () => {
  return (
    <div className="container">
      {[1, 2, 3, 4, 5, 6].map((i, index) => {
        if (index % 2 === 0) {
          return (
            <div className="row g-5 mb-5">
              <div className="col-12 col-lg-6">
                <img className="img-fluid" src={banner} alt="" />
              </div>
              <div className="col-12 col-lg-6 my-auto">
                <img className="mb-4" src={appstore} alt="" />
                <h1 className="fw-bolder mb-3">
                  Wecode lets you launch your app in minutes.
                </h1>
                <p className="text-secondary fw-bold mb-5">
                  He nicked it tickety boo harry the cras bargy chap mush
                  spiffing spend a penny the full monty burke butty.
                </p>
                <div className="d-flex flex-wrap">
                  <img className="me-3" src={appstore} alt="" />
                  <img width={150} src={googleplay} alt="" />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row g-5 mb-5">
              <div className="col-12 col-lg-6 my-auto">
                <img className="mb-4" src={appstore} alt="" />
                <h1 className="fw-bolder mb-3">
                  Wecode lets you launch your app in minutes.
                </h1>
                <p className="text-secondary fw-bold mb-5">
                  He nicked it tickety boo harry the cras bargy chap mush
                  spiffing spend a penny the full monty burke butty.
                </p>
                <div className="d-flex flex-wrap">
                  <img className="me-3" src={appstore} alt="" />
                  <img width={150} src={googleplay} alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <img className="img-fluid" src={banner2} alt="" />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Banner;
