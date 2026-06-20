import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductsByCategory } from '@/data/products'
import { getSanityProductsByCategory } from '@/sanity/lib/products'
import { getCategories } from '@/sanity/lib/queries'
import ProductCard from '@/components/product/ProductCard'
import styles from './page.module.css'

export const revalidate = 0
export const dynamic = 'force-dynamic'

interface Props { params: { slug: string } }

const CATEGORY_MAP: Record<string, {
  name: { es: string; en: string }
  desc: { es: string; en: string }
  image: string
}> = {
  'bolsos':        { name: { es: 'Bolsos', en: 'Bags' }, desc: { es: 'Bolsos artesanales hechos a mano en Tenerife. Cada pieza única, tejida perla a perla.', en: 'Handmade artisan bags made in Tenerife. Every piece unique, woven bead by bead.' }, image: '/img/categories/bolsos.jpg' },
  'bolsos-novia':  { name: { es: 'Bolsos de Novia', en: 'Bridal Bags' }, desc: { es: 'Bolsos nupciales artesanales para el día más especial.', en: 'Handmade bridal bags for your most special day.' }, image: '/img/categories/bolsos.jpg' },
  'bolsos-fiesta': { name: { es: 'Bolsos de Fiesta', en: 'Evening Bags' }, desc: { es: 'Para las noches que merecen algo especial.', en: 'For nights that deserve something special.' }, image: '/img/categories/bolsos.jpg' },
  'bolsos-tote':   { name: { es: 'Bolsos Tote', en: 'Tote Bags' }, desc: { es: 'Totes artesanales para el día a día.', en: 'Artisan totes for everyday.' }, image: '/img/categories/bolsos.jpg' },
  'edicion-arte':  { name: { es: 'Edición Arte', en: 'Art Edition' }, desc: { es: 'Piezas únicas inspiradas en obras de arte maestras.', en: 'Unique pieces inspired by masterworks of art.' }, image: '/img/categories/bolsos.jpg' },
  'bisuteria':     { name: { es: 'Bisutería', en: 'Jewellery' }, desc: { es: 'Collares, cuellos y pulseras artesanales de perlas.', en: 'Handmade pearl necklaces, collars and bracelets.' }, image: '/img/categories/bisuteria.jpg' },
  'collares':      { name: { es: 'Collares', en: 'Necklaces' }, desc: { es: 'Collares de perlas artesanales.', en: 'Handmade pearl necklaces.' }, image: '/img/categories/bisuteria.jpg' },
  'cuellos':       { name: { es: 'Cuellos', en: 'Collars' }, desc: { es: 'Cuellos artesanales de perlas.', en: 'Handmade pearl collars.' }, image: '/img/categories/bisuteria.jpg' },
  'complementos':  { name: { es: 'Complementos', en: 'Accessories' }, desc: { es: 'Llaveros, cinturones y diademas artesanales.', en: 'Handmade keyrings, belts and headbands.' }, image: '/img/categories/complementos.jpg' },
  'llaveros':      { name: { es: 'Llaveros', en: 'Keyrings' }, desc: { es: 'Llaveros artesanales de perlas.', en: 'Handmade pearl keyrings.' }, image: '/img/categories/complementos.jpg' },
  'cinturones':    { name: { es: 'Cinturones', en: 'Belts' }, desc: { es: 'Cinturones artesanales de perlas.', en: 'Handmade pearl belts.' }, image: '/img/categories/complementos.jpg' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = CATEGORY_MAP[params.slug]
  if (!cat) return {}
  return {
    title: `${cat.name.es} — NacaRam`,
    description: cat.desc.es,
    openGraph: { title: `${cat.name.es} — NacaRam`, description: cat.desc.es },
  }
}

export default async function CollectionPage({ params }: Props) {
  const cat = CATEGORY_MAP[params.slug]
  if (!cat) notFound()

  const [sanityProducts, sanityCategories] = await Promise.all([
    getSanityProductsByCategory(params.slug).catch(() => []),
    getCategories().catch(() => []),
  ])

  const products = sanityProducts.length > 0
    ? sanityProducts
    : getProductsByCategory(params.slug)

  const sanityCategory = sanityCategories.find(c => c.slug === params.slug)
  const heroImage = sanityCategory?.imageUrl ?? cat.image

  return (
    <>
      <div className={styles.hero}>
        <Image
          src={heroImage}
          alt={cat.name.es} fill priority sizes="100vw"
          style={{ objectFit: 'cover' }}
          unoptimized={heroImage.startsWith('https://')}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Inicio</Link><span>›</span><span>{cat.name.es}</span>
          </nav>
          <h1 className={styles.heroTitle}>{cat.name.es}</h1>
          <p className={styles.heroSub}>{cat.name.en}</p>
        </div>
      </div>

      <div className="section">
        <p className="eyebrow">{products.length} {products.length === 1 ? 'pieza' : 'piezas'}</p>
        <h2 className={styles.sectionTitle}>{cat.name.es}</h2>
        <p className="subtitle" style={{ marginBottom: '32px' }}>{cat.desc.es}</p>

        {products.length > 0 ? (
          <div className={styles.grid}>
            {products.map(p => <ProductCard key={p.id} product={p} lang="es" />)}
          </div>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>Próximamente</p>
            <p className={styles.emptySub}>Estamos preparando nuevas piezas para esta colección.</p>
            <Link href="/" className="btn btn-dark" style={{ marginTop: '24px' }}>Ver todas las piezas</Link>
          </div>
        )}
      </div>
    </>
  )
}