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
    <ul className='bg-white flex flex-col space-y-2 gap-1'>
      {data.map((item, index) => (
        <li key={item.id} className={`relative group ${index !== 0 ? 'mt-2' : ''}`}>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`flex ml-4 mt-2 items-center font-bold text-lg hover:text-blue-500 focus:outline-none ${
                    open ? 'text-blue-500' : ''
                  }`}
                  onClick={() => toggleSubMenu(item.id)}
                >
                  <Link className='mt-2' href={item.url}>{item.name.toLocaleUpperCase()}</Link>
                  {item.id !== 1 && ( // Verificar si no es la opción 'Inicio'
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className={`w-4 h-4 mt-3 ml-4 transition-transform ${
                        open ? 'transform rotate-180' : ''
                      }`}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  )}
                </Popover.Button>
                {item.subCategories && (
                  <Popover.Panel
                    className={`absolute top-0 left-full mt-0 ml-2 w-[148px] bg-white rounded-md shadow-md ${
                      activeMenuItem === item.id ? 'block' : 'hidden'
                    }`}
                  >
                    <ul className='py-1'>
                      {item.subCategories.map((subItem) => (
                        <li key={subItem.id}>
                          <Link href={subItem.url} className='block py-1 px-2 hover:bg-blue-500 hover:text-white rounded-md'>
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
