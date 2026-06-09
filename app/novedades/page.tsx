import type { Metadata } from 'next'
import { PRODUCTS } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export const metadata: Metadata = {
  title: 'Novedades — NacaRam',
  description: 'Las últimas piezas artesanales de NacaRam.',
}

export default function NovedadesPage() {
  const products = PRODUCTS.filter(p => p.available)
  return (
    <div className="section">
      <p className="eyebrow">Recién llegadas</p>
      <h1 className="title-lg" style={{ marginBottom: '6px' }}>Novedades</h1>
      <p className="subtitle" style={{ marginBottom: '36px' }}>New in · Las últimas piezas artesanales</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {products.map(p => <ProductCard key={p.id} product={p} lang="es" />)}
      </div>
    </div>
  )
}
