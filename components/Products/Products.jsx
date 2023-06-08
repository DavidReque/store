import ProductsList from './ProductsList'
import { useRouter } from 'next/router'

export default function Products () {
  const router = useRouter()

  return (
    <div>
      <ProductsList router={router} />
    </div>
  )
}
