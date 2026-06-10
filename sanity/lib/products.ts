import type { Product } from '@/data/products'
import { client } from './client'

type SanityProduct = {
  _id: string
  name?: string
  slug?: {
    current?: string
  }
  price?: number
  category?: string
  collection?: string
  shortDescription?: string
  description?: string
  mainImageUrl?: string
  galleryUrls?: string[]
  isFeatured?: boolean
}

const featuredProductsQuery = `*[_type == "product" && isFeatured == true] | order(_createdAt desc) {
  _id,
  name,
  slug,
  price,
  category,
  collection,
  shortDescription,
  description,
  "mainImageUrl": mainImage.asset->url,
  "galleryUrls": gallery[].asset->url,
  isFeatured
}`

function mapSanityProductToProduct(product: SanityProduct): Product {
  const name = product.name ?? 'Producto NacaRam'

  const images = [
    product.mainImageUrl,
    ...(product.galleryUrls ?? []),
  ].filter(Boolean) as string[]

  const fallbackDescription =
    'Pieza artesanal de NacaRam, hecha a mano en Tenerife.'

  return {
    id: product._id,
    slug: product.slug?.current ?? product._id,
    name: {
      es: name,
      en: name,
    },
    tagline: {
      es: product.shortDescription ?? fallbackDescription,
      en: product.shortDescription ?? 'Handmade NacaRam piece, made in Tenerife.',
    },
    description: {
      es: product.description ?? product.shortDescription ?? fallbackDescription,
      en: product.description ?? product.shortDescription ?? 'Handmade NacaRam piece, made in Tenerife.',
    },
    price: product.price ?? 0,
    category: product.category ? [product.category] : ['bolsos'],
    images: images.length > 0 ? images : ['/img/og-default.jpg'],
    material: {
      es: 'Perlas y cuentas seleccionadas · Hecho a mano',
      en: 'Selected pearls and beads · Handmade',
    },
    dimensions: 'Consultar disponibilidad',
    madeIn: {
      es: 'Tenerife, Islas Canarias',
      en: 'Tenerife, Canary Islands',
    },
    featured: Boolean(product.isFeatured),
    available: true,
  }
}

export async function getFeaturedSanityProducts(): Promise<Product[]> {
  const products = await client.fetch<SanityProduct[]>(featuredProductsQuery)

  return products
    .filter((product) => product.slug?.current)
    .map(mapSanityProductToProduct)
}
export async function getSanityProductBySlug(slug: string): Promise<Product | null> {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    price,
    category,
    collection,
    shortDescription,
    description,
    "mainImageUrl": mainImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    isFeatured
  }`

  const product = await client.fetch<SanityProduct | null>(query, { slug })

  if (!product || !product.slug?.current) {
    return null
  }

  return mapSanityProductToProduct(product)
}
export async function getNewSanityProducts(): Promise<Product[]> {
  const query = `*[_type == "product" && isNew == true] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    category,
    collection,
    shortDescription,
    description,
    "mainImageUrl": mainImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    isFeatured
  }`

  const products = await client.fetch<SanityProduct[]>(query)

  return products
    .filter((product) => product.slug?.current)
    .map(mapSanityProductToProduct)
}