import "./App.css";
import Layout from "./components/layout";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import React from "react";

function App() {
  return (
    <Layout>
      <header className="navheader">
        {" "}
        <Navbar />{" "}
      </header>

      <div className="content">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>

      <footer></footer>
    </Layout>
  );
}

export default App;
