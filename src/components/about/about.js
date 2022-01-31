import React from "react";
import background from "../images/about.jpg";
import "./about.css";

function about() {
  return (
    <div>
      <img src={background} alt="" className="background" />
    </div>
  );
}

export default about;
