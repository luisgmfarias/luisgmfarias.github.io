import React from "react";
import styled from "styled-components";
import footerBg from "../assets/images/footer.svg";
import gitIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import igIcon from "../assets/images/instagram-sketched.svg";

const Background = styled.div`
  background-color: #1bf2dd;
  padding: 50px 0 0 0;
`;
const Container = styled.div`
  background: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 35vh;
  filter: drop-shadow(0 -10px 2px rgba(0, 0, 0, 0.1));
  padding: 80px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
    font-size: 55px;
    color: rgba(44, 35, 102, 1);
  }
  a{
    color: rgba(44, 35, 102, 1);
    text-decoration:none;
    font-size:17px;
  }
`;

const Icons = styled.img`
  width: 40px;
  cursor: pointer;
`;

function Footer() {
  return (
    <Background>
      <Container>
        <h1>Some of my social medias!</h1>

        <div
          style={{
            width: "15vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="https://github.com/luisgmfarias">
            <Icons src={gitIcon} />
          </a>
          <a href="https://instagram.com/luisgmfarias">
            <Icons src={igIcon} />
          </a>
          <a href="https://linkedin.com/in/luisgmfarias">
            <Icons src={linkedinIcon} />
          </a>
        </div>

        <a href="mailto:luis.farias@maisretorno.com">or mail me</a>

        <div>
          <p>
            I made this website using <strong>React</strong>,{" "}
            <strong>Styled Components</strong> and <strong>Adobe XD</strong>.
          </p>
          <p>
            It is <strong>open source</strong>, I encourage you to improve my
            code!
          </p>
        </div>
      </Container>
    </Background>
  );
}

export default Footer;
