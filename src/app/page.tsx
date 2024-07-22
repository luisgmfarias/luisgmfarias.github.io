'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

import { colors } from '@/constants/colors'
import ImageContainer from '@/components/ImageContainer'
import Text from '@/components/Text'
import GradientSVG from '@/components/GradiendSVG'

import {
  Container,
  PresentationCard,
  SocialMediaContainer,
  TextContainer,
} from './styles'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Home() {
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
          <TextContainer>
            <Text
              fontWeight="200"
              fontSize={isMobile ? '12px' : '16px'}
              color={colors.light}
            >
              Hey there, I&apos;m
            </Text>
            <Text
              fontWeight="bold"
              fontSize={isMobile ? '30px' : '36px'}
              color={colors.goldYellow}
              isGradient
            >
              Luís Medeiros
            </Text>
            <Text
              fontWeight="200"
              fontSize={isMobile ? '12px' : '16px'}
              color={colors.light}
            >
              Software engineer engaged in problem solving, systems development
              and Data.
            </Text>
          </TextContainer>
          <SocialMediaContainer>
            <Link href="https://github.com/luisgmfarias" target="_blank">
              <FaGithub style={{ fill: 'url(#gold-yellow)' }} />
            </Link>
            <Link href="https://instagram.com/euodeiobug" target="_blank">
              <FaInstagram style={{ fill: 'url(#gold-yellow)' }} />
            </Link>
            <Link href="https://linkedin.com/in/luisgmfarias" target="_blank">
              <FaLinkedin style={{ fill: 'url(#gold-yellow)' }} />
            </Link>
          </SocialMediaContainer>
          <GradientSVG firstColor={colors.yellow} secondColor={colors.light} />
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
