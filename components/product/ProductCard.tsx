import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/data/products'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  lang: 'es' | 'en'
}

export default function ProductCard({ product, lang }: ProductCardProps) {
  const name = product.name[lang]
  const overlayText = lang === 'es' ? 'Ver pieza' : 'View piece'
  const hasHover = product.images.length > 1
  const href = `/producto/${product.slug}`

  return (
    <article className={`product-card ${styles.card}`}>
      <Link
        href={href}
        className={`product-card-image ${styles.imageLink}`}
        aria-label={`${overlayText}: ${name}`}
      >
        <Image
          src={product.images[0]}
          alt={name}
          fill
          sizes="(max-width: 680px) 50vw, 25vw"
          className={styles.imgPrimary}
          style={{ objectFit: 'cover' }}
        />

        {hasHover && (
          <Image
            src={product.images[1]}
            alt={`${name} — detalle`}
            fill
            sizes="(max-width: 680px) 50vw, 25vw"
            className={styles.imgHover}
            style={{ objectFit: 'cover' }}
          />
        )}

        <span className="product-card-overlay">{overlayText}</span>
      </Link>

      <Link href={href} className={styles.textLink}>
        <p className="product-card-name">{name}</p>
        <p className="product-card-price">€{product.price}</p>
      </Link>
    </article>
  )
}