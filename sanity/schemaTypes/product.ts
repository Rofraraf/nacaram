import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    // ── NOMBRE BILINGÜE ──
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', validation: (r) => r.required() },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),

    // ── SLUG ──
    defineField({
      name: 'slug',
      title: 'URL del producto',
      type: 'slug',
      description: 'Se genera desde el nombre en español. Ej: blanc-sole',
      options: { source: 'name.es', maxLength: 96 },
      validation: (r) => r.required(),
    }),

    // ── PRECIO ──
    defineField({
      name: 'price',
      title: 'Precio (€)',
      type: 'number',
      validation: (r) => r.required().positive(),
    }),

    // ── CATEGORÍAS ──
    defineField({
      name: 'category',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Bolsos', value: 'bolsos' },
          { title: 'Bolsos de Novia', value: 'bolsos-novia' },
          { title: 'Bolsos de Fiesta', value: 'bolsos-fiesta' },
          { title: 'Bolsos Tote', value: 'bolsos-tote' },
          { title: 'Edición Arte', value: 'edicion-arte' },
          { title: 'Bisutería', value: 'bisuteria' },
          { title: 'Collares', value: 'collares' },
          { title: 'Cuellos', value: 'cuellos' },
          { title: 'Complementos', value: 'complementos' },
          { title: 'Llaveros', value: 'llaveros' },
          { title: 'Cinturones', value: 'cinturones' },
        ],
      },
    }),

    // ── IMÁGENES ──
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      description: 'Foto frontal del producto',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Primera foto = aparece al hacer hover en la home. Añade todas las vistas del producto.',
    }),

    // ── TEXTOS BILINGÜES ──
    defineField({
      name: 'tagline',
      title: 'Tagline (frase corta)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text', rows: 4 },
        { name: 'en', title: 'English', type: 'text', rows: 4 },
      ],
    }),

    // ── DETALLES ──
    defineField({
      name: 'material',
      title: 'Material',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensiones',
      type: 'string',
      description: 'Ej: 24 × 18 × 8 cm',
    }),
    defineField({
      name: 'madeIn',
      title: 'Hecho en',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', initialValue: 'Tenerife, Islas Canarias' },
        { name: 'en', title: 'English', type: 'string', initialValue: 'Tenerife, Canary Islands' },
      ],
    }),

    // ── VISIBILIDAD ──
    defineField({
      name: 'available',
      title: 'Activo (visible en la web)',
      type: 'boolean',
      description: 'Desactiva para ocultar sin borrar',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Destacado en la Home',
      type: 'boolean',
      description: 'Aparece en "Disponibles ahora" de la portada',
      initialValue: false,
    }),

    // ── PROGRAMACIÓN ──
    defineField({
      name: 'publishFrom',
      title: 'Publicar desde',
      type: 'datetime',
      description: 'Opcional — dejar vacío para publicar siempre. Útil para San Valentín, Navidad, etc.',
    }),
    defineField({
      name: 'publishUntil',
      title: 'Publicar hasta',
      type: 'datetime',
      description: 'Opcional — dejar vacío para no tener fecha de fin.',
    }),
  ],

  preview: {
    select: {
      title: 'name.es',
      subtitle: 'price',
      media: 'mainImage',
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title: title ?? 'Sin nombre',
        subtitle: subtitle ? `€${subtitle}` : 'Sin precio',
        media,
      }
    },
  },
})
