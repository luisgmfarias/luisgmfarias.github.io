import carbonCurve from "../assets/images/carbon_3d-curve-manual.svg";

function CurveConnector() {
  return (
    <div
      style={{
        background: "#000000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={carbonCurve} alt="carbon-curve" />
    </div>
  );
}

export default CurveConnector;
