import React from "react";
import styled from "styled-components";
import codeIcon from "../assets/images/Icon awesome-code.svg";
import quoteLeft from "../assets/images/Icon awesome-quote-left.svg";
import quoteRight from "../assets/images/Icon awesome-quote-right.svg";
import graphIcon from "../assets/images/Icon open-graph.svg";
import designIcon from "../assets/images/Icon awesome-pencil-ruler.svg";

const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-size: 30px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutContainer = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
`;

const SkillsDesc = styled.p`
  color: white;
  width: 20vw;
`;

function About() {
  return (
    <AboutContainer id="About">
      <Description>
        <img src={quoteLeft} />I am a developer from São Paulo, Brazil. I
        currently live in Paraná where I study Software Engineering. I am a big
        fan of Data, Space Science enthusiast and web developer aspirant.
        <img src={quoteRight} style={{ marginLeft: "90%" }} />
      </Description>

      <Row
        style={{
          justifyContent: "space-between",
          width: "100%",
          marginTop: "15%",
          textAlign: "Center",
        }}
      >
        <Col style={{ alignItems: "center" }}>
          <img
            src={codeIcon}
            width="40px"
            style={{ marginRight: "10px", marginBottom: "15px" }}
          />
          <SkillsDesc>
            I like to code things, matching design purposes
          </SkillsDesc>
        </Col>
        <Col style={{ alignItems: "center" }}>
          <img
            src={graphIcon}
            width="35px"
            style={{ marginRight: "15px", marginBottom: "15px" }}
          />
          <SkillsDesc>
            I think data visualization is the best way to prove your idea
          </SkillsDesc>
        </Col>
        <Col style={{ alignItems: "center" }}>
          <img
            src={designIcon}
            width="35px"
            style={{ marginRight: "15px", marginBottom: "15px" }}
          />
          <SkillsDesc>
            I design as a hobbie, but I am always open to learn more. So I can
            use it professionally.
          </SkillsDesc>
        </Col>
      </Row>
    </AboutContainer>
  );
}

export default About;
