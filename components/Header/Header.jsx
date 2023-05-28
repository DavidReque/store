'use client'

import Cart from './Cart'
import Search from './Search'
import SideBar from './SideBar'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='h-[60px] flex justify-center items-center gap-3'>
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
