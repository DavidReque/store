'use client'

import Category from '@/components/Hero/Category'
import HeroBanner from '@/components/Hero/HeroBanner'
import ProductsList from '@/components/Products/ProductsList'
import { CartProvider } from './CartContext'

export default function Home () {
  return (
    <CartProvider>
      <main>
        <HeroBanner />
        <Category />
        <ProductsList />
      </main>
    </CartProvider>
  )
}
