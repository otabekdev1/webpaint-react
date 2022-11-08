import React from "react";
import card1 from "../imgs/imgcard/nom1.png";
import card2 from "../imgs/imgcard/nom2.png";
import card3 from "../imgs/imgcard/nom3.png";
import card4 from "../imgs/imgcard/nom4.png";
import card5 from "../imgs/imgcard/nom5.png";
import card6 from "../imgs/imgcard/nom6.png";
import card7 from "../imgs/imgcard/nom7.png";
import card8 from "../imgs/imgcard/nom8.png";
import card9 from "../imgs/imgcard/nom9.png";
import card10 from "../imgs/imgcard/nom10.png";
import card11 from "../imgs/imgcard/nom11.png";
import card12 from "../imgs/imgcard/nom12.png";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <h1>Our Featured Works</h1>
          <p>
            // Curabitur blandit tempus porttitor. Maecenas faucibus mollis //
            interdum.
          </p>
          <div className="btn-group row  ">
            <div
              style={{
                width: "54px",
                height: "32px",
              }}
              className="btn"
            >
              ALL
            </div>
            <div
              style={{
                width: "84px",
                height: "32px",
              }}
              className="btn"
            >
              GRAPHIC
            </div>
            <div
              style={{
                width: "111px",
                height: "32px",
              }}
              className="btn"
            >
              ILLUSTRARION
            </div>
            <div
              style={{
                width: "76px",
                height: "32px",
              }}
              className="btn"
            >
              MOTION
            </div>
          </div>

          <div className="allimgs row m-auto justify-content-center ">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3  ">
              <img className="" src={card1} alt="" />
              <img className="" src={card2} alt="" />
              <img className="" src={card3} alt="" />
              <img className="" src={card4} alt="" />
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3  ">
              <img className="" src={card5} alt="" />
              <img className="" src={card6} alt="" />
              <img className="" src={card7} alt="" />
              <img className="" src={card8} alt="" />
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3  ">
              <img className="" src={card9} alt="" />
              <img className="" src={card10} alt="" />
              <img className="" src={card11} alt="" />
              <img className="" src={card12} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
