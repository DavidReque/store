'use client'

import React, { useState, useEffect } from 'react'
import { Tooltip } from '@chakra-ui/react'
import Wrapper from './Wrapper'

export default function Header () {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showCatMenu, setShowCatMenu] = useState(false)
  const [show, setShow] = useState('translate-y-0')
  const [lastScollY, setLastScollY] = useState(0)

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper>
        <Tooltip label='Inicio' aria-label='A tooltip'>
          Inicio
        </Tooltip>
      </Wrapper>
    </header>
  )
}
