import React from 'react';
import styled from "styled-components";
import footerBg from "../assets/images/footer.svg";

const Background = styled.div`
  background: url(${footerBg});
  background-size:cover;
  background-repeat: no-repeat;
  position:absolute;
  top:425%;
  width: 100vw;
  height:35vh;
  filter: drop-shadow(0 -10px 2px rgba(0, 0, 0, 0.2));
  padding:50px 0;
`;

function Footer(){
    return(
        <Background>
            <h1></h1>
            <p>This website was coded by me, I made it using react with styled</p>
        </Background>

    )
}

export default Footer;