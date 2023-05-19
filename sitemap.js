export default async function sitemap(){
    const res = await fetch(`${process.env.baseAPI}products`, {
        cache: "no-store"
    })
    const allProducts = await res.json()
    const products = allProducts.map((product) => ({
        url: `${process.env.baseAPI}products/${product.id}`,
        lastModified: new Date().toISOString()
    }))
    const routes = ['', '/about', '/products'].map((route) => ({
        url: `localhost:3000/${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes, ...products]
}