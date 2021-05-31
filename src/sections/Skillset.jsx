import { Row, Col } from "../components/Utils";
import { SectionTitle } from "../components/SectionTitle";
import aiImage from "../assets/images/artificial-intelligence.png";
import SectionContainer from "../components/SectionContainer";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Skillset() {
  return (
    <SectionContainer>
      <Row style={{ justifyContent: "space-between", width: "100%" }}>
        <Fade left cascade>
          <SkillsetDetails>
            <SectionTitle>My Skillset</SectionTitle>
            <p>
              I have worked with a wide variety of things, but I have always
              identified myself with data. I have already participated bulding
              data architecture projects and data pipeline, as well as data
              processing and modeling. Sometimes I find myself playing with data
              scraping too. I really love working with Python.
            </p>
            <Row>
              <Col>
                <span>Python</span>
                <span>Pyspark</span>
                <span>Pandas</span>
              </Col>
              <Col>
                <span>Data Scraping</span>
                <span>Jupyter</span>
                <span>Docker</span>
              </Col>
              <Col>
                <span>Git</span>
                <span>Airflow</span>
                <span>REST Api</span>
              </Col>
              <Col>
                <span>Javascript</span>
                <span>ReactJS</span>
                <span>Adobe XD</span>
              </Col>
            </Row>
          </SkillsetDetails>
        </Fade>
        <ImgContainer>
          <Fade right>
            <Photo src={aiImage} alt="ai-image" />
          </Fade>
        </ImgContainer>
      </Row>
    </SectionContainer>
  );
}

export default Skillset;

const Photo = styled.img`
  width: 300px;

  @media (max-width: 1024px) {
    width: 200px;
    margin: 0 auto;
    margin-top:50px;
  }
`;

const SkillsetDetails = styled.div`
  width: 920px;
  font-family: Raleway;

  @media (max-width: 1024px) {
    width: inherit;
  }

  p {
    color: #dcdcdc;
    margin: 20px 0;
    font-size: 24px;
  }

  span {
    color: #dcdcdc;
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 20px;
    &:hover {
      color: white;
    }
  }

  > div {
    width: 55%;
    justify-content: space-between;
    @media (max-width: 415px) {
      flex-direction: column;
      text-align: center;
      margin: 20px auto;
    }

    @media (max-width: 1024px){
      width:inherit;

    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    margin: auto;
  }
`;
