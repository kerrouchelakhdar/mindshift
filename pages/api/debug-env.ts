import type { NextApiRequest, NextApiResponse } from 'next'

function mask(value?: string, head = 8, tail = 6) {
  if (!value) return undefined
  if (value.length <= head + tail) return value
  return `${value.slice(0, head)}...${value.slice(-tail)}`
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const nodeEnv = process.env.NODE_ENV

  res.status(200).json({
    ok: true,
    runtime: 'api-route',
    nodeEnv,
    NEXT_PUBLIC_SUPABASE_URL: mask(url, 15, 8),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: mask(anon),
  })
}
