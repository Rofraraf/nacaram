import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categorías',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string', validation: (r) => r.required() },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: { source: 'name.es', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'kicker',
      title: 'Subtítulo del banner',
      description: 'Texto pequeño encima del nombre. Ej: Novia · Fiesta · Tote · Arte',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Imagen del banner',
      type: 'image',
      description: 'Foto que aparece en la home y en la cabecera de la categoría',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden (1 = primera)',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'name.es', media: 'image' },
  },
})
