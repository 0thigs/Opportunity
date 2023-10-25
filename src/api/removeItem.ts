import { createClient } from '../config/supabaseClient'

export async function removeItem({id}) {
    const supabase = createClient()

    const { data } = await supabase
    .from("programs")
    .delete()
    .eq('id', id)

    return data
}