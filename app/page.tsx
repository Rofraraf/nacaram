import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProducts, CATEGORIES } from '@/data/products'
import { getFeaturedSanityProducts } from '@/sanity/lib/products'
import ProductCard from '@/components/product/ProductCard'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'NacaRam — Artesanía Canaria · Bolsos Hechos a Mano',
  openGraph: {
    title: 'NacaRam — Artesanía Canaria',
    description: 'Bolsos y complementos artesanales hechos a mano en Tenerife.',
  },
}

// This page is server-rendered for SEO
// Language switching is handled client-side via CSS data-lang attribute
export default async function HomePage() {
  const sanityFeatured = await getFeaturedSanityProducts().catch(() => [])
  const featured = sanityFeatured.length > 0 ? sanityFeatured : getFeaturedProducts()
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Image
          src="/img/hero.jpg"
          alt="NacaRam — Artesanía Canaria"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={`eyebrow ${styles.heroKicker}`}>
            <span className="lang-es">Nueva colección · Artesanía canaria</span>
            <span className="lang-en">New collection · Canarian craftsmanship</span>
          </p>
          <h1 className={styles.heroTitle}>
            <span className="lang-es">Hecho despacio.<br />Elegido para siempre.</span>
            <span className="lang-en">Made slowly.<br />Chosen forever.</span>
          </h1>
          <p className={styles.heroSub}>
            <span className="lang-es">Made slowly. Chosen forever.</span>
            <span className="lang-en">Hecho despacio. Elegido para siempre.</span>
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
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex' }}>
              {['Hecho a mano', 'Handmade', 'Artesanía canaria', 'Canarian craftsmanship',
                'Tenerife · Islas Canarias', 'Cada perla es única', 'Every bead is unique',
                'Slow fashion · de verdad'].map((text) => (
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
        <p className="eyebrow">
          <span className="lang-es">Explorar</span>
          <span className="lang-en">Explore</span>
        </p>
        <h2 className={`title-lg ${styles.sectionTitle}`}>
          <span className="lang-es">Nuestras colecciones</span>
          <span className="lang-en">Our collections</span>
        </h2>
        <p className={`subtitle ${styles.sectionSub}`}>
          <span className="lang-es">Our collections · Elige tu estilo</span>
          <span className="lang-en">Nuestras colecciones · Choose your style</span>
        </p>
        <div className={`${styles.categories} reveal-stagger`}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/coleccion/${cat.slug}`}
              className={`category-banner ${styles.categoryBanner}`}
            >
              <Image
                src={cat.image}
                alt={cat.name.es}
                fill
                sizes="(max-width: 680px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
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
          <span className="lang-es">Artesanía canaria · Slow fashion · Hecho a mano</span>
          <span className="lang-en">Canarian craftsmanship · Slow fashion · Handmade</span>
        </p>
        <h2 className={`title-xl ${styles.editorialTitle}`}>
          <span className="lang-es">Perfección que no se fabrica.</span>
          <span className="lang-en">Perfection that cannot be made.</span>
        </h2>
        <p className={`subtitle ${styles.editorialQuote}`}>
          <span className="lang-es">&quot;La perfección no se fabrica. Se teje, una perla a la vez.&quot;</span>
          <span className="lang-en">&quot;Perfection is not made. It is woven, one bead at a time.&quot;</span>
        </p>
        <p className={styles.editorialQuoteEn}>
          <span className="lang-es">&quot;Perfection is not made. It is woven, one bead at a time.&quot;</span>
          <span className="lang-en">&quot;La perfección no se fabrica. Se teje, una perla a la vez.&quot;</span>
        </p>
        <Link href="/historia" className="btn btn-outline">
          <span className="lang-es">Nuestra historia</span>
          <span className="lang-en">Our story</span>
        </Link>
      </div>

      <div className="divider" />

      {/* ── PRODUCTS ── */}
      <div className="section">
        <p className="eyebrow">
          <span className="lang-es">Todas las piezas</span>
          <span className="lang-en">All pieces</span>
        </p>
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

      {/* ── VALUES ── */}
      <div className={styles.valuesWrap}>
        <div className="values-grid reveal-stagger">
          {[
            { n: '01', es: 'Hecho a mano', en: 'Handmade', subEs: 'Handmade · with love', subEn: 'Hecho a mano · con amor', descEs: 'Cada pieza tejida perla a perla. Sin máquinas, sin prisa.', descEn: 'Every piece woven bead by bead. No machines, no rush.' },
            { n: '02', es: 'Única e irrepetible', en: 'Unique', subEs: 'Unique & irreplaceable', subEn: 'Única e irrepetible', descEs: 'No hay dos bolsos iguales. El tuyo es solo tuyo.', descEn: 'No two bags are alike. Yours alone.' },
            { n: '03', es: 'Origen canario', en: 'Canarian origin', subEs: 'Canarian origin · Atlantic soul', subEn: 'Origen canario · Alma atlántica', descEs: 'Del Atlántico a tus manos. Artesanía de las islas.', descEn: 'From the Atlantic to your hands.' },
            { n: '04', es: 'Slow fashion', en: 'Slow fashion', subEs: 'Slow fashion · for real', subEn: 'Slow fashion · de verdad', descEs: 'Una pieza, mil horas. Hecha para durar para siempre.', descEn: 'One piece, a thousand hours. Made to last.' },
          ].map((v) => (
            <div key={v.n} className="value-item">
              <p className="value-number">{v.n}</p>
              <p className="value-title">
                <span className="lang-es">{v.es}</span>
                <span className="lang-en">{v.en}</span>
              </p>
              <p className="value-subtitle">
                <span className="lang-es">{v.subEs}</span>
                <span className="lang-en">{v.subEn}</span>
              </p>
              <p className="value-desc">
                <span className="lang-es">{v.descEs}</span>
                <span className="lang-en">{v.descEn}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── INSTAGRAM ── */}
      <div className="instagram-section">
        <p className="eyebrow">Instagram</p>
        <h3 className={`title-md ${styles.igTitle}`}>
          <span className="lang-es">Síguenos en Instagram · @nacaramia</span>
          <span className="lang-en">Follow us on Instagram · @nacaramia</span>
        </h3>
        <div className="instagram-grid">
          {[
            '/img/instagram/ig-1.jpg',
            '/img/instagram/ig-2.jpg',
            '/img/instagram/ig-3.jpg',
            '/img/instagram/ig-4.jpg',
            '/img/instagram/ig-5.jpg',
            '/img/instagram/ig-6.jpg',
          ].map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/nacaramia"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-cell"
            >
              <Image
                src={src}
                alt={`NacaRam Instagram ${i + 1}`}
                fill
                sizes="(max-width: 680px) 33vw, 16vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="instagram-cell-overlay" />
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px', color: 'var(--gray)' }}>
          @nacaramia
        </p>
      </div>
    </>
  )
}
