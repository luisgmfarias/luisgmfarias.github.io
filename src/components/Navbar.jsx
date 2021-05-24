import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderButton>Contact</HeaderButton>
      <Logo href="http://localhost:3000">L</Logo>
      <HeaderButton>Resume</HeaderButton>
    </HeaderContainer>
  );
}

export default Header;

const HeaderButton = styled.a`
  text-transform: uppercase;
  font-family: "Raleway";
  font-size: 20px;
  color: #dcdcdc;
  font-weight: lighter;
  cursor: pointer;

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
  background: linear-gradient(to bottom, black, transparent);
  padding: 10px 0;
  position: fixed;
`;
