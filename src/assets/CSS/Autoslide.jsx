import React from "react";
import Img1 from "./image1.jpg";
import Img2 from "./image2.jpg";
import Img3 from "./image3.jpg";
import "./Autoslide.css";

function Autoslide() {
  return (
    <div className="body">
      <div className="slider">
        <figure>
          <img id="slide-1" src={Img1} alt="" />
          <img id="slide-2" src={Img2} alt="" />
          <img id="slide-3" src={Img3} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Autoslide;
