import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 10px;
  svg {
    width: 25px;
    height: 25px;
    @media (max-width: 650px) {
      width: 20px;
      height: 20px;
    }
  }
`
