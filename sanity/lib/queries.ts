import { client } from './client'
import { CATEGORIES as LOCAL_CATEGORIES } from '@/data/products'

// ── TYPES ─────────────────────────────────────────────────────────────

export interface HomeData {
  heroImageUrl: string | null
  heroTitle: { es: string; en: string }
  heroSubtitle: { es: string; en: string }
  heroKicker: { es: string; en: string }
  editorialKicker: { es: string; en: string }
  editorialTitle: { es: string; en: string }
  editorialQuote: { es: string; en: string }
  values: {
    number: string
    title: { es: string; en: string }
    subtitle: { es: string; en: string }
    description: { es: string; en: string }
  }[]
  instagramTitle: { es: string; en: string }
  instagramImages: string[]
}

export interface SiteSettings {
  tickerItems: string[]
  email: string
  instagram: string
  tiktok?: string
  whatsapp?: string
  footerTagline: { es: string; en: string }
  footerOrigin: string
  shippingNotice?: string
  announcement?: string
}

export interface CategoryData {
  slug: string
  name: { es: string; en: string }
  kicker: { es: string; en: string }
  imageUrl: string
}

// ── HOME ──────────────────────────────────────────────────────────────

export async function getHomeData(): Promise<HomeData | null> {
  const query = `*[_type == "home" && _id == "home-singleton"][0] {
    "heroImageUrl": heroImage.asset->url,
    heroTitle,
    heroSubtitle,
    heroKicker,
    editorialKicker,
    editorialTitle,
    editorialQuote,
    values,
    instagramTitle,
    "instagramImages": instagramImages[].asset->url
  }`
  return client.fetch(query).catch(() => null)
}

// ── SITE SETTINGS ─────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings" && _id == "site-settings-singleton"][0]`
  return client.fetch(query).catch(() => null)
}

// ── CATEGORIES ────────────────────────────────────────────────────────

export async function getCategories(): Promise<CategoryData[]> {
  const query = `*[_type == "category"] | order(order asc) {
    "slug": slug.current,
    name,
    kicker,
    "imageUrl": image.asset->url
  }`
  const data = await client.fetch<CategoryData[]>(query).catch(() => [])
  if (!data || data.length === 0) {
    return LOCAL_CATEGORIES.map(c => ({
      slug: c.slug,
      name: c.name,
      kicker: c.kicker,
      imageUrl: c.image,
    }))
  }
  return data
}

// ── NEWSLETTER ────────────────────────────────────────────────────────

export async function subscribeNewsletter(email: string): Promise<boolean> {
  try {
    await client.create({
      _type: 'newsletter',
      email,
      subscribedAt: new Date().toISOString(),
      active: true,
    })
    return true
  } catch {
    return false
  }
}
