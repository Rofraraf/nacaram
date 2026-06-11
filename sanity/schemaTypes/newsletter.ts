import { defineField, defineType } from 'sanity'

export const newsletter = defineType({
  name: 'newsletter',
  title: '📧 Newsletter',
  type: 'document',
  // Read-only in studio — managed via API
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Fecha de suscripción',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'active',
      title: 'Activo',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'subscribedAt' },
  },
})
