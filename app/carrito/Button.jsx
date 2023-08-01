import Link from 'next/link'

export default function Button () {
  return (
    <div className='flex justify-center m-8 my-14'>
      <Link href='/carrito/checkout' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline'>
        Realizar pago
      </Link>
    </div>
  )
}
