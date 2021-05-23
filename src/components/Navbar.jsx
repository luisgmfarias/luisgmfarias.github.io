import styled from 'styled-components';

function Header(){
    return(
        <HeaderContainer>
            <HeaderButton>Contact</HeaderButton>
            <Logo>L</Logo>
            <HeaderButton>Resume</HeaderButton>
        </HeaderContainer>
        
    )
}

export default Header

const HeaderButton = styled.a`
    text-transform: uppercase;
    font-family: 'Raleway';
    font-size: 20px;
    color:#DCDCDC;
    font-weight: lighter;
    cursor: pointer;

    &:hover{
        color:white;
    }
`

const Logo = styled.a`
    font-family: Pacifico;
    font-size: 64px;
    margin: 0 120px;
    color:white;
`

const HeaderContainer = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, black , transparent);
    padding: 10px 0;
    position: fixed;
`