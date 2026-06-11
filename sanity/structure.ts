import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('NacaRam')
    .items([
      // Singletons — solo puede haber uno de cada
      S.listItem()
        .title('🏠 Home (Portada)')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home-singleton')
            .title('Home')
        ),
      S.listItem()
        .title('⚙️ Ajustes globales')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('site-settings-singleton')
            .title('Ajustes globales')
        ),

      S.divider(),

      // Lists
      S.documentTypeListItem('product').title('🛍️ Productos'),
      S.documentTypeListItem('category').title('📂 Categorías'),

      S.divider(),

      S.documentTypeListItem('newsletter').title('📧 Newsletter'),
    ])
