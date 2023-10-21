import AdminUI from '../adminUI/pages'
import { getItems } from '../../api/getItems'; 

export const revalidate = 0

export default async function admin() {    

  const data = await getItems()

  return (
    <AdminUI data={data}/>
  );
}
