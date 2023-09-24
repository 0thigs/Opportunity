import Image from "next/image";
import Logo from '../../../public/images/logo.png'

export default function Main() {
  return (
    <div className="w-screen h-screen bg-slate-700 bg-gradient-to-l from-slate-800 flex flex-col justify-center items-center gap-20">
      <header className="bg-gray-900 bg-gradient-to-l from-gray-950 w-full flex justify-start items-center p-10 absolute top-0 gap-1">
        <h1 className="text-zinc-50 text-xl font-bold tracking-tighter">
          Opportunity
        </h1>
        <Image src={Logo} width={25} alt="Picture of the author" />
      </header>
      <main className="bg-white rounded-lg p-10 w-3/5 h-3/6 min-w-min shadow-lg shadow-gray-800 flex flex-col">
        <div className="flex flex-col justify-center gap-2 border-b pb-5">
          <p className="text-lg font-semibold">
            Nome do Programa
          </p>
          <input type="text" className="outline-none bg-gray-100 rounded-md py-2 px-4 text-md border" placeholder="Pesquisar"/>
        </div>
        <section className="pt-3">
          <p className="font-light text-gray-400 pb-1">
            Resultados:
          </p> 
          <ul className="flex flex-col gap-2">
            <li className="">
              <a href="#">
                Latin American Leadership Academy
              </a>
            </li>
            <li>
              <a href="#">
                The Junior Academy
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}