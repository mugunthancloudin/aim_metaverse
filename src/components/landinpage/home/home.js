import React, { useState, useEffect } from "react";
import "./home.css";
import Lottie from "lottie-react";
import home from "../../assets/landingPage/home/metas.json";
import { animateScroll as scroll } from "react-scroll";
import roboScroll from "../../assets/landingPage/home/robo.json";

export default function Home() {
  // const [showScrollButton, setShowScrollButton] = useState(false);

  // const handleScroll = () => {
  //   setShowScrollButton(window.scrollY > 200);
  // };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="container pt-5 pb-5" id="action1">
        <div className="row">
          <div className="col-lg-7">
            <Lottie
              animationData={home}
              loop={true}
              autoplay={true}
              style={{ width: "100%" }}
              className=""
            />
          </div>

          <div className="col-lg-5">
            <div className="row text-white">
              <h6 className="mt-5 homeH6 pt-5">Metaverse & AI</h6>
              <h1 className="pt-3 homeH1 fw-bold">
                AI-Driven Metaverse Revolutionizes Digital Evolution.
              </h1>
              <div className="text-center">
                <button className="w-25 lanchBtn">connect</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Lottie
            animationData={roboScroll}
            loop={true}
            autoplay={true}
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "0px",
              height: "150px",
              cursor: "pointer",
              // opacity: showScrollButton ? 1 : 0,
              // visibility: showScrollButton ? "visible" : "hidden",
              transition: "opacity 0.3s, visibility 0.3s",
            }}
            className="mt-3"
          />
        </div>
      </div>
    </>
  );
}
