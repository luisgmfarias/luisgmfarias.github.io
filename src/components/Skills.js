import React from "react";
import styled from "styled-components";
import background from "../assets/images/bg.svg";
import computer from "../assets/images/computer-data.svg";
import Works from "./Works";

const Background = styled.div`
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  filter: drop-shadow(0 -10px 2px rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18% 0 5% 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  font-size: 3em;
  color: rgba(44, 35, 102, 1);
`;

const SkillsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Computer = styled.img`
  position: relative;
  top: 200px;
  width: 500px;
`;

function Skills() {
  return (
    <>
      <Computer src={computer} />
      <Background>
        <h1
          style={{
            fontSize: "65px",
            marginBottom: "7%",
            color: "rgba(44,35,102,1)",
            textDecoration: "underline",
          }}
        >
          I've worked with
        </h1>
        <SkillsContainer>
          <SkillsContent>
            <a>Javascript</a>
            <a>React</a>
            <a>CSS3</a>
            <a>HTML5</a>
          </SkillsContent>
          <SkillsContent>
            <a>Slack API</a>
            <a>Linux</a>
            <a>Git</a>
            <a>Python</a>
          </SkillsContent>

          <SkillsContent>
            <a>Illustrator</a>
            <a>Adobe XD</a>
            <a>Photoshop</a>
          </SkillsContent>
        </SkillsContainer>

        <Works />
      </Background>
    </>
  );
}

export default Skills;
