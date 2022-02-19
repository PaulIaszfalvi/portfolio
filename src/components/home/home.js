import React from "react";
import "./home.css";

function home() {
  return (
    <div className="homepage" id="home">
      <div className="row">
        <div className="photo col-6 order-md-2">PHOTO</div>
        <div className="statement col-6 order-md-1">Software Developer</div>
      </div>
    </div>
  );
}

export default home;
