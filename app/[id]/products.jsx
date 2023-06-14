import { productList } from '../api/products'

export default function CarouselProducts () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mb-8'>
      {productList.map((pro) => (
        <div className='flex flex-col items-center mx-4' key={pro.id}>
          <img className='w-full h-52 object-contain mb-2' src='https://oficenter.hn/wp-content/uploads/2023/04/imagen_2023-04-11_082808756.png' alt={pro.name} />
          <h3 className='text-center'>{pro.name}</h3>
          <p className='text-blue-500'>{pro.price}</p>
        </div>
      ))}
    </div>
  )
}