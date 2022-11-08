import React from "react";

export default function Section() {
  return (
    <section>
      <div className="container">
        <div className="column__col row ">
          <div className="col ">
            <i  class="ri-android-line"></i>
            <h4  className="box-title">
              Android
            </h4>
            <p
              style={{ width: "200px",  }}
              className="box-dexcription"
            >
              was founded in Palo Alto, California, in October 2003 by Andy
              Rubin, Rich Miner, Nick Sears, and Chris White.
            </p>
          </div>
          <div className="col">
         
            <i class="ri-tv-2-line"></i>
            <h4 className="box-title">Telivison</h4>
            <p style={{ width: "200px" }} className="box-dexcription">
              The word television comes from Ancient Greek τῆλε (tele) 'far',
              and Latin visio 'sight'.
            </p>
          </div>
          <div className="col">
            <i class="ri-camera-line"></i>
            <h4 className="box-title">Camera</h4>
            <p style={{ width: "200px" }} className="box-dexcription">
              camera is an optical instrument that can capture an image. Most
              cameras can capture 2D images,
            </p>
          </div>
          <div className="col">
            <i class="ri-alarm-line"></i>
            <h4 className="box-title">Clock</h4>
            <p style={{ width: "200px" }} className="box-dexcription">
              A clock or a timepiece[1] is a device used to measure and indicate
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
