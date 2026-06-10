import type { Metadata } from 'next'
import { PRODUCTS } from '@/data/products'
import { getNewSanityProducts } from '@/sanity/lib/products'
import ProductCard from '@/components/product/ProductCard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Novedades — NacaRam',
  description: 'Las últimas piezas artesanales de NacaRam.',
}

export default async function NovedadesPage() {
  const sanityProducts = await getNewSanityProducts().catch(() => [])

  const products =
    sanityProducts.length > 0
      ? sanityProducts
      : PRODUCTS.filter((product) => product.available)

  return (
    <div className="section">
      <p className="eyebrow">Recién llegadas</p>

      <h1 className="title-lg" style={{ marginBottom: '6px' }}>
        Novedades
      </h1>

      <p className="subtitle" style={{ marginBottom: '36px' }}>
        New in · Las últimas piezas artesanales
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} lang="es" />
        ))}
      </div>
    </div>
  )
}