import SectionContainer from "../components/SectionContainer";
import { SectionTitle } from "../components/SectionTitle";
import datatrampos from "../assets/images/Datatrampos.png";
import styled from "styled-components";
import { Col } from "../components/Utils";

function Projects() {
  return (
    <SectionContainer>
      <Col>
        <SectionTitle style={{ color: "white" }}>Main Projects</SectionTitle>
        <ProjectCard href="https://datatrampos.com.br">
          <img src={datatrampos} alt="" srcset="" />
        </ProjectCard>
      </Col>
    </SectionContainer>
  );
}

const ProjectCard = styled.a`
  width: 500px;
  margin-top: 50px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid white;

  @media (max-width: 768px) {
      width:auto;
  }

  &:hover {
    img {
      transition: transform 0.5s ease;
      filter: grayscale(7%);
      transform: scale(1.04);
    }
  }

  img {
    width: 100%;
    filter: grayscale(30%);
    border-radius: 8px;
  }
`;

export default Projects;
