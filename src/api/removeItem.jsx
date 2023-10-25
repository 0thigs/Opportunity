import { createClient } from '@supabase/supabase-js'
//import supabase from '../config/supabaseClient'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)

export async function removeItem({id}) {

    const { data } = await supabase
    .from("programs")
    .delete()
    .eq('id', id)

    return data
}