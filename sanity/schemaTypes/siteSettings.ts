import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '⚙️ Ajustes globales',
  type: 'document',
  fields: [
    // ── TICKER ──
    defineField({
      name: 'tickerItems',
      title: 'Ticker (barra negra superior)',
      description: 'Frases que se desplazan en la barra negra de arriba. Añade o elimina las que quieras.',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'HECHO A MANO EN TENERIFE',
        'PIEZAS ÚNICAS',
        'ARTESANÍA CANARIA',
        'NACARAM.COM',
        'HANDMADE IN TENERIFE',
        'UNIQUE PIECES',
        'CANARIAN CRAFTSMANSHIP',
      ],
    }),

    // ── CONTACT ──
    defineField({
      name: 'email',
      title: 'Email de contacto',
      type: 'string',
      initialValue: 'info@nacaram.com',
    }),
    defineField({
      name: 'instagram',
      title: 'Usuario de Instagram',
      type: 'string',
      initialValue: 'nacaramia',
      description: 'Sin @. Solo el nombre de usuario.',
    }),
    defineField({
      name: 'tiktok',
      title: 'Usuario de TikTok',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp (opcional)',
      type: 'string',
      description: 'Número con prefijo internacional. Ej: +34612345678',
    }),

    // ── FOOTER ──
    defineField({
      name: 'footerTagline',
      title: 'Tagline del footer',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Hecho despacio. Elegido para siempre.' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Made slowly. Chosen forever.' },
      ],
    }),
    defineField({
      name: 'footerOrigin',
      title: 'Texto de origen en footer',
      type: 'string',
      initialValue: 'Tenerife · Islas Canarias · nacaram.com',
    }),

    // ── SHIPPING NOTICE ──
    defineField({
      name: 'shippingNotice',
      title: 'Aviso de envío',
      description: 'Texto que aparece en el ticker o en la ficha de producto. Ej: Envío gratuito en pedidos +150€',
      type: 'string',
    }),

    // ── ANNOUNCEMENT ──
    defineField({
      name: 'announcement',
      title: 'Anuncio activo',
      description: 'Mensaje especial para mostrar (rebajas, lanzamiento, etc.). Déjalo vacío para no mostrar nada.',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Ajustes globales del sitio' }
    },
  },
})
