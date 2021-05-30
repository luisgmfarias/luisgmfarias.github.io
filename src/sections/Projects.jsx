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
          <p>DATATRAMPOS</p>
        </ProjectCard>
      </Col>
    </SectionContainer>
  );
}

const ProjectCard = styled.a`
  width: 700px;
  height: 700px;
  position: relative;
  margin-top: 50px;
  text-align: center;
  cursor:pointer;
  border-radius: 8px;
  overflow: hidden;
  

  &:hover{
      img{
        transition: transform .5s ease;
        filter: grayscale(7%);
        transform: scale(1.04);
      }
      p{
        transition: color .10s ease;
        color:white;
      }

      
  }

  img {
    width: 100%;
    filter: grayscale(30%);
    border-radius: 8px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Raleway;
    font-weight: 900;
    color: transparent;
    font-size: 40px;
    font-weight: bold;
    color:transparent;
    
   
  }
`;

export default Projects;
