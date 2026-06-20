
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProducts, CATEGORIES } from '@/data/products'
import { getFeaturedSanityProducts } from '@/sanity/lib/products'
import { getHomeData, getCategories, getSiteSettings } from '@/sanity/lib/queries'
import ProductCard from '@/components/product/ProductCard'
import NewsletterForm from '@/components/ui/NewsletterForm'
import styles from './page.module.css'
import RefreshOnFocus from '@/components/ui/RefreshOnFocus'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'NacaRam — Artesanía Canaria · Bolsos Hechos a Mano',
  openGraph: {
    title: 'NacaRam — Artesanía Canaria',
    description: 'Bolsos y complementos artesanales hechos a mano en Tenerife.',
  },
}

// Default values if Sanity returns nothing
const DEFAULT_VALUES = [
  { number: '01', title: { es: 'Hecho a mano', en: 'Handmade' }, subtitle: { es: 'Handmade · with love', en: 'Hecho a mano · con amor' }, description: { es: 'Cada pieza tejida perla a perla. Sin máquinas, sin prisa.', en: 'Every piece woven bead by bead. No machines, no rush.' } },
  { number: '02', title: { es: 'Única e irrepetible', en: 'Unique' }, subtitle: { es: 'Unique & irreplaceable', en: 'Única e irrepetible' }, description: { es: 'No hay dos bolsos iguales. El tuyo es solo tuyo.', en: 'No two bags are alike. Yours alone.' } },
  { number: '03', title: { es: 'Origen canario', en: 'Canarian origin' }, subtitle: { es: 'Canarian origin · Atlantic soul', en: 'Origen canario · Alma atlántica' }, description: { es: 'Del Atlántico a tus manos. Artesanía de las islas.', en: 'From the Atlantic to your hands.' } },
  { number: '04', title: { es: 'Slow fashion', en: 'Slow fashion' }, subtitle: { es: 'Slow fashion · for real', en: 'Slow fashion · de verdad' }, description: { es: 'Una pieza, mil horas. Hecha para durar para siempre.', en: 'One piece, a thousand hours. Made to last.' } },
]

