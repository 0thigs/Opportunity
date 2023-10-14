import { createClient } from '@supabase/supabase-js';
import AdminUI from '../adminUI/pages'

export async function getData() {
  const supabase = createClient(process.env.PUBLIC_SUPABASE_URL, process.env.SUPABASE_KEY);

  const { data } = await supabase
  .from("programs")
  .select("*")
  .order("name")

  return data
}

export default function admin() {    
  
  const data = getData();

  return (
    <AdminUI data={data}/>
  );
}
