import React from "react";
import "./protocal.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import protocolJsonData from "../../datas/landingPage.json";
import TruncatedDescription from "./truncatedDescription";

export default function Protocal() {
  const potocols = protocolJsonData.potocols;

  // Responsive settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to one slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this value based on your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          width:"100%" ,
        },
      },
    ],
  };

  return (
    <>
      <div className="container pt-5 pb-5" id="action3">
        <div className="row text-white text-center">
          <h1 className="protocolH1">
            AIM: Pioneering Blockchain Gaming Evolution
          </h1>
          <h6 className="protocolH6 pt-3">
            AIM AI combines Generative AI and Blockchain, enabling players to
            create and tokenize content using Unreal Engine, and sell in-game
            efficiency algorithms. Additionally, AIM’s blockchain technology is
            used for real-world astronomical research, linking in-game
            activities to the processing of actual universe exploration data.
          </h6>
          <p className="protocolP pt-2">
            A particularly innovative aspect is the utilization of AIM’s
            blockchain mining power for real-world applications in-game
            exploration could be linked to real-world astronomical research,
            similar to SkyHub.org for UFO search.
          </p>
        </div>

        {/* Cards layout for large screens */}
        <div className="row d-lg-flex">
          {potocols.map((card) => (
            <div
              key={card.id}
              className="col-lg-4 mt-4 mb-4"
              style={{ margin: "0 auto" }}
            >
              <div
                className="card protocolCard d-flex flex-column justify-content-between"
                style={{ height: "100%" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-img-top p-3"
                  style={{ height: "100px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title protocolH1 text-center">
                    {card.id}. {card.title}
                  </h5>
                  <TruncatedDescription
                    description={card.description}
                    maxLength={200}
                    
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel layout for smaller screens */}
        {/* <div className="d-lg-none w-100">
          <Slider {...settings}>
            {potocols.map((card) => (
              <div key={card.id} className="p-2">
                <div className="card">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-img-top p-4"
                    style={{
                      height: "100px",
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {card.id}. {card.title}
                    </h5>
                    <p>
                      {" "}
                      <TruncatedDescription
                        description={card.description}
                        maxLength={100}
                      />
                      </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </>
  );
}
