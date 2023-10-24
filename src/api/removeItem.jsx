import supabase from '../config/supabaseClient'

export async function removeItem({id}) {

    const { data } = await supabase
    .from("programs")
    .delete()
    .eq('id', id)

    return data
}