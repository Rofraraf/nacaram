import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { getSanityProductBySlug } from '@/sanity/lib/products'
import ProductDetailClient from './ProductDetailClient'

interface Props {
  params: { slug: string }
}

export default async function ProductPage({ params }: Props) {
  const sanityProduct = await getSanityProductBySlug(params.slug).catch(() => null)
  const localProduct = getProductBySlug(params.slug)

  const product = sanityProduct ?? localProduct

  if (!product) {
    notFound()
  }

  const related = sanityProduct ? [] : getRelatedProducts(product)

  return <ProductDetailClient product={product} related={related} />
}