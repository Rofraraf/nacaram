import Link from 'next/link'
import styles from './Footer.module.css'

interface FooterProps {
  taglineEs?: string
  taglineEn?: string
  origin?: string
  instagram?: string
  email?: string
}

export default function Footer({
  taglineEs = 'Hecho despacio. Elegido para siempre.',
  taglineEn = 'Made slowly. Chosen forever.',
  origin = 'Tenerife · Islas Canarias · nacaram.com',
  instagram = 'nacaramia',
  email = 'info@nacaram.com',
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>NacaRam</Link>
          <p className={styles.taglineEs}>&quot;{taglineEs}&quot;</p>
          <p className={styles.taglineEn}>&quot;{taglineEn}&quot;</p>
          <p className={styles.origin}>{origin}</p>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Tienda / Shop</p>
          <ul className={styles.links}>
            <li><Link href="/coleccion/bolsos-novia">Bolsos de Novia</Link></li>
            <li><Link href="/coleccion/bolsos-fiesta">Bolsos de Fiesta</Link></li>
            <li><Link href="/coleccion/edicion-arte">Edición Arte</Link></li>
            <li><Link href="/novedades">Novedades</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Info</p>
          <ul className={styles.links}>
            <li><Link href="/historia">Nuestra historia</Link></li>
            <li><Link href="/envios">Envíos y devoluciones</Link></li>
            <li><Link href="/contacto">Pedidos personalizados</Link></li>
            <li><a href={`mailto:${email}`}>{email}</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Social</p>
          <ul className={styles.links}>
            <li><a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener">@{instagram}</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Legal</p>
          <ul className={styles.links}>
            <li><Link href="/privacidad">Privacidad</Link></li>
            <li><Link href="/terminos">Términos</Link></li>
            <li><Link href="/envios">Envíos</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} NacaRam · Artesanía Canaria · nacaram.com</p>
        <div className={styles.legal}>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/terminos">Términos</Link>
        </div>
      </div>
    </footer>
  )
}
