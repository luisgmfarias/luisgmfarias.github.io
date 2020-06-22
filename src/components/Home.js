import React from "react";
import styled, { css } from "styled-components";
import myImage from "../assets/images/perfil.png";

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
  padding:10px;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: center;
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
