import React from "react";
import styled from "styled-components";
import footerBg from "../assets/images/footer.svg";
import gitIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import igIcon from "../assets/images/instagram-sketched.svg";

const Background = styled.div`
  background-color: #1bf2dd;
  padding: 100px 0 0 0;
  @media(max-width:800px){
    padding:150px 0 0 0;
  }
`;
const Container = styled.div`
  background: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  filter: drop-shadow(0 -10px 2px rgba(0, 0, 0, 0.1));
  padding: 80px 0 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding: 50px 0 25px 0;
  }
  p {
    font-family: "Open Sans";
    color: rgba(44, 35, 102, 1);
    font-size: 15px;
    text-align: center;
  }
  strong {
    color: rgba(44, 35, 102, 1);
  }
  h1 {
    text-align: center;
    font-size: 55px;
    color: rgba(44, 35, 102, 1);
    @media (max-width: 800px) {
      font-size: 30px;
    }
  }
  a {
    color: rgba(44, 35, 102, 1);
    text-decoration: none;
    font-size: 17px;
  }
`;

const Icons = styled.img`
  width: 40px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 20px;
  }
`;

const IconsContainer = styled.div`
  width: 25vw;
  display: flex;
  justify-content: space-between;
  margin:15px 0;
  @media (max-width: 800px) {
    width: 55vw;
  }
`;

const Disc = styled.div`
  @media (max-width: 800px) {
    
    margin:0 20px;
    p{
      font-size: 12px;
    }
  }
`;

function Footer() {
  return (
    <Background>
      <Container>
        <h1>Some of my social medias!</h1>

        <IconsContainer>
          <a href="https://github.com/luisgmfarias">
            <Icons src={gitIcon} alt="github"/>
          </a>
          <a href="https://instagram.com/luisgmfarias">
            <Icons src={igIcon} alt="instagram" />
          </a>
          <a href="https://linkedin.com/in/luisgmfarias">
            <Icons src={linkedinIcon} alt="linkedin" />
          </a>
          <a style={{margin:"auto 0"}} href="mailto:luis.farias@maisretorno.com">or mail me</a>
        </IconsContainer>

        

        <Disc>
          <p>
            I made this website using <strong>React</strong>,{" "}
            <strong>Styled Components</strong> and <strong>Adobe XD</strong>.
          </p>
          <p>
            It is <strong><a href="https://github.com/luisgmfarias/website">open source</a></strong>, I encourage you to improve my
            code!
          </p>
        </Disc>
      </Container>
    </Background>
  );
}

export default Footer;
