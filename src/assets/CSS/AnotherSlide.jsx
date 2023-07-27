import React from "react";
import Img1 from "./image1.jpg";
import Img2 from "./image2.jpg";
import Img3 from "./image3.jpg";
import "./AnotherSlide.css"
function AnotherSlide() {
  return (
    <div className="body">
      <section className="container">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slide-1" src={Img1} alt="" />
            <img id="slide-2" src={Img2} alt="" />
            <img id="slide-3" src={Img3} alt="" />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AnotherSlide;
