'use client'

import Image from 'next/image'

import { Container, PresentationCard } from '@/app/styles'
import GradientSVG from '@/components/GradiendSVG'
import ImageContainer from '@/components/ImageContainer'
import { colors } from '@/constants/colors'
import { useIsMobile } from '@/hooks/useIsMobile'

import Contacts from './components/Contacts'
import { IntroductionDict } from './components/IntroductionDict/IntroductionDict'

export const Homepage = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <Image
        src="/assets/landscape.png"
        alt="Landscape"
        objectFit="cover"
        fill={true}
        quality={100}
        style={{ filter: 'brightness(20%)' }}
      />
      <Container>
        <PresentationCard>
          <ImageContainer height="50%" width="100%">
            <Image
              src="/assets/landscape.png"
              alt="Landscape"
              quality={100}
              fill={true}
              objectFit="cover"
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
            />
          </ImageContainer>
          <IntroductionDict />
          <GradientSVG firstColor={colors.yellow} secondColor={colors.light} />
          <Contacts />
          <ImageContainer
            width={isMobile ? '100px' : '150px'}
            height={isMobile ? '100px' : '150px'}
            top={isMobile ? 'calc(50% - 50px)' : 'calc(50% - 75px)'}
            isAbsolute
          >
            <Image
              src="/assets/profile.jpeg"
              alt="Luis Medeiros"
              quality={100}
              fill
              objectFit="cover"
              style={{
                borderRadius: '50%',
              }}
            />
          </ImageContainer>
        </PresentationCard>
      </Container>
    </>
  )
}
