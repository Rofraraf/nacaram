import { defineField, defineType } from "sanity"

export const product = defineType({
  name: "product",
  title: "Productos",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del producto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug / URL",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Bolsos", value: "bolsos" },
          { title: "Bisutería", value: "bisuteria" },
          { title: "Complementos", value: "complementos" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collection",
      title: "Colección",
      type: "string",
      description: "Ejemplo: Aura, Pau, Novias, Piezas únicas...",
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción corta",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Descripción completa",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Galería de imágenes",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "isFeatured",
      title: "Mostrar como destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isNew",
      title: "Mostrar como novedad",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "madeToOrder",
      title: "Hecho bajo pedido",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "mainImage",
    },
  },
})