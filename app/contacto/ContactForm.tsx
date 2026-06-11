'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  if (sent) return (
    <div className={styles.sent}>
      <p className={styles.sentIcon}>✓</p>
      <p className={styles.sentTitle}>Mensaje enviado</p>
      <p className={styles.sentSub}>Te responderemos en menos de 48 horas.</p>
    </div>
  )
  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <div className={styles.field}><label className={styles.label}>Nombre</label><input className={styles.input} type="text" placeholder="Tu nombre" required /></div>
      <div className={styles.field}><label className={styles.label}>Email</label><input className={styles.input} type="email" placeholder="tu@email.com" required /></div>
      <div className={styles.field}>
        <label className={styles.label}>Asunto</label>
        <select className={styles.input} required>
          <option value="">Selecciona...</option>
          <option>Pedido personalizado</option>
          <option>Consulta sobre un producto</option>
          <option>Información general</option>
          <option>Colaboración</option>
        </select>
      </div>
      <div className={styles.field}><label className={styles.label}>Mensaje</label><textarea className={`${styles.input} ${styles.textarea}`} placeholder="Cuéntanos qué necesitas..." rows={5} required /></div>
      <button type="submit" className="btn btn-dark btn-full">Enviar mensaje</button>
    </form>
  )
}
