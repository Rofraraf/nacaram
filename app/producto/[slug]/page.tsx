import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { getSanityProductBySlug, getRelatedSanityProducts } from '@/sanity/lib/products'
import ProductDetailClient from './ProductDetailClient'

interface Props {
  params: { slug: string }
}

export default async function ProductPage({ params }: Props) {
  // Try Sanity first, fall back to local data
  const sanityProduct = await getSanityProductBySlug(params.slug).catch(() => null)
  const localProduct = getProductBySlug(params.slug)
  const product = sanityProduct ?? localProduct

  if (!product) notFound()

  // Get related products from same source
  const related = sanityProduct
    ? await getRelatedSanityProducts(params.slug, product.category).catch(() => [])
    : getRelatedProducts(product)

  return <ProductDetailClient product={product} related={related} />
}

