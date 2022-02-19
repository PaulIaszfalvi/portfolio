import "./App.css";
import Layout from "./components/layout";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <header className="navheader mx-auto">
          {" "}
          <Navbar />{" "}
        </header>

        <body className="sections">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </body>

        <footer></footer>
      </Layout>
    </div>
  );
}

export default App;
