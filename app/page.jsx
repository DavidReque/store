'use client'

import Category from '@/components/Hero/Category'
import HeroBanner from '@/components/Hero/HeroBanner'
import ProductsList from '@/components/Products/ProductsList'

export default function Home () {
  return (
    <main>
      <HeroBanner />
      <Category />
      <ProductsList />
    </main>
  )
}
