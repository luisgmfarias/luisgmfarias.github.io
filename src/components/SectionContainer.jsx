import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 100px 100px;
    background-color:#000000;
    display: flex;

    @media(max-width: 415px){
        padding:150px 25px !important;
    }

    @media(max-width: 768px){
        padding:150px 40px !important;
    }
`;

export default SectionContainer;