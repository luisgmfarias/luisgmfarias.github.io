import styled from "styled-components";
import Fade from "react-reveal/Fade";
import PDF from "../assets/luis-farias-resume.pdf";

function Header() {
  return (
    <Fade top cascade>
      <HeaderContainer>
        <HeaderButton href="#contact">Contact</HeaderButton>
        <Logo href="#home">L</Logo>
        <HeaderButton href={PDF} target="_blank">
          Resume
        </HeaderButton>
      </HeaderContainer>
    </Fade>
  );
}

export default Header;

const HeaderButton = styled.a`
  text-transform: uppercase;
  font-family: "Raleway";
  font-size: 20px;
  color: #dcdcdc;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 415px) {
    font-size: 18px;
  }

  &:hover {
    color: white;
  }
`;

const Logo = styled.a`
  font-family: Pacifico;
  font-size: 64px;
  margin: 0 120px;
  color: white;
  text-decoration: none;

  @media (max-width: 415px) {
    margin: 0 30px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 0x 0;
  position: fixed;
  z-index: 999;
`;
