import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';

const Container = styled.div`
    background:rgba(44,35,102,1);
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

function Main() {
  return (
    <Container>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Footer/>
    </Container>
  );
}

export default Main;
