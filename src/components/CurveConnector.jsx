import carbonCurve from "../assets/images/carbon_3d-curve-manual.svg";
import Fade from "react-reveal/Fade";
function CurveConnector() {
  return (
    <div
      style={{
        background: "#000000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Fade>
        <img src={carbonCurve} alt="carbon-curve" />
      </Fade>
    </div>
  );
}

export default CurveConnector;
