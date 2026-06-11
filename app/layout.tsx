import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { LangProvider } from '@/lib/lang'
import { CartProvider } from '@/lib/cart'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getSiteSettings } from '@/sanity/lib/queries'
import './globals.css'

const Preloader = dynamic(() => import('@/components/ui/Preloader'), { ssr: false })
const Cursor = dynamic(() => import('@/components/ui/Cursor'), { ssr: false })
const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'), { ssr: false })

export const metadata: Metadata = {
  metadataBase: new URL('https://nacaram.com'),
  title: {
    default: 'NacaRam — Artesanía Canaria · Bolsos Hechos a Mano',
    template: '%s — NacaRam',
  },
  description: 'Bolsos y complementos artesanales hechos a mano en Tenerife. Cada pieza es única, tejida perla a perla. Artesanía canaria de lujo.',
  keywords: ['bolsos artesanales', 'bolsos de perlas', 'artesanía canaria', 'bolsos hecho a mano', 'bolsos de novia', 'NacaRam', 'Tenerife', 'slow fashion'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_GB',
    siteName: 'NacaRam',
    images: [{ url: '/img/og-default.jpg', width: 1200, height: 630, alt: 'NacaRam — Artesanía Canaria' }],
  },
  twitter: { card: 'summary_large_image', site: '@nacaramia' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings().catch(() => null)

  const tickerItems = settings?.tickerItems?.length
    ? settings.tickerItems
    : ['HECHO A MANO EN TENERIFE', 'PIEZAS ÚNICAS', 'ARTESANÍA CANARIA', 'NACARAM.COM', 'HANDMADE IN TENERIFE', 'UNIQUE PIECES', 'CANARIAN CRAFTSMANSHIP']

  return (
    <html lang="es" data-lang="es">
      <body>
        <LangProvider>
          <CartProvider>
            <Preloader />
            <Cursor />
            <ScrollReveal />
            {/* Ticker — editable from Sanity */}
            <div className="ticker">
              <div className="ticker-track">
                {[0, 1].map((i) => (
                  <div key={i} style={{ display: 'flex' }}>
                    {tickerItems.map((text) => (
                      <div key={text} className="ticker-item">
                        <span>{text}</span>
                        <div className="ticker-dot" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <Header />
            <main>{children}</main>
            <Footer
              taglineEs={settings?.footerTagline?.es}
              taglineEn={settings?.footerTagline?.en}
              origin={settings?.footerOrigin}
              instagram={settings?.instagram}
              email={settings?.email}
            />
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  )
}
