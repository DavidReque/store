import Link from 'next/link'
import { productList } from '@/app/api/products'

export default function ReloadProductsPc ({ productId }) {
  const productoRelacionado = productList.find((pro) => pro.id === productId)

  if (!productoRelacionado || !productoRelacionado.relatedProducts.length) {
    return (
      <div className='flex justify-center items-center my-11 mx-3'>
        <h1 className='text-center text-red-500 text-xl'>No hay productos relacionados 😅</h1>
      </div>
    )
  }

  const relatedProducts = productList.filter((pro) =>
    productoRelacionado.relatedProducts.includes(pro.id)
  )

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mb-8'>
      {relatedProducts.map((pro) => (
        <Link href={`/${pro.id}`} key={pro.id}>
          <div className='flex flex-col items-center mx-4'>
            <img className='w-full h-52 object-contain mb-2' src={pro.image} alt={pro.name} />
            <h3 className='text-center'>{pro.name}</h3>
            <p className='text-blue-500'>{pro.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
