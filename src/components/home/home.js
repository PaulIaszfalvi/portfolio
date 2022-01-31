import React from "react";
import "./home.css";
import background from "../images/homebackground.jpg";

function home() {
  return (
    <div>
      <img src={background} alt="" className="background" />
    </div>
  );
}

export default home;
