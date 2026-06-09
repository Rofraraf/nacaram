# NacaRam — Next.js 14 + TypeScript

Tienda online de artesanía canaria. Construida con Next.js 14, TypeScript, CSS Modules y Stripe.

## Estructura del proyecto

```
nacaram/
├── app/                    # Rutas y páginas (Next.js App Router)
│   ├── layout.tsx          # Layout global (Header + Footer)
│   ├── page.tsx            # Home
│   ├── globals.css         # Variables CSS y estilos globales
│   └── producto/[slug]/    # Ficha de producto dinámica
├── components/
│   ├── layout/             # Header, Footer
│   └── product/            # ProductCard
├── lib/
│   ├── lang.tsx            # Contexto de idioma ES/EN
│   └── cart.tsx            # Contexto del carrito
├── data/
│   └── products.ts         # Catálogo de productos (editar aquí)
└── public/
    └── img/
        ├── hero.jpg
        ├── products/       # Fotos de cada producto
        ├── categories/     # Fotos de categorías (banners)
        └── instagram/      # Fotos para la sección de Instagram
```

## Setup inicial

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
# Edita .env.local con tus claves de Stripe y NextAuth

# 3. Arrancar en desarrollo
npm run dev
# → http://localhost:3000
```

## Añadir un producto nuevo

Edita `data/products.ts` y añade un objeto al array `PRODUCTS`:

```typescript
{
  id: 'nombre-del-bolso',
  slug: 'nombre-del-bolso',       // aparece en la URL
  name: { es: 'Nombre ES', en: 'Name EN' },
  tagline: { es: '...', en: '...' },
  description: { es: '...', en: '...' },
  price: 150,
  category: ['bolsos', 'bolsos-novia'],
  images: [
    '/img/products/nombre-1.jpg', // mínimo 1, recomendado 3-4
    '/img/products/nombre-2.jpg',
  ],
  material: { es: '...', en: '...' },
  dimensions: '24 × 18 × 8 cm',
  madeIn: { es: 'Tenerife, Islas Canarias', en: 'Tenerife, Canary Islands' },
  featured: true,   // aparece en la home
  available: true,
}
```

Luego sube las fotos a `public/img/products/`.

## Categorías disponibles

- `bolsos` — todos los bolsos
- `bolsos-novia` — bolsos de novia
- `bolsos-fiesta` — bolsos de fiesta
- `bolsos-tote` — bolsos tote
- `edicion-arte` — edición arte
- `bisuteria` — bisutería
- `complementos` — complementos
- `llaveros` — llaveros

## Imágenes necesarias

Copia tus fotos en alta resolución a estas rutas:

```
public/img/hero.jpg                    # Foto hero de la home
public/img/og-default.jpg             # Imagen Open Graph (1200×630)
public/img/categories/bolsos.jpg      # Banner categoría bolsos
public/img/categories/bisuteria.jpg   # Banner categoría bisutería
public/img/categories/complementos.jpg
public/img/instagram/ig-1.jpg         # Fotos sección Instagram (6)
public/img/instagram/ig-2.jpg
public/img/instagram/ig-3.jpg
public/img/instagram/ig-4.jpg
public/img/instagram/ig-5.jpg
public/img/instagram/ig-6.jpg
public/img/products/blanc-sole-1.jpg  # Fotos de cada producto
...
```

## Despliegue en Cloudflare Pages

```bash
# 1. Build
npm run build

# 2. En Cloudflare Pages:
# - Framework preset: Next.js
# - Build command: npm run build
# - Output directory: .next
# - Variables de entorno: copiar desde .env.local
```

## Variables de entorno (.env.local)

```
NEXTAUTH_SECRET=           # openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
ADMIN_EMAIL=info@nacaram.com
```
