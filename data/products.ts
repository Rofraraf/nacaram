// data/products.ts
// Catálogo completo de productos NacaRam
// Para añadir un producto nuevo: añade un objeto al array PRODUCTS

export interface Product {
  id: string
  slug: string
  name: { es: string; en: string }
  tagline: { es: string; en: string }
  description: { es: string; en: string }
  price: number
  category: string[]         // ['bolsos', 'novia']
  images: string[]           // rutas desde /public/img/products/
  material: { es: string; en: string }
  dimensions: string         // e.g. "24 × 18 × 8 cm"
  madeIn: { es: string; en: string }
  featured: boolean
  available: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'blanc-sole',
    slug: 'blanc-sole',
    name: { es: 'Blanc Sole', en: 'Blanc Sole' },
    tagline: {
      es: 'Cada perla, un instante de silencio y paciencia.',
      en: 'Each bead, a moment of silence and patience.',
    },
    description: {
      es: 'El Blanc Sole nace de la quietud. Cada perla ivory nacarada ha sido elegida, anudada y colocada a mano, una a una, hasta construir una pieza que no se parece a ninguna otra. Es el bolso que se lleva cuando quieres que algo hable por ti sin decir nada.',
      en: 'Blanc Sole is born of stillness. Each ivory nacreous pearl has been hand-selected, knotted and placed, one by one, to create a piece unlike any other. It is the bag you carry when you want something to speak for you without saying a word.',
    },
    price: 100,
    category: ['bolsos', 'bolsos-novia'],
    images: [
      '/img/products/blanc-sole-1.jpg',
      '/img/products/blanc-sole-2.jpg',
      '/img/products/blanc-sole-3.jpg',
      '/img/products/blanc-sole-4.jpg',
    ],
    material: {
      es: 'Perlas ivory nacaradas · Talla mixta',
      en: 'Nacreous ivory pearls · Mixed size',
    },
    dimensions: '24 × 18 × 8 cm',
    madeIn: {
      es: 'Tenerife, Islas Canarias',
      en: 'Tenerife, Canary Islands',
    },
    featured: true,
    available: true,
  },
  {
    id: 'turquoise',
    slug: 'turquoise',
    name: { es: 'Turquoise', en: 'Turquoise' },
    tagline: {
      es: 'El azul del Atlántico convertido en perlas.',
      en: 'The blue of the Atlantic turned into pearls.',
    },
    description: {
      es: 'Turquoise captura el color exacto del océano canario al mediodía. Sus cuentas nacaradas de tono turquesa han sido tejidas a mano con la misma paciencia con que el mar da forma a las piedras. Una pieza que lleva el alma de las islas.',
      en: 'Turquoise captures the exact colour of the Canarian ocean at midday. Its nacreous turquoise beads have been hand-woven with the same patience with which the sea shapes stones. A piece that carries the soul of the islands.',
    },
    price: 120,
    category: ['bolsos'],
    images: [
      '/img/products/turquoise-1.jpg',
      '/img/products/turquoise-2.jpg',
      '/img/products/turquoise-3.jpg',
    ],
    material: {
      es: 'Cuentas nacaradas turquesa · Herrajes dorados',
      en: 'Nacreous turquoise beads · Gold-tone hardware',
    },
    dimensions: '22 × 16 × 9 cm',
    madeIn: {
      es: 'Tenerife, Islas Canarias',
      en: 'Tenerife, Canary Islands',
    },
    featured: true,
    available: true,
  },
  {
    id: 'noche-estrellada',
    slug: 'noche-estrellada',
    name: { es: 'Noche Estrellada', en: 'Starry Night' },
    tagline: {
      es: 'Van Gogh tejido perla a perla.',
      en: 'Van Gogh woven bead by bead.',
    },
    description: {
      es: 'La Noche Estrellada es la pieza más audaz de NacaRam. Inspirada en el cuadro de Van Gogh, cada remolino de color ha sido reproducido con cientos de cuentas de cristal en azul, amarillo y turquesa. Una obra de arte que se lleva.',
      en: 'Starry Night is NacaRam\'s boldest piece. Inspired by Van Gogh\'s painting, every swirl of colour has been reproduced with hundreds of crystal beads in blue, yellow and turquoise. A work of art you can wear.',
    },
    price: 170,
    category: ['bolsos', 'edicion-arte'],
    images: [
      '/img/products/noche-estrellada-1.jpg',
      '/img/products/noche-estrellada-2.jpg',
    ],
    material: {
      es: 'Cuentas de cristal multicolor · Patrón artístico',
      en: 'Multicolour crystal beads · Artistic pattern',
    },
    dimensions: '24 × 18 × 8 cm',
    madeIn: {
      es: 'Tenerife, Islas Canarias',
      en: 'Tenerife, Canary Islands',
    },
    featured: true,
    available: true,
  },
  {
    id: 'aurora-tote',
    slug: 'aurora-tote',
    name: { es: 'Aurora Tote', en: 'Aurora Tote' },
    tagline: {
      es: 'La luz del amanecer canario en cada perla.',
      en: 'The light of a Canarian sunrise in every pearl.',
    },
    description: {
      es: 'El Aurora Tote combina la estructura del bolso tote con la riqueza de las perlas ivory en diferentes tamaños. Su diseño permite llevarlo en la mano o cruzado, haciendo de él un compañero perfecto para cualquier ocasión especial.',
      en: 'The Aurora Tote combines the structure of a tote bag with the richness of ivory pearls in different sizes. Its design allows it to be carried by hand or crossbody, making it the perfect companion for any special occasion.',
    },
    price: 285,
    category: ['bolsos', 'bolsos-tote'],
    images: [
      '/img/products/aurora-tote-1.jpg',
      '/img/products/aurora-tote-2.jpg',
      '/img/products/aurora-tote-3.jpg',
    ],
    material: {
      es: 'Perlas ivory talla mixta · Cadena dorada',
      en: 'Mixed-size ivory pearls · Gold chain',
    },
    dimensions: '30 × 24 × 12 cm',
    madeIn: {
      es: 'Tenerife, Islas Canarias',
      en: 'Tenerife, Canary Islands',
    },
    featured: true,
    available: true,
  },
  {
    id: 'llavero-flor',
    slug: 'llavero-flor',
    name: { es: 'Llavero Flor', en: 'Flower Keyring' },
    tagline: {
      es: 'Un detalle que marca la diferencia.',
      en: 'A detail that makes the difference.',
    },
    description: {
      es: 'El Llavero Flor de NacaRam es una pieza artesanal en miniatura. Tejido con perlas ivory en forma de margarita con centro dorado, es el complemento perfecto para tu bolso o tus llaves. Un regalo especial para alguien especial.',
      en: 'The NacaRam Flower Keyring is a miniature handmade piece. Woven with ivory pearls in a daisy shape with a gold centre, it is the perfect accessory for your bag or keys. A special gift for someone special.',
    },
    price: 28,
    category: ['complementos', 'llaveros'],
    images: [
      '/img/products/llavero-flor-1.jpg',
      '/img/products/llavero-flor-2.jpg',
    ],
    material: {
      es: 'Perlas ivory · Centro dorado · Cadena gold-filled',
      en: 'Ivory pearls · Gold centre · Gold-filled chain',
    },
    dimensions: '7 × 5 cm',
    madeIn: {
      es: 'Tenerife, Islas Canarias',
      en: 'Tenerife, Canary Islands',
    },
    featured: false,
    available: true,
  },
]

// ── HELPERS ──────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(p => p.category.includes(category) && p.available)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured && p.available)
}

export function getRelatedProducts(current: Product, limit = 4): Product[] {
  return PRODUCTS
    .filter(p => p.id !== current.id && p.available)
    .filter(p => p.category.some(c => current.category.includes(c)))
    .slice(0, limit)
}

export const CATEGORIES = [
  {
    slug: 'bolsos',
    name: { es: 'Bolsos', en: 'Bags' },
    kicker: { es: 'Novia · Fiesta · Tote · Arte', en: 'Bridal · Evening · Tote · Art' },
    image: '/img/categories/bolsos.jpg',
  },
  {
    slug: 'bisuteria',
    name: { es: 'Bisutería', en: 'Jewellery' },
    kicker: { es: 'Collares · Cuellos · Pulseras', en: 'Necklaces · Collars · Bracelets' },
    image: '/img/categories/bisuteria.jpg',
  },
  {
    slug: 'complementos',
    name: { es: 'Complementos', en: 'Accessories' },
    kicker: { es: 'Llaveros · Cinturones · Diademas', en: 'Keyrings · Belts · Headbands' },
    image: '/img/categories/complementos.jpg',
  },
]
