import React from "react";
import "./SlideAnim1.css";
import Img1 from "./image1.jpg";
import Img2 from "./image2.jpg";
import Img3 from "./image3.jpg";

function App() {
  return (
    <div className="body">
      <div className="slider-frame">
        <div className="slide-imgs">
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
          <img src={Img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
