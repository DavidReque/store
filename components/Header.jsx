'use client'

import Search from './Search'
import SideBar from './SideBar'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='h-[60px] flex justify-center items-center gap-2'>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <SideBar />
      <div className='flex justify-center items-center'>
        <Search />
      </div>
    </header>
  )
}
