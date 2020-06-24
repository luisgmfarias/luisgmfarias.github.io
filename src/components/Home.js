import React from "react";
import styled, { css } from "styled-components";
import myImage from "../assets/images/perfil.png";
import gitIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

const Slogan = styled.h1`
  text-align: left;
  color: white;
  font-size: 65px;
`;

const Photo = styled.img`
  width: 270px;
  filter: drop-shadow(3px 6px 3px rgba(0, 0, 0, 0.3));
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
  width: 30px;
  cursor: pointer;
`;

function Home() {
  return (
    <>
      <Row>
        <Photo src={myImage} />
        <div>
          <Slogan>
            Hi, I'm <strong> Luís</strong>.
          </Slogan>
          <Slogan>I'm a creative developer.</Slogan>
          <div
            style={{
              width: "80px",
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <a href="https://github.com/luisgmfarias">
              <Icons src={gitIcon} />
            </a>
            <a href="https://linkedin.com/in/luisgmfarias">
              <Icons src={linkedinIcon} />
            </a>
          </div>
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
