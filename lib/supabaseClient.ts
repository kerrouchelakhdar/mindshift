// lib/supabaseClient.ts
// Creates and exports a Supabase client using public env vars.
// Safe to import in both client and server components/pages.

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined

if (!supabaseUrl || !supabaseAnonKey) {
  // We don't throw here to allow the app to run locally with mock data.
  // Logging only in development to avoid leaking info.
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[supabaseClient] Missing Supabase env vars. Using mock data where applicable.')
  }
}

export const supabase = createClient(supabaseUrl || 'https://example.supabase.co', supabaseAnonKey || 'anon-key')

export default supabase
