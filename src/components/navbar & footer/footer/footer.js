import React from "react";
import "./footer.css";
import Lottie from "lottie-react";
import whatsApp from "../../assets/landingPage/footer/whatsapp.png";
import facebook from "../../assets/landingPage/footer/facebook.png";
import twitter from "../../assets/landingPage/footer/twitter.png";
import instagram from "../../assets/landingPage/footer/instagram.png";
import robo from "../../assets/landingPage/footer/footerRobo.json";
import logo from "../../../components/assets/landingPage/navbar/aimLogo.svg"


// import brandLogo from "../../assets/Header & footer/header/medichainlogo.svg";

export default function Footer() {
  return (
    <>
      <div className="container text-white pb-4">
        <div className="row pt-4 ">
          <div className="col-lg-3">
            <div className="col-lg-12">
              <Lottie
                animationData={robo}
                loop={true}
                autoplay={true}
                style={{ width: "200px", height: "200px" }}
                className=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-4 ">
                <h5>ABOUT PROJECT</h5>
                <p className="mt-4">Hardhat Repository</p>
                <p>Graph Repository</p>
                <p>React Repository</p>
              </div>
              <div className="col-lg-4">
                <h5>HARDHAT TOOLS</h5>
                <p className="mt-4">Hardhat</p>
                <p>The Graph</p>
                <p>Alchemy</p>
              </div>
              <div className="col-lg-4">
                <h5>FRONTEND</h5>
                <p className="mt-4">Reactjs</p>
                <p>Bootstrap</p>
                <p>Gsap</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className=" d-flex">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="AIM Logo"
            />
            </div>
            <p className="mt-2">
              Crafting the next-level of user experience and data
              security.
            </p>
            <div className="row justify-content-around w-100 pb-3">
              <img src={facebook} alt="facebook" className="footerIcon" />
              <img src={instagram} alt="instagram" className="footerIcon" />
              <img src={twitter} alt="twitter" className="footerIcon" />
              <img src={whatsApp} alt="whatsapp" className="footerIcon" />
            </div>
          </div>
        </div>
        <hr />
        <div className="row text-center pt-3 pb-3">
          <h3>If you have any questions please contact us</h3>
          <p> info@aim.com | +91 950 17 xxxxx , +91 987 83 xxxxx</p>
        </div>

       
          <hr />
          <div className="row text-center">
            <p className="">Privacy Policy</p>
            <p>&copy; 2023 AIM. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
