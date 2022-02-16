import React from "react";
import "./navbar.css";
import { scroller } from "react-scroll";

function navbar() {
  return (
    <div className="navbar mx-auto">
      <nav className="buttons hidden md:block">
        {/* <button className="home">Home</button>
          <button className="about">About</button>
          <button className="projects">Projects</button>
          <button className="contact">Contact</button> */}
        <ul className="buttonsList">
          <li onClick={""}>
            <a href="#home">Home</a>
          </li>
          <li onClick={""}>
            <a href="#about">About</a>
          </li>
          <li onClick={""}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={""}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
