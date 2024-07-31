import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 15px;
  padding-top: 100px;
  gap: 5px;

  @media (max-width: 650px) {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
  }
`
