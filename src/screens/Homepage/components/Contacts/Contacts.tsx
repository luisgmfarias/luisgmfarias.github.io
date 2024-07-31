import React from 'react'

import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

import { Container } from './styles'

const CONTACTS_MAP = [
  {
    link: 'https://github.com/luisgmfarias',
    Icon: FaGithub,
  },
  {
    link: 'https://instagram.com/euodeiobug',
    Icon: FaInstagram,
  },
  {
    link: 'https://linkedin.com/in/luisgmfarias',
    Icon: FaLinkedin,
  },
]

const Media = ({
  link,
  Icon,
}: {
  link: string
  Icon: React.ComponentType<React.SVGProps<SVGElement>>
}) => {
  return (
    <Link href={link} target="_blank">
      <Icon style={{ fill: 'url(#gold-yellow)' }} />
    </Link>
  )
}

export const Contacts = () => {
  return (
    <Container>
      {CONTACTS_MAP.map((contact, index) => (
        <Media key={index} {...contact} />
      ))}
    </Container>
  )
}
