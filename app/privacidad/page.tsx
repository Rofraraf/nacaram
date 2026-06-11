import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Política de Privacidad — NacaRam' }

export default function PrivacidadPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px 80px' }}>
      <p className="eyebrow">Legal</p>
      <h1 className="title-lg" style={{ marginBottom: '32px' }}>Política de Privacidad</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', fontWeight: '300', color: 'var(--gray)', lineHeight: '1.85' }}>
        <p><strong style={{ color: 'var(--ink)' }}>Responsable del tratamiento:</strong> NacaRam · info@nacaram.com · Tenerife, Islas Canarias</p>
        <p><strong style={{ color: 'var(--ink)' }}>Finalidad:</strong> Gestión de pedidos, envío de información sobre productos y atención al cliente.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Legitimación:</strong> Ejecución de contrato y consentimiento del interesado.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal. Los pagos se procesan a través de Stripe, Inc., con sus propias políticas de privacidad.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad escribiendo a info@nacaram.com.</p>
        <p><strong style={{ color: 'var(--ink)' }}>Cookies:</strong> Esta web utiliza cookies técnicas necesarias para su funcionamiento. No se utilizan cookies publicitarias.</p>
      </div>
    </div>
  )
}
