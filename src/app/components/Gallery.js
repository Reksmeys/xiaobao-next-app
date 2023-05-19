import Link from "next/link";

export function ProductGallery({products}){
    return(
        <>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The most popular products in town</h1>
        <p class="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at xiaobao store, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            {
                products.map((product) => (
                    <div>
                        <Link href={`/products/${product.id}`}>
                            <img class="h-auto max-w-full rounded-lg" src={product.images[0]} alt="" />
                        </Link>
                    </div>
                ))
            }  
        </div>
        </>
    )
}