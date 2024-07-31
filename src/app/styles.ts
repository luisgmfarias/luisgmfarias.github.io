'use client'
import styled from 'styled-components'

import { colors } from '@/constants/colors'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  #support {
    display: absolute !important;
    z-index: -1;
    width: 0;
    height: 0;
  }
`

export const PresentationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.darkBlue};
  width: 395px;
  height: 580px;
  max-height: 726px;
  max-width: 494px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 0px 30px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 650px) {
    width: 280px;
  }
`
