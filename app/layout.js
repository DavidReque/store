import './globals.css'
import { Space_Grotesk as spaceGrotesk } from 'next/font/google'

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
      <body className={space.className}>{children}</body>
    </html>
  )
}
