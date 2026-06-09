'use client'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import styles from './page.module.css'

export default function CarritoPage() {
  const { items, total, removeItem } = useCart()
  if (items.length === 0) return (
    <div className={styles.empty}>
      <p className={styles.emptyIcon}>🛍️</p>
      <h1 className={`title-md ${styles.emptyTitle}`}>Tu carrito está vacío</h1>
      <p className="subtitle" style={{ marginBottom: '28px' }}>Your cart is empty · Explora nuestras piezas</p>
      <Link href="/" className="btn btn-dark">Ver colección</Link>
    </div>
  )
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className="eyebrow">Carrito</p>
        <h1 className={`title-lg ${styles.title}`}>{items.length} {items.length === 1 ? 'pieza' : 'piezas'}</h1>
        <div className={styles.grid}>
          <div className={styles.items}>
            {items.map(item => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImg}><img src={item.image} alt={item.name} /></div>
                <div className={styles.itemInfo}><p className={styles.itemName}>{item.name}</p><p className={styles.itemPrice}>€{item.price}</p></div>
                <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>✕</button>
              </div>
            ))}
          </div>
          <div className={styles.summary}>
            <p className={styles.summaryLabel}>Total</p>
            <p className={styles.summaryTotal}>€{total}</p>
            <p className={styles.summaryNote}>Stripe Checkout se activará próximamente. Para comprar ahora escríbenos a <a href="mailto:info@nacaram.com">info@nacaram.com</a></p>
            <button className="btn btn-dark btn-full" style={{ marginTop: '20px' }}>Proceder al pago</button>
            <Link href="/" className="btn btn-outline btn-full" style={{ marginTop: '10px' }}>Seguir comprando</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
