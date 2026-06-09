import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>NacaRam</Link>
          <p className={styles.taglineEs}>&quot;Hecho despacio. Elegido para siempre.&quot;</p>
          <p className={styles.taglineEn}>&quot;Made slowly. Chosen forever.&quot;</p>
          <p className={styles.origin}>Tenerife · Islas Canarias · nacaram.com</p>
        </div>

        {/* Columns */}
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
            <li><a href="mailto:info@nacaram.com">info@nacaram.com</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Social</p>
          <ul className={styles.links}>
            <li><a href="https://instagram.com/nacaramia" target="_blank" rel="noopener">@nacaramia</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Legal</p>
          <ul className={styles.links}>
            <li><Link href="/privacidad">Privacidad</Link></li>
            <li><Link href="/terminos">Términos</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2025 NacaRam · Artesanía Canaria · nacaram.com</p>
        <div className={styles.legal}>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/terminos">Términos</Link>
        </div>
      </div>
    </footer>
  )
}
