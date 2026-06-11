import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Términos y Condiciones — NacaRam' }

export default function TerminosPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px 80px' }}>
      <p className="eyebrow">Legal</p>
      <h1 className="title-lg" style={{ marginBottom: '32px' }}>Términos y Condiciones</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', fontWeight: '300', color: 'var(--gray)', lineHeight: '1.85' }}>
        <p><strong style={{ color: 'var(--ink)' }}>Titular:</strong> NacaRam · info@nacaram.com · Tenerife, Islas Canarias</p>
        <p><strong style={{ color: 'var(--ink)' }}>Productos:</strong> Todos los productos NacaRam son artesanales y únicos. Las pequeñas variaciones respecto a las fotos son inherentes al proceso artesanal y no constituyen defecto.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Pedidos:</strong> El contrato se perfecciona con la confirmación del pedido por email. NacaRam se reserva el derecho a cancelar pedidos en caso de error de precio o falta de stock.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Envíos:</strong> Envío a toda España en 3-5 días laborables. Los gastos de envío se indicarán en el proceso de compra.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Devoluciones:</strong> Derecho de desistimiento de 14 días desde la recepción. El producto debe devolverse en perfecto estado. Contacta en info@nacaram.com.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Pagos:</strong> Procesados de forma segura mediante Stripe. NacaRam no almacena datos de tarjeta.</p>
      </div>
    </div>
  )
}
