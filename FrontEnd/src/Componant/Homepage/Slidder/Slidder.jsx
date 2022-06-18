import React from "react";
import "./Slidder.css";

import img4 from "../../../Images/img10.png";
import img1 from "../../../Images/img7.png";
import img3 from "../../../Images/img9.png";
import img2 from "../../../Images/img8.png";

const Slider = () => {
  return (
    <div id="slider">
      <div id="left-slider">
        <img src={img4} alt="slider" id="home_slider_img" />
      </div>
      <div id="right-slider">
        <div id="right-slider-1">
          <img src={img1} alt="slider" id="leftimg" />
        </div>
        <div id="right-slider-2">
          <img src={img2} alt="slider" id="leftimg" />
        </div>
        <div id="right-slider-3">
          <img src={img3} alt="slider" id="leftimg" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
