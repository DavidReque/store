'use client'

import SideBar from './SideBar'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='h-[50px] flex justify-center items-center'>
      <div>
        <Link href='/'>Logo</Link>
      </div>
      <SideBar />
    </header>
  )
}
