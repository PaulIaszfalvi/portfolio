import React from "react";
import "./home.css";
// import background from "../images/homebackground.jpg";
import background from "../images/gradienttexture.jpg";
import video from "../videos/backgroundNikita.mp4";

function home() {
  return (
    <div className="mx-auto" id="home">
      {<img src={background} alt="" className="background" />}
      {/* <video
        loop="loop"
        autoplay="autoplay"
        playsInline
        muted="muted"
        className="w-full h-full object-cover"
        src={video}
      ></video> */}
    </div>
  );
}

export default home;
