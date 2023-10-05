import { createClient } from '@supabase/supabase-js';
import MainPage from "../mainUI/page";

export async function getItems() {
  const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.SUPABASE_KEY);

  const { data } = await supabase
  .from("programs")
  .select("*")
  .order("id")

  return data
}

export const revalidate = 0
 
export default async function Main() {

  const items = await getItems();

  return (
    <MainPage data={items}/>
  );
}