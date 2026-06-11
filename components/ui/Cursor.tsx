'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      setVisible(true)
      dot.style.transform = `translate(${mx}px,${my}px)`
    }

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.transform = `translate(${rx}px,${ry}px)`
      requestAnimationFrame(tick)
    }

    document.querySelectorAll('a,button,.product-card,.category-banner').forEach(el => {
      el.addEventListener('mouseenter', () => setIsHover(true))
      el.addEventListener('mouseleave', () => setIsHover(false))
    })

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', () => setVisible(false))
    document.addEventListener('mouseenter', () => setVisible(true))
    tick()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dotRef} className={`${styles.dot} ${isHover ? styles.dotHover : ''} ${visible ? styles.visible : ''}`} />
      <div ref={ringRef} className={`${styles.ring} ${isHover ? styles.ringHover : ''} ${visible ? styles.visible : ''}`} />
    </>
  )
}
