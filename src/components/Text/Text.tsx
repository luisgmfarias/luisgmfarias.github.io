import { TextContainer } from './styles'

interface IText {
  fontWeight: string
  fontSize: string
  color: string
  isGradient?: boolean
  children: React.ReactNode
}

export const Text = (props: IText) => {
  return <TextContainer {...props}>{props.children}</TextContainer>
}
