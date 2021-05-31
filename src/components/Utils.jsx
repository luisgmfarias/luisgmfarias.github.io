import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
