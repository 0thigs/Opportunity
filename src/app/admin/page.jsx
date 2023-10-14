import AdminUI from '../adminUI/pages'
import supabase from '../../config/supabaseClient';

export async function getData() {
  
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
