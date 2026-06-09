import { client } from "../../sanity/lib/client"

type Product = {
  _id: string
  name: string
  price: number
  category: string
  collection?: string
  slug?: {
    current: string
  }
}

const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  price,
  category,
  collection,
  slug
}`

export default async function SanityTestPage() {
  const products = await client.fetch<Product[]>(PRODUCTS_QUERY)

  return (
    <main style={{ padding: "48px", fontFamily: "serif" }}>
      <h1>Productos desde Sanity</h1>

      {products.length === 0 ? (
        <p>No hay productos publicados en Sanity.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id} style={{ marginBottom: "24px" }}>
              <h2>{product.name}</h2>
              <p>Precio: {product.price} €</p>
              <p>Categoría: {product.category}</p>
              {product.collection && <p>Colección: {product.collection}</p>}
              {product.slug?.current && <p>Slug: {product.slug.current}</p>}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}