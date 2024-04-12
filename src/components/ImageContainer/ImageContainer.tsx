import { Container } from './styles'

interface IImageContainer {
  width: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  top?: string
  left?: string
  isAbsolute?: boolean
  children: React.ReactNode
}

export const ImageContainer = ({
  children,
  ...rest
}: IImageContainer): JSX.Element => {
  return <Container {...rest}>{children}</Container>
}
