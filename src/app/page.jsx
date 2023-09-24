import Link from "next/link"

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-700 flex flex-col justify-center items-center gap-20">
      <h1 className="font-bold text-7xl text-zinc-100">
        Opportunity
      </h1>
      <Link href="/main" className="px-5 py-2 bg-green-600 rounded-lg text-zinc-100 hover:bg-green-500 transition-colors duration-300 shadow-md shadow-gray-800">
        <p>
          Buscar Oportunidades
        </p>
      </Link>
    </div>
  )
}
