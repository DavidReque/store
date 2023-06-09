import { productList } from '../api/products'
import Link from 'next/dist/client/link'

export default function impresoras () {
  const impresoras = productList.filter((pro) => pro.category === 'impresoras')

  return (
    <div className='h-[550px] mr-16 mb-16 ml-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {impresoras.map((pro) => (
        <Link href={`/impresoras/${pro.id}`} key={pro.id}>
          <div className='bg-white shadow-md rounded-md p-4 transform transition-transform duration-300 hover:-translate-y-2'>
            <img src={pro.image} alt={pro.name} className='w-full h-52 object-contain mb-4' />
            <h2 className='text-lg font-bold mb-2'>{pro.name}</h2>
            <p className='text-gray-600 mb-2'>{pro.description}</p>
            <p className='text-blue-500 font-semibold'>{pro.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
