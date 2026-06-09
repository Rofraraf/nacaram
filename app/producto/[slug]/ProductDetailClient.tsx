'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/data/products'
import { useCart } from '@/lib/cart'
import { useLang } from '@/lib/lang'
import ProductCard from '@/components/product/ProductCard'
import styles from './page.module.css'

interface Props {
  product: Product
  related: Product[]
}

export default function ProductDetailClient({ product, related }: Props) {
  const { addItem } = useCart()
  const { lang, t } = useLang()

  const [activeImg, setActiveImg] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [added, setAdded] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const name = product.name[lang]

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name,
      price: product.price,
      image: product.images[0],
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const openLightbox = (idx: number) => {
    setActiveImg(idx)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const lbNav = (dir: number) => {
    setActiveImg((prev) => (prev + dir + product.images.length) % product.images.length)
  }

  const toggleAccordion = (key: string) => {
    setOpenAccordion((prev) => (prev === key ? null : key))
  }

  const ACCORDION_ITEMS = [
    {
      key: 'shipping',
      labelEs: 'Envíos y devoluciones',
      labelEn: 'Shipping & returns',
      contentEs:
        'Envío a toda España en 3-5 días laborables. Packaging artesanal de lujo incluido. Para devoluciones o cambios contacta con nosotros en info@nacaram.com en un plazo de 14 días desde la recepción.',
      contentEn:
        'Shipping across Spain in 3-5 business days. Luxury handmade packaging included. For returns or exchanges, contact us at info@nacaram.com within 14 days of receipt.',
    },
    {
      key: 'handmade',
      labelEs: 'Sobre la pieza artesanal',
      labelEn: 'About the handmade piece',
      contentEs:
        'Cada NacaRam es tejida a mano en Tenerife. El proceso dura entre 40 y 80 horas según la pieza. Las pequeñas variaciones entre perlas no son defectos — son la huella de que alguien la hizo para ti.',
      contentEn:
        'Every NacaRam is hand-woven in Tenerife. The process takes between 40 and 80 hours depending on the piece. Small variations between pearls are not defects — they are the mark that someone made it for you.',
    },
  ]

  const TRUST_ITEMS = [
    {
      icon: '🤍',
      titleEs: 'Hecho a mano',
      titleEn: 'Handmade',
      subEs: 'Pieza única, tejida perla a perla',
      subEn: 'Unique piece, woven bead by bead',
    },
    {
      icon: '📦',
      titleEs: 'Envío a España',
      titleEn: 'Spain shipping',
      subEs: 'Packaging de lujo incluido',
      subEn: 'Luxury packaging included',
    },
    {
      icon: '✉️',
      titleEs: 'Personalizable',
      titleEn: 'Customisable',
      subEs: 'Escríbenos a info@nacaram.com',
      subEn: 'Write to info@nacaram.com',
    },
    {
      icon: '🔒',
      titleEs: 'Pago seguro',
      titleEn: 'Secure payment',
      subEs: 'Procesado por Stripe',
      subEn: 'Processed by Stripe',
    },
  ]

  return (
    <>
      <nav className={styles.breadcrumb}>
        <Link href="/">{t('Inicio', 'Home')}</Link>
        <span>›</span>
        <Link href="/coleccion/bolsos">{t('Bolsos', 'Bags')}</Link>
        <span>›</span>
        <span>{name}</span>
      </nav>

      <div className={styles.product}>
        <div className={styles.gallery}>
          <div className={styles.mainImage} onClick={() => openLightbox(activeImg)}>
            <Image
              src={product.images[activeImg]}
              alt={name}
              fill
              priority
              sizes="(max-width: 680px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />

            <button
              type="button"
              className={styles.zoomBtn}
              aria-label={t('Ampliar imagen', 'Zoom image')}
              title={t('Ampliar imagen', 'Zoom image')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
              </svg>
            </button>
          </div>

          <div className={styles.thumbs}>
            {product.images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ''}`}
                onClick={() => setActiveImg(i)}
                aria-label={`${t('Ver imagen', 'View image')} ${i + 1} ${t('de', 'of')} ${product.images.length}`}
                title={`${t('Ver imagen', 'View image')} ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${name} ${i + 1}`}
                  fill
                  sizes="15vw"
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.category}>
            {t('Bolso artesanal · Hecho a mano', 'Handmade bag · Canarian craftsmanship')}
          </p>

          <h1 className={styles.name}>{name}</h1>
          <p className={styles.tagline}>{product.tagline[lang]}</p>
          <p className={styles.price}>€{product.price}</p>

          <div className={styles.divider} />

          <p className={styles.descLabel}>{t('Descripción', 'Description')}</p>
          <p className={styles.desc}>{product.description[lang]}</p>

          <div className={styles.divider} />

          <p className={styles.descLabel}>{t('Detalles', 'Details')}</p>

          <div className={styles.specs}>
            <div className={styles.spec}>
              <span className={styles.specLabel}>{t('Material', 'Material')}</span>
              <span className={styles.specVal}>{product.material[lang]}</span>
            </div>

            <div className={styles.spec}>
              <span className={styles.specLabel}>{t('Dimensiones', 'Dimensions')}</span>
              <span className={styles.specVal}>{product.dimensions}</span>
            </div>

            <div className={styles.spec}>
              <span className={styles.specLabel}>{t('Hecho en', 'Made in')}</span>
              <span className={styles.specVal}>{product.madeIn[lang]}</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.care}>
            <p className={styles.careTitle}>{t('Cuidados', 'Care guide')}</p>
            <p className={styles.careText}>
              {t(
                'Guardar en la bolsa de tela incluida, alejado de la humedad y el calor directo. Limpiar con paño suave y seco. No sumergir en agua.',
                'Store in the included fabric pouch, away from humidity and direct heat. Clean with a soft, dry cloth. Do not submerge in water.'
              )}
            </p>
          </div>

          <button
            type="button"
            className={`btn btn-dark btn-full ${styles.addBtn} ${added ? styles.addBtnAdded : ''}`}
            onClick={handleAddToCart}
          >
            {added
              ? t('✓ Añadido al carrito', '✓ Added to cart')
              : t('Añadir al carrito', 'Add to cart')}
          </button>

          <button
            type="button"
            className={`btn btn-outline btn-full ${styles.wishlistBtn}`}
          >
            {t('Guardar en favoritos', 'Save to wishlist')}
          </button>

          <div className="trust-grid">
            {TRUST_ITEMS.map((item) => (
              <div key={item.titleEs} className="trust-item">
                <span className="trust-icon">{item.icon}</span>
                <div>
                  <p className="trust-title">{t(item.titleEs, item.titleEn)}</p>
                  <p className="trust-subtitle">{t(item.subEs, item.subEn)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="accordion">
            {ACCORDION_ITEMS.map((item) => (
              <div
                key={item.key}
                className={`accordion-item ${openAccordion === item.key ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="accordion-btn"
                  onClick={() => toggleAccordion(item.key)}
                >
                  <span>{t(item.labelEs, item.labelEn)}</span>
                  <span className="accordion-arrow">+</span>
                </button>

                <div className="accordion-content">
                  <div className="accordion-inner">
                    {t(item.contentEs, item.contentEn)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className={`section ${styles.related}`}>
          <p className="eyebrow">{t('También te puede gustar', 'You may also like')}</p>

          <h2 className={`title-lg ${styles.relatedTitle}`}>
            {t('Otras piezas', 'Other pieces')}
          </h2>

          <div className={styles.relatedGrid}>
            {related.map((p) => (
              <ProductCard key={p.id} product={p} lang={lang} />
            ))}
          </div>
        </div>
      )}

      <div
        className={`lightbox ${lightboxOpen ? 'open' : ''}`}
        onClick={(e) => e.target === e.currentTarget && closeLightbox()}
      >
        {lightboxOpen && (
          <Image
            className="lightbox-img"
            src={product.images[activeImg]}
            alt={name}
            width={800}
            height={800}
            style={{ objectFit: 'contain' }}
          />
        )}

        <button
          type="button"
          className="lightbox-close"
          onClick={closeLightbox}
          aria-label={t('Cerrar imagen', 'Close image')}
          title={t('Cerrar imagen', 'Close image')}
        >
          ✕
        </button>

        <button
          type="button"
          className="lightbox-prev"
          onClick={() => lbNav(-1)}
          aria-label={t('Imagen anterior', 'Previous image')}
          title={t('Imagen anterior', 'Previous image')}
        >
          ‹
        </button>

        <button
          type="button"
          className="lightbox-next"
          onClick={() => lbNav(1)}
          aria-label={t('Imagen siguiente', 'Next image')}
          title={t('Imagen siguiente', 'Next image')}
        >
          ›
        </button>
      </div>
    </>
  )
}