import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <header className="navheader mx-auto">
        {" "}
        <Navbar />{" "}
      </header>

      <body className="sections">
        <Home />
        <About />
        <Portfolio />
      </body>

      <footer></footer>
    </div>
  );
}

export default App;
