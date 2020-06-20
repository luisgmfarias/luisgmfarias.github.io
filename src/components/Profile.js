import React from "react";
import styled, { css } from "styled-components";
import myImage from "../assets/images/perfil.png";

const ProfileContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.h1`
  text-align: left;
  color: white;
  font-size: 65px;
`;

const ArrowContainer = styled.div`
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
  align-items:center;
  height:10vh;
  background:transparent;
`;

const Description = styled.p`
  color: white;
  font-size: 30px;
  width: 60vw;
  text-align: center;
  margin-top: 7%;
`;

const Photo = styled.img`
  width: 270px;
  filter: drop-shadow(3px 6px 3px rgba(0,0,0,.3));
`;

function Profile() {
  return (
    <ProfileContainer>
      <Photo src={myImage} />
      <div>
        <Slogan>
          Hi, I'm <strong> Luís</strong>.
        </Slogan>
        <Slogan>
          I'm a <span>creative developer.</span>
        </Slogan>
      </div>
      <div className="indicator">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <Description>
        I am a developer from São Paulo, Brazil. I currently live in Paraná
        where I study Software Engineering. I am a big fan of Data, Space
        Science enthusiast and web developer aspirant.
      </Description>
    </ProfileContainer>
  );
}

export default Profile;
