import React from "react";
//import background from "../images/about.jpg";
import background from "../images/gradienttexture.jpg";
import "./about.css";

function about() {
  return (
    <div className="wholepage-about" id="about">
      <div className="content mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          saepe explicabo est atque non, corporis ducimus, quo facere neque
          aliquid fugiat aspernatur eligendi earum blanditiis. Harum magnam illo
          dolor excepturi qui? Illo deserunt aperiam, inventore eaque doloremque
          vero quidem magnam praesentium! Itaque quaerat est reprehenderit
          repellendus, eos deleniti qui sequi.
        </p>
      </div>
      {/* <img src={background} alt="" className="background" /> */}
    </div>
  );
}

export default about;
