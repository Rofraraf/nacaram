import { defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  title: '🏠 Home (Portada)',
  type: 'document',
  fields: [
    // ── HERO ──
    defineField({
      name: 'heroImage',
      title: 'Foto del Hero',
      type: 'image',
      description: 'Foto principal de la portada. Mínimo 1920×1080px recomendado.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título principal del Hero',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Hecho despacio. Elegido para siempre.' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Made slowly. Chosen forever.' },
      ],
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero (línea pequeña)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Made slowly. Chosen forever.' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Hecho despacio. Elegido para siempre.' },
      ],
    }),
    defineField({
      name: 'heroKicker',
      title: 'Texto pequeño encima del título',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Nueva colección · Artesanía canaria' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'New collection · Canarian craftsmanship' },
      ],
    }),

    // ── FEATURED PRODUCTS ──
    defineField({
      name: 'featuredProducts',
      title: 'Productos destacados',
      description: 'Selecciona qué productos aparecen en "Disponibles ahora". Máximo 8.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (r) => r.max(8),
    }),

    // ── EDITORIAL BLOCK ──
    defineField({
      name: 'editorialKicker',
      title: 'Editorial — Texto pequeño superior',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Artesanía canaria · Slow fashion · Hecho a mano' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Canarian craftsmanship · Slow fashion · Handmade' },
      ],
    }),
    defineField({
      name: 'editorialTitle',
      title: 'Editorial — Título principal',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Perfección que no se fabrica.' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Perfection that cannot be made.' },
      ],
    }),
    defineField({
      name: 'editorialQuote',
      title: 'Editorial — Cita',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: '"La perfección no se fabrica. Se teje, una perla a la vez."' },
        { name: 'en', title: 'English', type: 'string', initialValue: '"Perfection is not made. It is woven, one bead at a time."' },
      ],
    }),

    // ── VALUES 01-02-03-04 ──
    defineField({
      name: 'values',
      title: 'Valores (sección 01-02-03-04)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Número', type: 'string', description: 'Ej: 01' },
          {
            name: 'title', title: 'Título', type: 'object',
            fields: [
              { name: 'es', title: 'Español', type: 'string' },
              { name: 'en', title: 'English', type: 'string' },
            ],
          },
          {
            name: 'subtitle', title: 'Subtítulo (pequeño)', type: 'object',
            fields: [
              { name: 'es', title: 'Español', type: 'string' },
              { name: 'en', title: 'English', type: 'string' },
            ],
          },
          {
            name: 'description', title: 'Descripción', type: 'object',
            fields: [
              { name: 'es', title: 'Español', type: 'text', rows: 2 },
              { name: 'en', title: 'English', type: 'text', rows: 2 },
            ],
          },
        ],
        preview: {
          select: { title: 'number', subtitle: 'title.es' },
          prepare({ title, subtitle }: any) {
            return { title: `${title} — ${subtitle}` }
          },
        },
      }],
      initialValue: [
        {
          number: '01',
          title: { es: 'Hecho a mano', en: 'Handmade' },
          subtitle: { es: 'Handmade · with love', en: 'Hecho a mano · con amor' },
          description: { es: 'Cada pieza tejida perla a perla. Sin máquinas, sin prisa.', en: 'Every piece woven bead by bead. No machines, no rush.' },
        },
        {
          number: '02',
          title: { es: 'Única e irrepetible', en: 'Unique' },
          subtitle: { es: 'Unique & irreplaceable', en: 'Única e irrepetible' },
          description: { es: 'No hay dos bolsos iguales. El tuyo es solo tuyo.', en: 'No two bags are alike. Yours alone.' },
        },
        {
          number: '03',
          title: { es: 'Origen canario', en: 'Canarian origin' },
          subtitle: { es: 'Canarian origin · Atlantic soul', en: 'Origen canario · Alma atlántica' },
          description: { es: 'Del Atlántico a tus manos. Artesanía de las islas.', en: 'From the Atlantic to your hands.' },
        },
        {
          number: '04',
          title: { es: 'Slow fashion', en: 'Slow fashion' },
          subtitle: { es: 'Slow fashion · for real', en: 'Slow fashion · de verdad' },
          description: { es: 'Una pieza, mil horas. Hecha para durar para siempre.', en: 'One piece, a thousand hours. Made to last.' },
        },
      ],
    }),

    // ── INSTAGRAM SECTION ──
    defineField({
      name: 'instagramTitle',
      title: 'Instagram — Título de la sección',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Síguenos en Instagram · @nacaramia' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Follow us on Instagram · @nacaramia' },
      ],
    }),
    defineField({
      name: 'instagramImages',
      title: 'Instagram — Fotos de la galería',
      description: 'Las 6 fotos que aparecen en la sección de Instagram. Recomendado: formato cuadrado 1:1.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (r) => r.max(6),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Portada · Home' }
    },
  },
})
