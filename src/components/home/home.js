import React from "react";
import "./home.css";
import background from "../images/homebackground.jpg";
//import background from "../images/gradienttexture.jpg";
import video from "../videos/backgroundNikita.mp4";
import text from "../misc/textfile.txt";

import selfie from "../images/Selfie.png";

function home() {
  return (
    <div className="wholepage-home" id="home">
      {/* {<img src={background} alt="" className="background" />} */}

      <div className="content mx-auto">
        <div className="home-content">
          <div className="text-about-me">
            <p>{text}</p>
          </div>
          <div className="my-selfie">
            <img src={selfie} alt="" />
          </div>
        </div>
      </div>
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
