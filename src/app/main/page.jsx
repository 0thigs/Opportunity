import MainUI from "../mainUI/page";
import supabase from '../../config/supabaseClient'

export async function getItems() {

  const { data } = await supabase
  .from("programs")
  .select("*")
  .order("name")

  return data
}

export const revalidate = 0
 
export default async function Main() {

  const items = await getItems();

  return (
    <MainUI data={items}/>
  );
}