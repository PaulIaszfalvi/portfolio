import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
