'use client'

import styled from 'styled-components'

export const Container = styled.div<{
  width: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  top?: string
  left?: string
  isAbsolute?: boolean
}>`
  ${({
    width,
    height = 'inherit',
    maxWidth,
    maxHeight,
    top = 'inherit',
    left = 'inherit',
    isAbsolute = false,
  }) => `
      position: ${isAbsolute ? `absolute` : `relative`};
      width: ${width};
      max-width: ${maxWidth};
      max-height: ${maxHeight};
      height: ${height};
      left: ${left};
      top: ${top};
  `}
`
