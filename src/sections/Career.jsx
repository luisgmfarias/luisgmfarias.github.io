import SectionContainer from "../components/SectionContainer";
import styled from "styled-components";
import { Col } from "../components/Utils";

function Career() {
  return (
    <SectionContainer style={{ background: "#efefef" }}>
      <Col style={{ width: "100%" }}>
        <Title>Career</Title>
        <CardContainer>
          <CareerBox>
            <CareerCompany>NASA GSFC</CareerCompany>
            <CareerPos
              style={{ WebkitTextStroke: "1px black", color: "transparent" }}
            >
              Research Visitor
            </CareerPos>
          </CareerBox>
          <Arrow />
          <CareerBox>
            <CareerCompany>UTFPR</CareerCompany>
            <CareerPos
              style={{ WebkitTextStroke: "1px black", color: "transparent" }}
            >
              Research Undergrad
            </CareerPos>
          </CareerBox>
          <Arrow />
          <CareerBox>
            <CareerCompany>Quero Educação</CareerCompany>
            <CareerPos
              style={{ WebkitTextStroke: "1px black", color: "transparent" }}
            >
              Engineering Summer Intern
            </CareerPos>
          </CareerBox>
          <Arrow />
          <CareerBox>
            <CareerCompany>Mais Retorno</CareerCompany>
            <CareerPos
              style={{ WebkitTextStroke: "1px black", color: "transparent" }}
            >
              Junior Data Scientist
            </CareerPos>
          </CareerBox>
          <Arrow />
          <CareerBox>
            <CareerCompany>Alana AI</CareerCompany>
            <CareerPos
              style={{ WebkitTextStroke: "1px black", color: "transparent" }}
            >
              AI Software Engineer
            </CareerPos>
          </CareerBox>
        </CardContainer>
      </Col>
    </SectionContainer>
  );
}

export default Career;

const CareerBox = styled.div`
  font-family: Raleway;
  color: black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 25px;
  width: 200px;
  height: 150px;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    div {
      color: black !important;
    }
  }
`;

const CareerPos = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 24px;
`;

const CareerCompany = styled.span`
  font-size: 18px;
  font-family: Raleway;
  font-weight: bold;
`;

const Title = styled.div`
  color: black;
  font-size: 84px;
  text-align: center;
  font-family: Raleway;
  font-weight: 900;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center ;
  }
`;

const Arrow = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid #dcdcdc;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);

  @media (max-width: 768px) {
    display: none;
  }
`;
