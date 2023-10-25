import { cache } from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const createClient = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient({ cookies: () => cookieStore })
})