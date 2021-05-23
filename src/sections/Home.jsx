import SectionContainer from "../components/SectionContainer";
import photo from "../assets/images/profile-photo.jpeg";
import styled from "styled-components";
import { Row } from "../components/Utils";
import github from '../assets/images/akar-icons_github-fill.png';
import linkedin from '../assets/images/akar-icons_linkedin-fill.png';
import instagram from '../assets/images/ant-design_instagram-filled.png';

function Home() {
  return (
    <SectionContainer>
      <Row>
        <Photo src={photo} alt="profile-photo" />
        <Presentation>
          <span>Hi, I am</span>
          <h1>Luís Farias.</h1>
          <p>
            A creative developer focused on data, I had experience building Data
            Engineering pipelines, AI development and Web Scraping. Based in
            Cornélio Procópio, Brazil, studying Software Engineering.{" "}
          </p>

          <strong>I work at <a href="https://alana.ai">Alana.ai</a> as AI Software Engineer.</strong>

          <IconsContainer>
            <a href="https://github.com/luisgmfarias" rel="noopener" target="_blank"><img src={github} alt="" /></a>
            <a href="https://linkedin.com/in/luisgmfarias" rel="noopener" target="_blank"><img src={linkedin} alt="" /></a>
            <a href="https://instagram.com/luisgmfarias" rel="noopener" target="_blank"><img src={instagram} alt="" /></a>
          </IconsContainer>
        </Presentation>
      </Row>
    </SectionContainer>
  );
}

export default Home;

const Photo = styled.img`
  width: 350px;
  border-radius: 60px;
`;

const Presentation = styled.div`
  color: white;
  padding: 0px 20px;
  width: 800px;

  span {
    font-family: Pacifico;
    font-size: 48px;
  }

  h1 {
    font-family: Pacifico;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    letter-spacing: 2px;
    margin: 0;
  }

  p,strong {
    font-family: Raleway;
    font-size: 24px;

    a{ 
      text-decoration: none;
      color: #00FF38;
    }
  }

  p{ 
    color: #DCDCDC;
    margin-bottom: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:30%;
  margin-top: 30px;

  img{ 
    width: 47px;
  }
`