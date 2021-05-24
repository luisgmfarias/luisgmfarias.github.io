import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skillset from "./sections/Skillset";
import Contact from "./sections/Contact";
import CurveConnector from "./components/CurveConnector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skillset />
      <CurveConnector />
      <Contact />
    </div>
  );
}

export default App;
