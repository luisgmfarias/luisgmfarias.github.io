import SectionContainer from "../components/SectionContainer";
import photo from "../assets/images/profile-photo.jpeg";
import styled from "styled-components";
import { Row, Col } from "../components/Utils";
import github from "../assets/images/akar-icons_github-fill.png";
import linkedin from "../assets/images/akar-icons_linkedin-fill.png";
import instagram from "../assets/images/ant-design_instagram-filled.png";
import Fade from "react-reveal/Fade";
import ArrowAnimation from "../components/ArrowAnimation";

function Home() {
  return (
    <SectionContainer id="home" style={{ paddingTop: "250px" }}>
      <Col>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Fade left>
            <Photo src={photo} alt="profile-photo" />
          </Fade>

          <Presentation>
            <span>Hi, I am</span>
            <h1>Luís Farias.</h1>
            <p>
              A creative developer focused on data, I have experience in Web
              Development, Mobile Development, Web Scraping and Python. I am
              Based in São José dos Campos, Brazil.{" "}
            </p>

            <strong>
              I work at <a href="https://savings.club">Savings Club</a> as a Software
              Engineer.
            </strong>

            <IconsContainer>
              <a
                href="https://github.com/luisgmfarias"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} alt="" />
              </a>
              <a
                href="https://linkedin.com/in/luisgmfarias"
                rel="noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                href="https://instagram.com/luisgmfarias"
                rel="noreferrer"
                target="_blank"
              >
                <img src={instagram} alt="" />
              </a>
            </IconsContainer>
          </Presentation>
        </Row>
        <a
          href="#skillset"
          style={{
            margin: "auto",
            color: "white",
            fontFamily: "Raleway",
            marginTop: "50px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          <span>MORE ABOUT ME</span>
          <ArrowAnimation />
        </a>
      </Col>
    </SectionContainer>
  );
}

export default Home;

const Photo = styled.img`
  width: 350px;
  border-radius: 60px;

  @media (max-width: 415px) {
    width: 300px;
    margin: 0 auto;
  }
`;

const Presentation = styled.div`
  color: white;
  padding: 0px 20px;
  width: 60%;

  @media (max-width: 1024px) {
    margin-top: 30px;
    padding: 0;
    width: 100%;
  }

  span {
    font-family: Raleway;
    font-weight: 900;
    font-size: 48px;
  }

  h1 {
    font-family: Raleway;
    font-weight: 900;
    font-size: 96px;
    margin: 0;

    @media (max-width: 415px) {
      line-height: 1;
      font-size: 72px;
    }
  }

  p,
  strong {
    font-family: Raleway;
    font-size: 24px;
    margin-top: 10px;

    a {
      text-decoration: none;
      color: #00ff38;
    }
  }

  p {
    color: #dcdcdc;
    margin-bottom: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  margin-top: 30px;

  @media (max-width: 415px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
  }

  img {
    width: 47px;

    @media (max-width: 415px) {
      width: 30px;
    }
  }
`;
