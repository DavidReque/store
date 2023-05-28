'use client'

import { useEffect, useState } from 'react'
import Cart from './Cart'
import Search from './Search'
import SideBar from './SideBar'
import Link from 'next/link'

export default function Header () {
  const [show, setShow] = useState('translate-y-0')
  const [lastScollY, setLastScollY] = useState(0)

  function controlNavbar () {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScollY) {
        setShow('-translate-y-[80px]')
      } else {
        setShow('shadow-sm')
      }
    } else {
      setShow('translate-y-0')
    }
    setLastScollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScollY])

  return (
    <header className={`h-[60px] flex justify-center items-center gap-3 z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <div>
        <SideBar />
      </div>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <div className='flex justify-center items-center'>
        <Search />
      </div>
      <div>
        <Cart />
      </div>
    </header>
  )
}
