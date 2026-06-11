import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/data/products'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  lang: 'es' | 'en'
}

function isSanityUrl(src: string) {
  return src.startsWith('https://cdn.sanity.io')
}

export default function ProductCard({ product, lang }: ProductCardProps) {
  const name = product.name[lang]
  const overlayText = lang === 'es' ? 'Ver pieza' : 'View piece'
  const hasHover = product.images.length > 1

  return (
    <Link href={`/producto/${product.slug}`} className={`product-card ${styles.card}`}>
      <div className={`product-card-image ${styles.imageWrap}`}>
        <Image
          src={product.images[0]}
          alt={name}
          fill
          sizes="(max-width: 680px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
          className={styles.imgPrimary}
          unoptimized={isSanityUrl(product.images[0])}
        />
        {hasHover && (
          <Image
            src={product.images[1]}
            alt={`${name} — detalle`}
            fill
            sizes="(max-width: 680px) 50vw, 25vw"
            style={{ objectFit: 'cover' }}
            className={styles.imgHover}
            unoptimized={isSanityUrl(product.images[1])}
          />
        )}
        <div className="product-card-overlay">{overlayText}</div>
      </div>
      <p className="product-card-name">{name}</p>
      <p className="product-card-price">€{product.price}</p>
    </Link>
  )
}
