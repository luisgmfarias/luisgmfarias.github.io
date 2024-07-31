import styled from 'styled-components'

export const TextContainer = styled.p<{
  fontWeight: string
  fontSize: string
  color: string
  isGradient?: boolean
}>`
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ isGradient, color }) => (!isGradient && color) || '#000'};
  background: ${({ isGradient, color }) => (isGradient ? color : 'none')};

  ${({ isGradient }) =>
    isGradient &&
    ` -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`
