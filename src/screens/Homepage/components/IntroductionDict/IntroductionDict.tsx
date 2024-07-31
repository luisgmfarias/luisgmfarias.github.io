import React from 'react'

import Text from '@/components/Text'
import { colors } from '@/constants/colors'
import { useIsMobile } from '@/hooks/useIsMobile'

import { TextContainer } from './styles'

const TEXT_INTRODUCTION_MAP = {
  title: "Hey there, I'm",
  name: 'Luís Medeiros',
  description:
    'Software engineer engaged in problem solving, systems development and Data.',
}

export const IntroductionDict = () => {
  const isMobile = useIsMobile()
  return (
    <TextContainer>
      <Text
        fontWeight="200"
        fontSize={isMobile ? '12px' : '16px'}
        color={colors.light}
      >
        {TEXT_INTRODUCTION_MAP.title}
      </Text>
      <Text
        fontWeight="bold"
        fontSize={isMobile ? '30px' : '36px'}
        color={colors.goldYellow}
        isGradient
      >
        {TEXT_INTRODUCTION_MAP.name}
      </Text>
      <Text
        fontWeight="200"
        fontSize={isMobile ? '12px' : '16px'}
        color={colors.light}
      >
        {TEXT_INTRODUCTION_MAP.description}
      </Text>
    </TextContainer>
  )
}
