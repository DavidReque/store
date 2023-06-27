'use client'

import Category from '@/components/Hero/Category'
import HeroBanner from '@/components/Hero/HeroBanner'
import ProductsList from '@/components/Products/ProductsList'

export default function Main () {
  return (
    <div>
      <HeroBanner />
      <Category />
      <ProductsList />
    </div>
  )
}
