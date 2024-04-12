'use client'

import { useMediaQuery } from 'react-responsive'

export const useIsMobile = () => useMediaQuery({ maxWidth: 650 })
