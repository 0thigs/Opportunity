import { createClient } from '../config/supabaseClient'

export async function getItems() {

    const supabase = createClient()

    const { data } = await supabase
    .from("programs")
    .select("*")
    .order("name")
  
    return data
}