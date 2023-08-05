'use client'

import Category from '@/components/Hero/Category'
import HeroBanner from '@/components/Hero/HeroBanner'
import ProductsList from '@/components/Products/ProductsList'
import { ToastContainer } from 'react-toastify'
import { NextSeo } from 'next-seo'

export default function Main () {
  return (
    <div>
      <NextSeo
        title='Ecommerce David Requeno'
        description='Online store David'
      />
      <ToastContainer />
      <HeroBanner />
      <Category />
      <ProductsList />
    </div>
  )
}
