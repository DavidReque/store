'use client'
import { ChakraBaseProvider } from '@chakra-ui/react'

export default function Home () {
  return (
    <ChakraBaseProvider>
      <div>
        <main>
          Home
        </main>
      </div>
    </ChakraBaseProvider>
  )
}
