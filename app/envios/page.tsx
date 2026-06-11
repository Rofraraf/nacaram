import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Envíos y Devoluciones — NacaRam' }

export default function EnviosPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px 80px' }}>
      <p className="eyebrow">Información</p>
      <h1 className="title-lg" style={{ marginBottom: '32px' }}>Envíos y Devoluciones</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '14px', fontWeight: '300', color: 'var(--gray)', lineHeight: '1.85' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--ink)', marginBottom: '8px' }}>Envíos</p>
          <p>Enviamos a toda España peninsular, Baleares e Islas Canarias. El plazo de entrega es de 3 a 5 días laborables desde la confirmación del pedido.</p>
          <p style={{ marginTop: '8px' }}>Cada pieza se envía en packaging artesanal de NacaRam, perfecta para regalo.</p>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--ink)', marginBottom: '8px' }}>Devoluciones</p>
          <p>Tienes 14 días desde la recepción para devolver tu pedido. El producto debe estar en perfecto estado y con su packaging original.</p>
          <p style={{ marginTop: '8px' }}>Para iniciar una devolución escríbenos a <a href="mailto:info@nacaram.com" style={{ color: 'var(--g)' }}>info@nacaram.com</a> con tu número de pedido.</p>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--ink)', marginBottom: '8px' }}>Pedidos personalizados</p>
          <p>Los pedidos personalizados (colores, dimensiones específicas) no admiten devolución salvo defecto de fabricación, al ser piezas únicas creadas expresamente para ti.</p>
        </div>
      </div>
    </div>
  )
}
