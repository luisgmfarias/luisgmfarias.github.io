import React from "react";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  background: transparent;
  display: flex;
  width: 100vw;
  padding: 40px 0 20px 0;
  flex-wrap:wrap;
  @media(max-width:800px){
    padding:0 0 0 0;
    flex-direction:column;
    justify-content:center;
    text-align:center;
  }
`;

const Name = styled.h1`
  color: white;
  font-size: 40px;
  margin-left: 60px;
  @media(max-width:800px){
    font-size:55px;
    margin-top:20px;
    margin-left:0;
  }
`;

const Menu = styled.div`
  margin-right: 60px;
  font-size: 25px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-wrap:wrap;
  @media(max-width:800px){
    margin:10px auto;
  }
`;

const Button = styled.a`
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  ${(props) =>
    props.resume &&
    css`
      border: 2px solid #1bf2dd;
      border-radius: 10px;
      padding: 1px 5px;
      &:hover {
        background: #1bf2dd;
        color: #2c2366;
        transition: ease 0.5s;
      }
    `};
`;

function Header() {
  return (
    <HeaderContainer>
      <Name>Luís Farias</Name>
      <Menu>
        <Button resume>Resume</Button>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
