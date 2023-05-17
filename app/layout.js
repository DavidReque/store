'use client'

import '../styles/globals.css'
import { Space_Grotesk as spaceGrotesk } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ChakraBaseProvider } from '@chakra-ui/react'

const space = spaceGrotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Online store',
  description: 'Online store DSA'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={space.className}>
        <ChakraBaseProvider>
          <Header />
          {children}
          <Footer />
        </ChakraBaseProvider>
      </body>
    </html>
  )
}
