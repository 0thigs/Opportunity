import supabase from '../config/supabaseClient'

export async function getItems() {

    const { data } = await supabase
    .from("programs")
    .select("*")
    .order("name")
  
    return data
}