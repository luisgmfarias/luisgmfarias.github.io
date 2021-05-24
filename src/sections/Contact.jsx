import styled from "styled-components";
import { SectionTitle } from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import github from "../assets/images/akar-icons_github-fill.png";
import linkedin from "../assets/images/akar-icons_linkedin-fill.png";
import instagram from "../assets/images/ant-design_instagram-filled.png";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <SectionContainer>
      <ContactContainer>
        <Fade cascade>
          <SectionTitle style={{ textAlign: "center" }}>
            Lets keep in touch!
          </SectionTitle>
          <Paragraph>
            If you need an advice, talk about a project or would like to talk
            about anything else, feel free to drop me a message at
            <a href="mailto:luisgmfarias@gmail.com"> luisgmfarias@gmail.com</a>.
          </Paragraph>
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
          <Paragraph>
            Built from scratch by me, it is <strong>open source</strong>.
          </Paragraph>
        </Fade>
      </ContactContainer>
    </SectionContainer>
  );
}

export default Contact;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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

const Paragraph = styled.p`
  font-family: Raleway;
  color: #dcdcdc;
  margin: 30px 0;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }

  strong {
    color: #00ff38;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  font-size: 20px;

  @media (max-width: 415px) {
    width: 100%;
  }
`;
