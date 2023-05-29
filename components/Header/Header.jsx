import { useEffect, useState } from 'react'
import Cart from './Cart'
import Search from './Search'
import SideBar from './SideBar'
import Link from 'next/link'

export default function Header () {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  function controlNavbar () {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      setShow(false)
    } else {
      setShow(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={`bg-white h-[60px] flex justify-center items-center gap-3 z-20 sticky top-0 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
