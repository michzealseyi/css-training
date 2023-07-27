import React from "react";
import "./Slide2.css"
import Img1 from "./image1.jpg";
import Img2 from "./image2.jpg";
import Img3 from "./image3.jpg";

function Slide2() {
  return (
    <div className="body">
      <div className="slider-frame">
        <div className="slide-imgs">
          <div className="img-container">
            <img src={Img1} alt="" />
          </div>
          <div className="img-container">
            <img src={Img2} alt="" />
          </div>
          <div className="img-container">
            <img src={Img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
