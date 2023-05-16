'use client'

import { Tooltip } from '@chakra-ui/react'

export default function Header () {
  return (
    <header>
      <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
        Hover me
      </Tooltip>
    </header>
  )
}