export default async function HomePage() {
  const [sanityFeatured, homeData, sanityCategories, settings] = await Promise.all([
    getFeaturedSanityProducts().catch(() => []),
    getHomeData().catch(() => null),
    getCategories().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  const featured = sanityFeatured.length > 0 ? sanityFeatured : getFeaturedProducts()
  const heroImage = homeData?.heroImageUrl ?? '/img/hero.jpg'
  const categories = sanityCategories.length > 0
    ? sanityCategories
    : CATEGORIES.map(c => ({ slug: c.slug, name: c.name, kicker: c.kicker, imageUrl: c.image }))
  const values = homeData?.values?.length ? homeData.values : DEFAULT_VALUES
  const tickerItems = settings?.tickerItems?.length
    ? settings.tickerItems
    : ['HECHO A MANO EN TENERIFE', 'PIEZAS ÚNICAS', 'ARTESANÍA CANARIA', 'NACARAM.COM', 'HANDMADE IN TENERIFE', 'UNIQUE PIECES', 'CANARIAN CRAFTSMANSHIP']

  // Instagram images — Sanity first, fallback to local
  const igImages = homeData?.instagramImages?.length
    ? homeData.instagramImages
    : ['/img/instagram/ig-1.jpg', '/img/instagram/ig-2.jpg', '/img/instagram/ig-3.jpg', '/img/instagram/ig-4.jpg', '/img/instagram/ig-5.jpg', '/img/instagram/ig-6.jpg']

  const instagram = settings?.instagram ?? 'nacaramia'

  return (
    <>
    <RefreshOnFocus />
      {/* ── ANNOUNCEMENT BANNER ── */}
      {settings?.announcement && (
        <div style={{ background: 'var(--g)', color: 'var(--ink)', textAlign: 'center', padding: '10px 20px', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '300' }}>
          {settings.announcement}
        </div>
      )}

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Image
          src={heroImage}
          alt="NacaRam — Artesanía Canaria"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
          unoptimized={heroImage.startsWith('https://')}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={`eyebrow ${styles.heroKicker}`}>
            <span className="lang-es">{homeData?.heroKicker?.es ?? 'Nueva colección · Artesanía canaria'}</span>
            <span className="lang-en">{homeData?.heroKicker?.en ?? 'New collection · Canarian craftsmanship'}</span>
          </p>
          <h1 className={styles.heroTitle}>
            <span className="lang-es">{homeData?.heroTitle?.es ?? 'Hecho despacio. Elegido para siempre.'}</span>
            <span className="lang-en">{homeData?.heroTitle?.en ?? 'Made slowly. Chosen forever.'}</span>
          </h1>
          <p className={styles.heroSub}>
            <span className="lang-es">{homeData?.heroSubtitle?.es ?? 'Made slowly. Chosen forever.'}</span>
            <span className="lang-en">{homeData?.heroSubtitle?.en ?? 'Hecho despacio. Elegido para siempre.'}</span>
          </p>
          <div className={styles.heroBtns}>
            <Link href="#shop" className="btn btn-dark">
              <span className="lang-es">Ver colección</span>
              <span className="lang-en">View collection</span>
            </Link>
            <Link href="/novedades" className="btn btn-outline">
              <span className="lang-es">Novedades</span>
              <span className="lang-en">New in</span>
            </Link>
          </div>
        </div>
      </section>



      {/* ── MARQUEE ── */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} style={{ display: 'flex' }}>
              {['Hecho a mano', 'Handmade', 'Artesanía canaria', 'Canarian craftsmanship', 'Tenerife · Islas Canarias', 'Cada perla es única', 'Every bead is unique', 'Slow fashion · de verdad'].map((text) => (
                <div key={text} className="marquee-item">
                  <span>{text}</span>
                  <div className="marquee-dot" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ── */}
      <div className="section reveal" id="shop">
        <p className="eyebrow"><span className="lang-es">Explorar</span><span className="lang-en">Explore</span></p>
        <h2 className={`title-lg ${styles.sectionTitle}`}>
          <span className="lang-es">Nuestras colecciones</span>
          <span className="lang-en">Our collections</span>
        </h2>
        <p className={`subtitle ${styles.sectionSub}`}>
          <span className="lang-es">Our collections · Elige tu estilo</span>
          <span className="lang-en">Nuestras colecciones · Choose your style</span>
        </p>
        <div className={`${styles.categories} reveal-stagger`}>
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/coleccion/${cat.slug}`} className={`category-banner ${styles.categoryBanner}`}>
              <Image
                src={cat.imageUrl} alt={cat.name.es} fill
                sizes="(max-width: 680px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                unoptimized={cat.imageUrl.startsWith('https://')}
              />
              <div className="category-banner-overlay" />
              <div className="category-banner-content">
                <p className="category-banner-kicker">
                  <span className="lang-es">{cat.kicker.es}</span>
                  <span className="lang-en">{cat.kicker.en}</span>
                </p>
                <p className="category-banner-name">
                  <span className="lang-es">{cat.name.es}</span>
                  <span className="lang-en">{cat.name.en}</span>
                </p>
                <span className="category-banner-cta">
                  <span className="lang-es">Explorar</span>
                  <span className="lang-en">Explore</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ── EDITORIAL ── */}
      <div className="editorial reveal">
        <p className="eyebrow">
          <span className="lang-es">{homeData?.editorialKicker?.es ?? 'Artesanía canaria · Slow fashion · Hecho a mano'}</span>
          <span className="lang-en">{homeData?.editorialKicker?.en ?? 'Canarian craftsmanship · Slow fashion · Handmade'}</span>
        </p>
        <h2 className={`title-xl ${styles.editorialTitle}`}>
          <span className="lang-es">{homeData?.editorialTitle?.es ?? 'Perfección que no se fabrica.'}</span>
          <span className="lang-en">{homeData?.editorialTitle?.en ?? 'Perfection that cannot be made.'}</span>
        </h2>
        <p className={`subtitle ${styles.editorialQuote}`}>
          <span className="lang-es">{homeData?.editorialQuote?.es ?? '"La perfección no se fabrica. Se teje, una perla a la vez."'}</span>
          <span className="lang-en">{homeData?.editorialQuote?.en ?? '"Perfection is not made. It is woven, one bead at a time."'}</span>
        </p>
        <Link href="/historia" className="btn btn-outline">
          <span className="lang-es">Nuestra historia</span>
          <span className="lang-en">Our story</span>
        </Link>
      </div>

      <div className="divider" />

      {/* ── PRODUCTS ── */}
      <div className="section">
        <p className="eyebrow"><span className="lang-es">Todas las piezas</span><span className="lang-en">All pieces</span></p>
        <h2 className={`title-lg ${styles.sectionTitle}`}>
          <span className="lang-es">Disponibles ahora</span>
          <span className="lang-en">Available now</span>
        </h2>
        <p className={`subtitle ${styles.sectionSub}`}>
          <span className="lang-es">Piezas únicas hechas a mano · Available now</span>
          <span className="lang-en">Unique handmade pieces · Disponibles ahora</span>
        </p>
        <div className={`${styles.productsGrid} reveal-stagger`}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} lang="es" />
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ── VALUES — from Sanity ── */}
      <div className={styles.valuesWrap}>
        <div className="values-grid reveal-stagger">
          {values.map((v) => (
            <div key={v.number} className="value-item">
              <p className="value-number">{v.number}</p>
              <p className="value-title">
                <span className="lang-es">{v.title?.es}</span>
                <span className="lang-en">{v.title?.en}</span>
              </p>
              <p className="value-subtitle">
                <span className="lang-es">{v.subtitle?.es}</span>
                <span className="lang-en">{v.subtitle?.en}</span>
              </p>
              <p className="value-desc">
                <span className="lang-es">{v.description?.es}</span>
                <span className="lang-en">{v.description?.en}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <NewsletterForm />

      {/* ── INSTAGRAM — images from Sanity ── */}
      <div className="instagram-section">
        <p className="eyebrow">Instagram</p>
        <h3 className={`title-md ${styles.igTitle}`}>
          <span className="lang-es">{homeData?.instagramTitle?.es ?? `Síguenos en Instagram · @${instagram}`}</span>
          <span className="lang-en">{homeData?.instagramTitle?.en ?? `Follow us on Instagram · @${instagram}`}</span>
        </h3>
        <div className="instagram-grid">
          {igImages.slice(0, 6).map((src, i) => (
            <a key={i} href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="instagram-cell">
              <Image
                src={src} alt={`NacaRam Instagram ${i + 1}`} fill
                sizes="(max-width: 680px) 33vw, 16vw"
                style={{ objectFit: 'cover' }}
                unoptimized={src.startsWith('https://')}
              />
              <div className="instagram-cell-overlay" />
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px', color: 'var(--gray)' }}>
          @{instagram}
        </p>
      </div>
    </>
  )
}
