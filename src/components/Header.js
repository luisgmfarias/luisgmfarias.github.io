import React from "react";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  background: transparent;
  display: flex;
  width: 100vw;
  padding: 40px 0;
  flex-wrap:wrap;
`;

const Name = styled.h1`
  color: rgba(27, 242, 221, 1);
  font-size: 40px;
  margin-left: 60px;
`;

const Menu = styled.div`
  margin-right: 60px;
  font-size: 25px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 16%;
  justify-content: space-between;
  text-align: center;
  flex-wrap:wrap;
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
        <Button>Contact</Button>
        <Button resume>Resume</Button>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
