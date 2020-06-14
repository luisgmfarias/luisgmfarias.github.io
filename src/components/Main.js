import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Profile from './Profile';

const Container = styled.div`
    background:rgba(44,35,102,1);
    width:100vw;
    display:flex;
    flex-direction:column;
`

function Main() {
  return (
    <Container>
        <Header/>
        <Profile/>
    </Container>
  );
}

export default Main;
