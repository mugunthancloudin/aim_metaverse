import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="container pt-5 pb-5" id="action2">
        <div className="card bg-dark pt-5 pb-5  pb-2 aboutCard">
          <div className="row text-white ">
            <div className="col-lg-4">
              <h2 className="aboutH1 ps-2 text-center">
                Rise of Blockchain Gaming Era.{" "}
              </h2>
            </div>
            <div className="col-lg-8">
              <p className="aboutP text-center ps-2 pe-4">
                AIM, a blockchain-based, space-themed video game. It highlights
                how blockchain technology can be leveraged to create an
                immersive gaming experience, with a focus on synergy between
                technology and gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
