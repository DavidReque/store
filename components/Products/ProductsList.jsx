import { productList } from '@/app/api/products'

export default function ProductsList () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {
            productList.map((product) => (
              <div key={product.id} className='bg-white shadow-md rounded-md p-4'>
                <img
                  src='https://www.apple.com/v/iphone-14-pro/g/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png'
                  alt={product.name}
                  className='w-full h-40 object-cover mb-4'
                />
                <h3 className='text-lg font-bold mb-2'>{product.name}</h3>
                <p className='text-gray-600 mb-2'>{product.description}</p>
                <p className='text-blue-500 font-semibold'>{product.price}</p>
              </div>
            ))
        }
    </div>
  )
}
