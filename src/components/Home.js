import React from "react";
import styled, { css } from "styled-components";
import myImage from "../assets/images/perfil.png";
import gitIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

const Slogan = styled.h1`
  text-align: left;
  color: white;
  font-size: 65px;
  @media (max-width: 800px) {
    font-size:55px;
    text-align: center;
  }
`;

const Photo = styled.img`
  width: 270px;
  filter: drop-shadow(3px 6px 3px rgba(0, 0, 0, 0.3));
  @media(max-width:800px){
    margin-bottom:20px;
  }
`;

const Row = styled.div`
  margin-top: 10%;
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Icons = styled.img`
  width: 40px;
  cursor: pointer;
`;

const IconsContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  @media(max-width:800px){
    margin:20px auto;
  }
`;

function Home() {
  return (
    <>
      <Row>
        <Photo src={myImage} alt="..." />
        <div>
          <Slogan>
            Hi, I'm <strong> Luís</strong>.
          </Slogan>
          <Slogan>I'm a creative developer.</Slogan>
          <IconsContainer>
            <a href="https://github.com/luisgmfarias">
              <Icons src={gitIcon} alt="git-icon" />
            </a>
            <a href="https://linkedin.com/in/luisgmfarias">
              <Icons src={linkedinIcon} alt="linkedin-icon"/>
            </a>
          </IconsContainer>
        </div>
      </Row>

      <a href="#About" className="indicator">
        <span></span>
        <span></span>
      </a>
    </>
  );
}

export default Home;
