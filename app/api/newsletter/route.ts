
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'oa0a1qhs',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Check if already subscribed
    const existing = await client.fetch(
      `*[_type == "newsletter" && email == $email][0]._id`,
      { email }
    )
    if (existing) {
      return Response.json({ message: 'Ya estás suscrito' }, { status: 200 })
    }

    await client.create({
      _type: 'newsletter',
      email,
      subscribedAt: new Date().toISOString(),
      active: true,
    })

    return Response.json({ message: 'Suscrito correctamente' }, { status: 200 })
  } catch (error) {
    return Response.json({ error: 'Error al suscribir' }, { status: 500 })
  }
}
