import React, { Component } from "react";
import styled from "styled-components";
import scribble from "../assets/images/doodle.svg";

const ProjectsContainer = styled.div`
  width: 80%;
  font-size: 40px;
  margin-top:5%;
  color: rgba(44, 35, 102, 1);
  p{
    text-align:left;
    @media(max-width:800px){
      font-size:32px;
    }
  }
`;

const Project = styled.a`
  cursor: pointer;
  color: #662838;
  &:hover {
    color: rgba(44, 35, 102, 1);
  }
`;

const More = styled.div`
  padding: 15px;
  margin: 25px 15px 15px 0;
  background: white;
  width: 50%;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.3));
  text-align: center;
  border-radius: 10px;
  z-index: 998;
  @media(max-width:800px){
    width:85%;
    margin-left:auto;
  }
  h1 {
    font-size: 40px;
    color: #662838;
    @media(max-width:800px){
      font-size:35px;
    }
  }
  h2 {
    font-size: 25px;
    font-family: "Open Sans";
    @media(max-width:800px){
      font-size:20px;
    }
  }
  p {
    font-size: 20px;
    font-family: "Open Sans";
    text-align:center;
  }
  strong {
    color: rgba(44, 35, 102, 1);
    font-size: 20px;
    @media(max-width:800px){
      font-size:15px;
    }
  }
  span {
    font-size: 25px;
    font-family: "Open Sans";
  }
`;

const Scribble = styled.img`
  position: relative;
  z-index: -1;
  width: 150px;
  @media(max-width:800px){
    display:none;
  }
`;

const companies = {
  name: ["Mais Retorno", "Quero Educação", "UTFPR", "NASA"],
  pos: [
    "Front End Developer Intern",
    "Summer Intern",
    "Research Program",
    "College Research Visitor",
  ],
  desc: [
    "I am currently working on Angular projects, dockerized applications and front-end design.",
    "My goal was to develop a notification system for GLPI by Slack. I have worked with Slack API and Flask.",
    "I am part of a tokamak reflectometry research using a neural network approach, using Python, TensorFlow and MEEP.",
    "I was invited to develop a Python code to manipulate data from the BARREL mission.",
  ],
  local: [
    "São Paulo, SP",
    "São José dos Campos, SP",
    "Cornélio Procópio, PR",
    "Greenbelt, MD",
  ],
};

class Works extends Component {
  state = {
    pick: null,
  };

  handler = (e, i) => {
    this.setState({ pick: i });
  };

  render() {
    let content = (
      <>
        <Scribble src={scribble} alt="scribble-vector"/>
        <More>
          <h1>{companies.name[0]}</h1>
          <h2>{companies.pos[0]}</h2>
          <p>{companies.desc[0]}</p>
          <strong>{companies.local[0]}</strong>
        </More>
        <a
          className="indicator"
          style={{ transform: "rotate(-45deg)", cursor:"pointer", margin:"0" }}
          onClick={(e) => this.handler(e, this.state.pick + 1)}
        >
          <span></span>
        </a>
      </>
    );

    if (this.state.pick != null) {
      content = (
        <>
          <Scribble src={scribble} alt="scribble-vector" />
          <More>
            <h1>{companies.name[this.state.pick]}</h1>
            <h2>{companies.pos[this.state.pick]}</h2>
            <p>{companies.desc[this.state.pick]}</p>
            <strong>{companies.local[this.state.pick]}</strong>
          </More>
          <a
            className="indicator"
            style={{ transform: "rotate(-45deg)", cursor:"pointer", margin:"0" }}
            onClick={(e) => this.handler(e, this.state.pick + 1)}
          >
            <span></span>
          </a>
        </>
      );
    }

    if (this.state.pick > companies.name.length - 1) {
      this.setState({ pick: 0 });
    }
    return (
      <ProjectsContainer>
        <p>
          I had the opportunity to work on projects at:{" "}
          {companies.name.map((companie, i) => [
            i > 0 && ", ",
            <Project onClick={(e) => this.handler(e, i)} key={i}>
              {companie}
            </Project>,
          ])}
          .
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%"
          }}
        >
          {content}
        </div>
      </ProjectsContainer>
    );
  }
}

export default Works;
