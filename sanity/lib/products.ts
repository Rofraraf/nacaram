import { client } from './client'
import { urlFor } from './image'
import type { Product } from '@/data/products'

interface SanityProduct {
  _id: string
  name: { es: string; en: string }
  slug: { current: string }
  price: number
  category: string[]
  mainImage?: any
  gallery?: any[]
  tagline?: { es: string; en: string }
  description?: { es: string; en: string }
  material?: { es: string; en: string }
  dimensions?: string
  madeIn?: { es: string; en: string }
  featured: boolean
  available: boolean
  publishFrom?: string
  publishUntil?: string
  order?: number
}

const PRODUCT_FIELDS = `
  _id, name, slug, price, category,
  mainImage, gallery[],
  tagline, description, material, dimensions, madeIn,
  featured, available, publishFrom, publishUntil, order
`

const DATE_FILTER = `
  && available == true
  && (!defined(publishFrom) || publishFrom <= now())
  && (!defined(publishUntil) || publishUntil >= now())
`

function mapProduct(p: SanityProduct): Product {
  const mainUrl = p.mainImage ? urlFor(p.mainImage).width(800).url() : '/img/og-default.jpg'
  const galleryUrls = (p.gallery ?? []).map((g: any) => urlFor(g).width(800).url())
  const images = [mainUrl, ...galleryUrls]

  return {
    id: p._id,
    slug: p.slug.current,
    name: p.name ?? { es: 'NacaRam', en: 'NacaRam' },
    tagline: p.tagline ?? { es: 'Hecho a mano en Tenerife.', en: 'Handmade in Tenerife.' },
    description: p.description ?? { es: 'Pieza artesanal hecha a mano.', en: 'Handmade artisan piece.' },
    price: p.price ?? 0,
    category: p.category ?? ['bolsos'],
    images,
    material: p.material ?? { es: 'Perlas artesanales', en: 'Artisan pearls' },
    dimensions: p.dimensions ?? '',
    madeIn: p.madeIn ?? { es: 'Tenerife, Islas Canarias', en: 'Tenerife, Canary Islands' },
    featured: p.featured ?? false,
    available: p.available ?? true,
  }
}

export async function getFeaturedSanityProducts(): Promise<Product[]> {
  const query = `*[_type == "product" ${DATE_FILTER}] | order(coalesce(order, 9999) asc, _createdAt desc) [0...10] { ${PRODUCT_FIELDS} }`
  const products = await client.fetch<SanityProduct[]>(query)
  return products.map(mapProduct)
}

export async function getAllSanityProducts(): Promise<Product[]> {
  const query = `*[_type == "product" ${DATE_FILTER}] | order(coalesce(order, 9999) asc, _createdAt desc) { ${PRODUCT_FIELDS} }`
  const products = await client.fetch<SanityProduct[]>(query)
  return products.map(mapProduct)
}

export async function getSanityProductBySlug(slug: string): Promise<Product | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_FIELDS} }`
  const product = await client.fetch<SanityProduct | null>(query, { slug })
  if (!product) return null
  return mapProduct(product)
}

export async function getSanityProductsByCategory(category: string): Promise<Product[]> {
  const query = `*[_type == "product" && $category in category ${DATE_FILTER}] | order(coalesce(order, 9999) asc, _createdAt desc) { ${PRODUCT_FIELDS} }`
  const products = await client.fetch<SanityProduct[]>(query, { category })
  return products.map(mapProduct)
}

export async function getRelatedSanityProducts(currentSlug: string, categories: string[]): Promise<Product[]> {
  const query = `*[_type == "product" && slug.current != $slug && count((category)[@ in $categories]) > 0 ${DATE_FILTER}] | order(coalesce(order, 9999) asc, _createdAt desc) [0...4] { ${PRODUCT_FIELDS} }`
  const products = await client.fetch<SanityProduct[]>(query, { slug: currentSlug, categories })
  return products.map(mapProduct)
}