import { useState } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'

const data = [
  { id: 1, name: 'Inicio', url: '/' },
  {
    id: 2,
    name: 'Computadoras',
    url: '/computadoras',
    subCategories: [
      { id: 1, name: 'Mantenimiento', url: './computadoras/mantenimiento' },
      { id: 2, name: 'Gamer', url: '/computadoras/gamer' },
      { id: 3, name: 'Accesorios', url: '/computadoras/accesorios' }
    ]
  },
  {
    id: 3,
    name: 'Celulares',
    url: '/celulares',
    subCategories: [
      { id: 1, name: 'Fundas', url: './celulares/fundas' },
      { id: 2, name: 'Auriculares', url: '/celulares/auriculares' },
      { id: 3, name: 'Accesorios', url: '/celulares/accesorios' }
    ]
  },
  {
    id: 4,
    name: 'Impresoras',
    url: '/impresoras',
    subCategories: [
      { id: 1, name: 'Mantenimiento', url: './impresoras/mantenimiento' },
      { id: 3, name: 'Accesorios', url: '/impresoras/accesorios' }
    ]
  }
]

export default function Menu () {
  const [activeMenuItem, setActiveMenuItem] = useState(null)

  const toggleSubMenu = (itemId) => {
    setActiveMenuItem(activeMenuItem === itemId ? null : itemId)
  }

  return (
    <ul className='flex flex-col space-y-2'>
      {data.map((item, index) => (
        <li key={item.id} className={`relative group ${index !== 0 ? 'mt-2' : ''}`}>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`flex items-center font-bold text-lg hover:text-blue-500 focus:outline-none ${
                    open ? 'text-blue-500' : ''
                  }`}
                  onClick={() => toggleSubMenu(item.id)}
                >
                  {item.name}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className={`w-4 h-4 ml-1 transition-transform ${
                      open ? 'transform rotate-180' : ''
                    }`}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </Popover.Button>
                {item.subCategories && (
                  <Popover.Panel
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-md ${
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
