'use client'
import { useState, useEffect } from 'react'
import styles from './Preloader.module.css'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1200)
    const t2 = setTimeout(() => setVisible(false), 1800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div className={`${styles.preloader} ${fading ? styles.fading : ''}`}>
      <div className={styles.content}>
        <p className={styles.logo}>NacaRam</p>
        <div className={styles.line} />
        <p className={styles.sub}>Artesanía Canaria</p>
      </div>
    </div>
  )
}
