import { Card } from "@/app/components/Card";
import { ProductGallery } from "@/app/components/Gallery";
import { fetchCategories, fetchProducts } from "@/app/page";
import { Suspense } from "react";
import Loading from "../../../../loading";

export const metadata = {
    title: 'ISTAD - Product',
    description: 'Listing products',
    keywords: ["IT", "Spring", "Java", "IT school", "Advanced IT Institute", "AI", "Cybersecurity", "DevOps", "Data Analytics"] 
}

export default async function Products(){
    const products = await fetchProducts()
    const categories = await fetchCategories()
    return(
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
            <Suspense fallback={<Loading />}>
                <ProductGallery products={products} />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Card categories={categories} />
            </Suspense>
        </main>
    )
}