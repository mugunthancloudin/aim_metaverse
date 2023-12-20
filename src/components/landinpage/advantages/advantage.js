import React from 'react';
import "./advantage.css";
import landingPage from "../../datas/landingPage.json"


export default function Advantage() {

  const advantage = landingPage.advantage;
  console.log(advantage);

  return (
    <>
      <div className='container text-white' id="action4">
        <div className='row'>
          <h1 className='fw-bold protocolH1 text-center'>Tools Used In AIM</h1>
        </div>
        <div className="row">
          {advantage.map((advantage) => (
            <div key={advantage.id} className="col-lg-4 mb-3"  style={{ margin: "0 auto" }}>
              <div className="">
                <img
                  src={advantage.icon}
                  className="card-img-top p-4"
                  alt={advantage .name}
                  style={{ height: "100px", objectFit: "contain" }}
                />
                <div className="text-center">
                  <h5 className="fw-bold toolTitle">{advantage.title}</h5>{" "}
                  <p className="toolsDesc">{advantage.description}</p>
                  {/* <TruncatedDescription description={service.description} maxLength={150} />  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
