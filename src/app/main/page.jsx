import MainUI from "../mainUI/page";
import { getItems } from "../../api/getItems";

export const revalidate = 0
 
export default async function Main() {
  const data = await getItems()

  return (
    <MainUI data={data}/>
  );
}