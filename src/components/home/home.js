import React from "react";
import "./home.css";
import mySelfie from "../images/selfie.png";

function home() {
  return (
    <div className="homepage" id="home">
      <div className="row">
        <div className="photo col-md-6 col-xs-12 order-md-2">
          <img
            src={mySelfie}
            className="img-responsive center-block p-20 rounded-circle"
            alt=""
            id="mySelfie"
          />
        </div>
        <div className="statement col-md-6 col-xs-12 order-md-1">
          <h1 className="text-center display-3">Software Developer</h1>
          <br />
          <p className="paragraph p-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit
            voluptatem maiores cupiditate illum laboriosam consequatur, quisquam
            dolores facilis, doloremque adipisci voluptatibus. Corporis
            praesentium voluptates, tenetur nesciunt reprehenderit maxime
            molestias amet ratione unde esse optio quaerat accusamus laborum
            itaque tempore voluptatem sint laudantium vero nulla placeat
            incidunt deleniti, eaque molestiae!
          </p>
        </div>
        <div className="buttons col-md-6 col-xs-12 order-md-3">
          <a href="../files/PaulIaszfalviResume.docx/" className="p-10">
            Download CV
          </a>
          <a href="#Contact" className="p-10">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default home;
