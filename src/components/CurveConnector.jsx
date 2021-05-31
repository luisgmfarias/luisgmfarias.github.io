import carbonCurve from "../assets/images/carbon_3d-curve-manual.svg";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

function CurveConnector() {
  return (
    <div
      id="contact"
      style={{
        background: "#000000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Fade>
        <CarbonCurve src={carbonCurve} alt="carbon-curve" />
      </Fade>
    </div>
  );
}

export default CurveConnector;

const CarbonCurve = styled.img`
  @media (max-width: 415px) {
    width: 100%;
  }
`;
