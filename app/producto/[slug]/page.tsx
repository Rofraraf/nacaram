import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { getSanityProductBySlug, getRelatedSanityProducts, getAllSanityProducts } from '@/sanity/lib/products'
import ProductDetailClient from './ProductDetailClient'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sanityProduct = await getSanityProductBySlug(params.slug).catch(() => null)
  const localProduct = getProductBySlug(params.slug)
  const product = sanityProduct ?? localProduct

  if (!product) return {}

  const name = typeof product.name === 'string' ? product.name : product.name.es
  const description = typeof product.description === 'string'
    ? product.description
    : product.description?.es ?? ''

  return {
    title: `${name} — Bolso Artesanal de Perlas`,
    description: description.slice(0, 155),
    openGraph: {
      title: `${name} | NacaRam`,
      description: description.slice(0, 155),
      images: product.images?.[0] ? [{ url: product.images[0], width: 800, height: 1000, alt: name }] : [],
    },
    alternates: {
      canonical: `https://nacaram.com/producto/${params.slug}`,
    }
  }
}

export async function generateStaticParams() {
  const sanityProducts = await getAllSanityProducts().catch(() => [])
  return sanityProducts.map((p: { slug: string }) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: Props) {
  const sanityProduct = await getSanityProductBySlug(params.slug).catch(() => null)
  const localProduct = getProductBySlug(params.slug)
  const product = sanityProduct ?? localProduct

  if (!product) notFound()

  const related = sanityProduct
    ? await getRelatedSanityProducts(params.slug, product.category).catch(() => [])
    : getRelatedProducts(product)

  return <ProductDetailClient product={product} related={related} />
}