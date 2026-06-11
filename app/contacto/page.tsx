
import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contacto — NacaRam',
  description: 'Contacta con NacaRam para pedidos personalizados, consultas o información sobre nuestras piezas artesanales.',
}

export default function ContactoPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className="eyebrow">Contacto</p>
        <h1 className={`title-lg ${styles.title}`}>Hablemos</h1>
        <p className="subtitle" style={{ marginBottom: '48px' }}>
          Let&apos;s talk · Para pedidos, consultas y colaboraciones
        </p>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>Email</p>
              <a href="mailto:info@nacaram.com" className={styles.infoVal}>info@nacaram.com</a>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>Instagram</p>
              <a href="https://instagram.com/nacaramia" target="_blank" rel="noopener" className={styles.infoVal}>@nacaramia</a>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>Ubicación</p>
              <p className={styles.infoVal}>Tenerife, Islas Canarias</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Pedidos personalizados</p>
              <p className={styles.infoText}>Si quieres una pieza con colores o dimensiones específicas, escríbenos. Cada NacaRam se hace a mano — podemos adaptarla para ti.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
