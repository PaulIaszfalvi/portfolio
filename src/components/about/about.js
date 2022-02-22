import React from "react";
import "./about.css";

function about() {
  return (
    <div className="aboutpage" id="about">
      <div className="row">
        <div className="part-one col-8 px-20">
          <p>Personal interests in software development.</p>
          <p>Why I chose this field.</p>
          <p>What are my interests in it.</p>
          <p>What do I hope to achieve.</p>
          <p>What are my present and future goals.</p>
        </div>
        <div className="part-two col-4">
          <h1 className="display-4">Experience with</h1>
          <br />
          <ul>
            <li>
              <i className="devicon-html5-plain colored"> </i>
              HTML
            </li>
            <ul>
              <i className="devicon-css3-plain colored"> </i>
              CSS
              <li className="ml-4">
                <i className="devicon-bootstrap-plain-wordmark colored"></i>
                Bootstrap
              </li>
            </ul>
            <li>
              <i className="devicon-javascript-plain colored"> </i>Javascript
            </li>
            <li>
              <i className="devicon-typescript-plain colored"> </i>
              Typescript
            </li>
            <li>
              <i className="devicon-nodejs-plain colored"> </i>
              Node.js
            </li>
            <li>
              <i className="devicon-c-plain colored"> </i>C
            </li>
            <li>
              <i className="devicon-cplusplus-plain colored"> </i>C++
            </li>
            <li>
              <i className="devicon-java-plain colored"> </i>Java
            </li>
            <li>
              <i className="devicon-mongodb-plain colored"> </i>
              MongoDB
            </li>
            <li>
              <i className="devicon-mysql-plain-wordmark colored"> </i>
              MySQL
            </li>
            <li>
              <i className="devicon-react-plain colored"> </i>
              React
            </li>
            <li>
              <i className="devicon-python-plain colored"> </i>
              Python
            </li>
            <li>
              <i className="devicon-git-plain colored"> </i>Git
            </li>
            <li>
              <i className="devicon-github-plain colored"> </i>Github
            </li>

            <br />

            <li className="row">
              <img
                className="px-2 img-fluid"
                src="https://img.icons8.com/color/24/000000/office-365.png"
              />
              Microsoft Office
            </li>
            <li>
              <i className="devicon-windows8-original colored"> </i>
              Microsoft Windows
            </li>
            <li>
              <i className="devicon-linux-plain colored"> </i>
              Linux
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default about;
