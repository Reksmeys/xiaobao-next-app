import Link from "next/link";

export function Card({categories}){
    return(
        <>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-12">Category Collection</h1>
            <p class="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ml-0">Here at xiaobao store, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        categories.map(cat => (
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link href="/">
                                    <img class="rounded-t-lg" src={cat.image} alt="" />
                                </Link>
                                <div class="p-5">
                                    <Link href="/">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cat.name}</h5>
                                    </Link>
                                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{cat.name}</p> */}
                                    
                                </div>
                            </div>
                        ))
                    }
            </div>
        </>
    )
}