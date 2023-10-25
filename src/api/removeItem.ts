import { createClient } from '../config/supabaseClient'

export async function removeItem(id: number) {
    const supabase = createClient()

    const { data, error } = await supabase
    .from("programs")
    .delete()
    .eq('id', id)
    
    if (error) {
        throw new Error(error.message)
    }

    return data
}