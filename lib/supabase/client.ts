import { createBrowserClient } from '@supabase/ssr'
import { hasEnvVars } from '../utils'

if (!hasEnvVars) {
  throw new Error('Missing Supabase environment variables')
}

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}   