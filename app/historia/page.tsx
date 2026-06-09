import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Nuestra Historia — NacaRam',
  description: 'La historia de NacaRam. Artesanía canaria nacida en Tenerife.',
}

export default function HistoriaPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className="eyebrow">Sobre NacaRam</p>
        <h1 className={`title-xl ${styles.title}`}>Hecho despacio.<br />Elegido para siempre.</h1>
        <p className={styles.titleEn}>Made slowly. Chosen forever.</p>
        <div className={styles.body}>
          <p className={styles.lead}>Cada bolso NacaRam nace de la quietud. De horas de silencio, manos en movimiento y la certeza de que algo hecho bien tarda lo que tiene que tardar.</p>
          <p>NacaRam es artesanía canaria. Cada pieza está tejida a mano en Tenerife, perla a perla, con materiales seleccionados y una atención al detalle que no admite prisa.</p>
          <p>No hay dos bolsos iguales. Cada uno lleva consigo las pequeñas variaciones propias de lo hecho a mano — esas imperfecciones que no son defectos, sino la huella de que alguien lo creó para ti.</p>
          <blockquote className={styles.quote}>&quot;La perfección no se fabrica. Se teje, una perla a la vez.&quot;</blockquote>
          <p className={styles.quoteEn}>&quot;Perfection is not made. It is woven, one bead at a time.&quot;</p>
        </div>
        <div className={styles.values}>
          {[
            { n: '01', title: 'Hecho a mano', desc: 'Cada pieza tejida perla a perla en Tenerife. Sin máquinas, sin prisa.' },
            { n: '02', title: 'Única e irrepetible', desc: 'No hay dos bolsos iguales. El tuyo es solo tuyo.' },
            { n: '03', title: 'Origen canario', desc: 'Del Atlántico a tus manos. Artesanía de las islas.' },
            { n: '04', title: 'Slow fashion', desc: 'Una pieza, mil horas. Hecha para durar para siempre.' },
          ].map(v => (
            <div key={v.n} className={styles.value}>
              <span className={styles.valueN}>{v.n}</span>
              <p className={styles.valueTitle}>{v.title}</p>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.contact}>
          <p className={styles.contactText}>¿Tienes alguna pregunta o quieres encargar una pieza personalizada?</p>
          <a href="mailto:info@nacaram.com" className="btn btn-dark">Escríbenos</a>
        </div>
      </div>
    </div>
  )
}
