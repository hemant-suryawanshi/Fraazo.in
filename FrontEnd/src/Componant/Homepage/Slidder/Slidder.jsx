import React from "react";
import "./Slidder.css";

import Left1 from "../../../Images/img7.png";
import Left2 from "../../../Images/img8.png";
import Left3 from "../../../Images/img9.png";
import Right from "../../../Images/img10.png";

const Slider = () => {
  return (
    <div id="slider">
      <div id="left-slider">
        <img src={Right} alt="slider" id="home_slider_img" />
      </div>
      <div id="right-slider">
        <div id="right-slider-1">
          <img src={Left1} alt="slider" id="leftimg" />
        </div>
        <div id="right-slider-2">
          <img src={Left2} alt="slider" id="leftimg" />
        </div>
        <div id="right-slider-3">
          <img src={Left3} alt="slider" id="leftimg" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
