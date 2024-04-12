import type { Metadata } from 'next'
import { Signika } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from './GlobalStyles'

const inter = Signika({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luís Medeiros - Software Engineer',
  description:
    'Software engineer engaged in problem solving, systems development and Data.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
