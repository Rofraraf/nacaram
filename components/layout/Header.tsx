'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useCart } from '@/lib/cart'
import { useLang } from '@/lib/lang'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '/coleccion/bolsos',       es: 'Bolsos',          en: 'Bags'        },
  { href: '/coleccion/bisuteria',    es: 'Bisutería',       en: 'Jewellery'   },
  { href: '/coleccion/complementos', es: 'Complementos',    en: 'Accessories' },
  { href: '/novedades',              es: 'Novedades',       en: 'New in'      },
  { href: '/historia',               es: 'Nuestra historia',en: 'Our story'   },
]

const MENU_SECTIONS = [
  {
    category: { es: 'Bolsos', en: 'Bags' },
    links: [
      { href: '/coleccion/bolsos-novia',  es: 'Bolsos de Novia',      en: 'Bridal Bags'    },
      { href: '/coleccion/bolsos-fiesta', es: 'Bolsos de Fiesta',     en: 'Evening Bags'   },
      { href: '/coleccion/bolsos-tote',   es: 'Bolsos Tote',          en: 'Tote Bags'      },
      { href: '/coleccion/edicion-arte',  es: 'Edición Arte',         en: 'Art Edition'    },
      { href: '/contacto',                es: 'Pedido personalizado',  en: 'Custom order'   },
    ],
  },
  {
    category: { es: 'Bisutería', en: 'Jewellery' },
    links: [
      { href: '/coleccion/collares', es: 'Collares de perlas',   en: 'Pearl necklaces'    },
      { href: '/coleccion/cuellos',  es: 'Cuellos artesanales',  en: 'Handmade collars'   },
    ],
  },
  {
    category: { es: 'Complementos', en: 'Accessories' },
    links: [
      { href: '/coleccion/llaveros',   es: 'Llaveros',   en: 'Keyrings' },
      { href: '/coleccion/cinturones', es: 'Cinturones', en: 'Belts'    },
    ],
  },
  {
    category: null,
    links: [
      { href: '/novedades',  es: 'Novedades',        en: 'New in'    },
      { href: '/historia',   es: 'Nuestra historia', en: 'Our story' },
      { href: '/contacto',   es: 'Contacto',         en: 'Contact'   },
    ],
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { itemCount } = useCart()
  const { lang, setLang, t } = useLang()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          {/* Burger */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
            aria-label={t('Abrir menú', 'Open menu')}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            NacaRam
          </Link>

          {/* Right: lang + cart */}
          <div className={styles.headerRight}>
            <button
              className={`${styles.langBtn} ${lang === 'es' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <Link href="/carrito" className={styles.cartBtn} aria-label={t('Carrito', 'Cart')}>
              <svg viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className={styles.cartBadge}>{itemCount}</span>
              )}
            </Link>
          </div>
        </div>

        {/* Horizontal nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.navLinkActive : ''}`}
            >
              {t(link.es, link.en)}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile slide menu */}
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuBackdrop} onClick={() => setMenuOpen(false)} />
        <div className={styles.menuPanel}>
          <div className={styles.menuHead}>
            <span className={styles.menuHeadLogo}>NacaRam</span>
            <button className={styles.menuClose} onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          {MENU_SECTIONS.map((section, i) => (
            <div key={i} className={styles.menuSection}>
              {section.category && (
                <p className={styles.menuCategory}>
                  {t(section.category.es, section.category.en)}
                </p>
              )}
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.menuLink}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{t(link.es, link.en)}</span>
                  <span className={styles.menuArrow}>›</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
