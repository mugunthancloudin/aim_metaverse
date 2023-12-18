import React from "react";
import "./page.css";
import Navbar from "../components/navbar & footer/header/navbar";
import Home from "../components/landinpage/home/home";
import About from "../components/landinpage/about/about";
import Protocal from "../components/landinpage/protocal/protocal";
import Advantage from "../components/landinpage/advantages/advantage";
import Contact from "../components/landinpage/contact/contact";
import Footer from "../components/navbar & footer/footer/footer";
import Scrollbar from "../components/navbar & footer/header/navbar";

export default function LandingPage() {
  return (
    <>
      <div className="container-fluid landingPage">
        <Scrollbar />
        <Home />
        <About />
        <Protocal />
        <Advantage />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
