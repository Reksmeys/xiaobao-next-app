import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '../../loading'
import { Card } from './components/Card'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { ProductGallery } from './components/Gallery'
import { Navbar } from './components/Navbar'
import { Partner } from './components/Partner'



export default async function Home() {
  const products = await fetchProducts()
  const categories = await fetchCategories()
  return (
    <>
      <Navbar />
      <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense fallback={<Loading />}>
          <ProductGallery products={products} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Card categories={categories} />
        </Suspense>
        <Partner />
        <Features />
      </main>
      <Footer />
    </>
    
  )
}

export async function fetchProducts(){
  const response = await fetch(`${process.env.baseAPI}products?limit=18&offset=1`, {
    cache: "no-store"
  })
  return response.json()
}
export async function fetchCategories(){
  const response = await fetch(`${process.env.baseAPI}categories?limit=8&offset=1`, {
    cache: "no-store"
  })
  return response.json()
}
