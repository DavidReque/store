import { useState } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { data } from '@/app/api/menu'

export default function Menu () {
  const [activeMenuItem, setActiveMenuItem] = useState(null)

  const toggleSubMenu = (itemId) => {
    setActiveMenuItem(activeMenuItem === itemId ? null : itemId)
  }

  return (
    <ul className='bg-blue-500 flex flex-col space-y-2 gap-1'>
      {data.map((item, index) => (
        <li key={item.id} className={`relative ${index !== 0 ? 'mt-2' : ''}`}>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`flex ml-4 mt-2 items-center font-bold text-lg hover:text-white focus:outline-none ${
                    open ? 'text-blue-500' : ''
                  }`}
                  onClick={() => toggleSubMenu(item.id)}
                >
                  <Link className='mt-2 text-white' href={item.url}>
                    {item.name.toLocaleUpperCase()}
                  </Link>
                  {item.id !== 1 && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className={`w-4 h-4 mt-3 ml-4 transition-transform ${open ? 'transform rotate-180' : ''}`}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  )}
                </Popover.Button>
                {item.subCategories && activeMenuItem === item.id && (
                  <Popover.Panel
                    className='absolute top-0 left-full mt-0 ml-2 w-[148px] bg-gray-300 rounded-md shadow-md'
                  >
                    <ul className='py-1 bg-blue-500 text-white'>
                      {item.subCategories.map((subItem) => (
                        <li key={subItem.id} className='hover:bg-white'>
                          <Link href={subItem.url} className='block py-1 px-2 hover:text-blue-500 rounded-md'>
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Popover.Panel>
                )}
              </>
            )}
          </Popover>
        </li>
      ))}
    </ul>
  )
}
