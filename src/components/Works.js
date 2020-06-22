import React, { Component } from "react";
import styled from "styled-components";
import scribble from "../assets/images/doodle.svg";

const ProjectsContainer = styled.div`
  width: 60%;
  margin-top: 5%;
  font-size: 40px;
  color: rgba(44, 35, 102, 1);
`;

const Project = styled.a`
  cursor: pointer;
  color: #662838;
  &:hover {
    color: rgba(44, 35, 102, 1);
  }
`;

const More = styled.div`
  padding: ${(props) => (props.seemore ? "0" : "15px")};
  margin: ${(props) => (props.seemore ? "0" : "30px 0")};
  background: ${(props) => (props.seemore ? "transparent" : "white")};
  width: 50%;
  filter: ${(props) =>
    props.seemore ? "none" : "drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.3))"};
  text-align: center;
  border-radius: 10px;
  position: relative;
  z-index: 998;
  h1 {
    font-size: 40px;
    color: #662838;
  }
  h2 {
    font-size: 25px;
    font-family: "Open Sans";
  }
  p {
    font-size: 20px;
    font-family: "Open Sans";
  }
  strong {
    color: rgba(44, 35, 102, 1);
    font-size: 20px;
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
`;

// const Logo = styled.img`
//   position: relative;
//   z-index: -1;
//   width: 150px;
//   height:150px;
//   margin:auto 0;
//   filter:opacity(20%);
// `;

const companies = {
  name: ["Mais Retorno", "Quero Educação", "UTFPR", "NASA"],
  pos: [
    "Front End Developer Intern",
    "Summer Intern",
    "Undergrad Research Program",
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
  ]
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
      <More seemore>
        <span>click on a project above to see more</span>
      </More>
    );

    if (this.state.pick != null) {
      content = (
        <>
          <Scribble src={scribble} />
          <More>
            <h1>{companies.name[this.state.pick]}</h1>
            <h2>{companies.pos[this.state.pick]}</h2>
            <p>{companies.desc[this.state.pick]}</p>
            <strong>{companies.local[this.state.pick]}</strong>
          </More>
        </>
      );
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
            alignItems:"center",
            width: "100%",
            height:"320px",
            marginTop: "5%",
          }}
        >
          {content}
        </div>
      </ProjectsContainer>
    );
  }
}

export default Works;
