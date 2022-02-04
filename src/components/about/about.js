import React from "react";
//import background from "../images/about.jpg";
import background from "../images/gradienttexture.jpg";
import "./about.css";

function about() {
  return (
    <div id="about">
      <img src={background} alt="" className="background" />
    </div>
  );
}

export default about;
