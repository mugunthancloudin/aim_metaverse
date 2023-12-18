import React from "react";
import "./contact.css";
import Lottie from "lottie-react";
import coin from "../../assets/landingPage/contact/coin.json";
import mail from "../../assets/landingPage/contact/mail.json";

export default function Contact() {
  return (
    <>
      <div className="container pt-5 pb-5 text-white" id="action5">
        <h1 className="fw-bold text-center">Join the Community</h1>
        <div className="row">
          <div className="col-lg-6 contactCoin">
            <Lottie
              animationData={coin}
              loop={true}
              autoplay={true}
              style={{ width: "70%" }}
              className=""
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mt-5">
              Ready to dive in? Find out more about the AIM Token
            </h2>
            <p className="pt-2 ">
              Empowering our ecosystem and rewarding token holders through its
              core functionality and value proposition.
            </p>
            <div>
              <button class="ui-btn">
                <span>Get Here</span>
              </button>
            </div>
            {/* <div className="d-flex mt-4">
                <button className="bg-warning p-2">BUY HERE </button>
                <button className="contactBuy ms-3 p-2">BUY HERE &rarr;</button>
              </div> */}
          </div>
        </div>
      </div>

      <div className="container text-white">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="pt-5 ">Want product news and updates?</h1>
            <h1 className="pt-2 pb-2 ">Sign up for our newsletter.</h1>
            {/* <div className="d-flex "> */}
            <input
              type="text"
              placeholder="Enter Your email"
              className="form-control w-50 me-5"
            />
            <button className="subscribeBtn mt-3"> Subscribe</button>
            {/* </div> */}
            
            <p className="pt-3">
              We care about your data. Read our privacy policy.
            </p>
          </div>
          <div className="col-lg-5 ps-5">
            <Lottie
              animationData={mail}
              loop={true}
              autoplay={true}
              style={{ width: "70%" }}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
