import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <p className="eyebrow">404</p>
      <h1 className="title-lg">Página no encontrada</h1>
      <p className="subtitle" style={{ marginBottom: '16px' }}>
        Page not found · Esta página no existe
      </p>
      <Link href="/" className="btn btn-dark">Volver al inicio</Link>
    </div>
  )
}
