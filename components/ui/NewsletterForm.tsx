'use client'

import { useState } from 'react'
import styles from './NewsletterForm.module.css'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className="eyebrow">
          <span className="lang-es">Newsletter</span>
          <span className="lang-en">Newsletter</span>
        </p>
        <h3 className={styles.title}>
          <span className="lang-es">Sé la primera en saberlo</span>
          <span className="lang-en">Be the first to know</span>
        </h3>
        <p className={styles.sub}>
          <span className="lang-es">Nuevas piezas, lanzamientos y acceso anticipado. Sin spam.</span>
          <span className="lang-en">New pieces, launches and early access. No spam.</span>
        </p>

        {status === 'success' ? (
          <div className={styles.success}>
            <span className="lang-es">✓ Ya estás en la lista. Gracias.</span>
            <span className="lang-en">✓ You&apos;re on the list. Thank you.</span>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`btn btn-dark ${styles.btn}`}
              disabled={status === 'loading'}
            >
              <span className="lang-es">{status === 'loading' ? '...' : 'Suscribirme'}</span>
              <span className="lang-en">{status === 'loading' ? '...' : 'Subscribe'}</span>
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className={styles.error}>
            <span className="lang-es">Algo salió mal. Escríbenos a info@nacaram.com</span>
            <span className="lang-en">Something went wrong. Write to info@nacaram.com</span>
          </p>
        )}
      </div>
    </div>
  )
}
