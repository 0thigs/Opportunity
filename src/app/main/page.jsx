import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import Item from '../components/item'

export default function Main() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center items-center gap-20">
      <header className="from-slate-900 via-slate-800 to-slate-900 border-b-gray-600 border-b w-full flex justify-start items-center p-10 absolute top-0 gap-1">
        <h1 className="text-zinc-50 text-2xl font-bold tracking-tighter">
          Opportunity
        </h1>
        <Image src={Logo} width={25} alt="Picture of the author" />
      </header>
      <main className="bg-white rounded-lg p-10 w-3/5 h-3/6 min-w-[350px] shadow-xl shadow-gray-900 flex flex-col">
        <div className="flex flex-col justify-center gap-2 border-b pb-5">
          <p className="text-lg font-semibold">
            Nome do Programa
          </p>
          <input type="text" className="outline-none bg-gray-100 rounded-md py-2 px-4 text-md border" placeholder="Pesquisar"/>
        </div>
        <section className="pt-3 h-full overflow-auto">
          <p className="font-light text-gray-400 pb-1 text-lg">
            Resultados:
          </p> 
          <ul className="flex flex-col gap-2">
            <Item name="The Junior Academy" description={"The Junior Academy is a passionate community of problem solvers made up of talented students, STEM experts, and industry leaders from around the world. Junior Academy members are elite students and mentors who are dedicated to designing innovative solutions to society’s greatest challenges!"}/>
            <Item name="The Junior Academy" description={"The Junior Academy is a passionate community of problem solvers made up of talented students, STEM experts, and industry leaders from around the world. Junior Academy members are elite students and mentors who are dedicated to designing innovative solutions to society’s greatest challenges!"}/>
            <Item name="The Junior Academy" description={"The Junior Academy is a passionate community of problem solvers made up of talented students, STEM experts, and industry leaders from around the world. Junior Academy members are elite students and mentors who are dedicated to designing innovative solutions to society’s greatest challenges!"}/>
            <Item name="The Junior Academy" description={"The Junior Academy is a passionate community of problem solvers made up of talented students, STEM experts, and industry leaders from around the world. Junior Academy members are elite students and mentors who are dedicated to designing innovative solutions to society’s greatest challenges!"}/>
            <Item name="The Junior Academy" description={"The Junior Academy is a passionate community of problem solvers made up of talented students, STEM experts, and industry leaders from around the world. Junior Academy members are elite students and mentors who are dedicated to designing innovative solutions to society’s greatest challenges!"}/>
            <Item name="The Junior Academy" description={"The Junior Academy is a passionate community of problem solvers made up of talented students, STEM experts, and industry leaders from around the world. Junior Academy members are elite students and mentors who are dedicated to designing innovative solutions to society’s greatest challenges!"}/>
          </ul>
        </section>
      </main>
    </div>
  );
}