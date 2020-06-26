import React from "react";
import styled, { css } from "styled-components";
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
  @media (max-width: 800px) {
    text-align: center;
    font-size: 35px;
  }
`;

const AboutContainer = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
`;

const SkillsDesc = styled.p`
  color: white;
  width: 20vw;
  font-size: 18px;
  @media (max-width: 800px) {
    width: 50vw;
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 15%;
  text-align: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ValueBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 15px 10px;
  @media (max-width: 800px) {
    padding: 10px 5px;
    margin-bottom: 40px;
  }
`;

const Quote = styled.img`
  ${(props) =>
    props.right &&
    css`
      margin-left: auto;
    `}
  @media(max-width:800px){
    width:70px;
  }
`;

const Icon = styled.img`
  width: 35px;
  margin-right: 10px;
  margin-bottom: 15px;
  @media (max-right: 800px) {
    margin: 0;
  }
  ${(props) =>
    props.code &&
    css`
      width: 40px;
    `}
`;

function About() {
  return (
    <AboutContainer id="About">
      <Description>
        <Quote src={quoteLeft} alt="quote-left"/>I am a developer from São Paulo, Brazil. I
        currently live in Paraná where I study Software Engineering. I am a big
        fan of Data, Space Science enthusiast and web developer aspirant.
        <Quote src={quoteRight} alt="quote-left" right />
      </Description>

      <ValuesContainer>
        <ValueBlock>
          <Icon src={codeIcon} alt="code-icon" code />
          <SkillsDesc>
            I am always looking forward when coding, looking for creative
            solutions, just as I love solving problems.
          </SkillsDesc>
        </ValueBlock>
        <ValueBlock>
          <Icon src={graphIcon} alt="graph-icon"/>
          <SkillsDesc>
            I think data visualization is the best way to prove your idea. I
            know how important data is today and how far we can go with that
            power in our hands.
          </SkillsDesc>
        </ValueBlock>
        <ValueBlock>
          <Icon src={designIcon} alt="design-icon"/>
          <SkillsDesc>
            I design as a hobby, but I love to use that knowledge,
            professionally.
          </SkillsDesc>
        </ValueBlock>
      </ValuesContainer>
    </AboutContainer>
  );
}

export default About;
