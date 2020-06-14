import React from "react";
import styled, { css } from "styled-components";
import myImage from "../assets/images/perfil.png";

const ProfileContainer = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.h1`
  text-align: left;
  color: white;
  font-size: 70px;
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
  border: 1px solid transparent;
  border-radius: 30%;
`;

function Profile() {
  return (
    <ProfileContainer>
      <Photo src={myImage} />
      <div>
        <Slogan>
          Hi, I'm <strong> Luís</strong>,{" "}
        </Slogan>
        <Slogan>I'm a <span>creative developer.</span></Slogan>
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
