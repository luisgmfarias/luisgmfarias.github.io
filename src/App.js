import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skillset from "./sections/Skillset";
import Contact from "./sections/Contact";
import Career from "./sections/Career";
import Projects from "./sections/Projects";
import CurveConnector from "./components/CurveConnector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skillset/>
      <Career/>
      <Projects/>
      <CurveConnector/>
      <Contact />
    </div>
  );
}

export default App;
