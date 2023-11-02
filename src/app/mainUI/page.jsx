"use client"
import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import Item from '../../components/item'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Main({data}) {
    const [input, setInput] = useState("")
    const [filteredItems, setFilteredItems] = useState([]);
    
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    
    useEffect(() => {
      const filteredItems = data.filter(item => {
          return item.name.toLowerCase().includes(input.toLowerCase());
      });
      setFilteredItems(filteredItems);
    }, [input, data]);

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center items-center gap-20">
            <header className="from-slate-900 via-slate-800 to-slate-900 border-b-gray-600 border-b w-full flex justify-between items-center p-10 absolute top-0 gap-1">
                <div className="flex justify-center items-center">
                    <h1 className="text-zinc-50 text-2xl font-bold tracking-tighter">
                        Opportunity
                    </h1>
                    <Image src={Logo} width={25} alt="Picture of the author" />
                </div>
                <div>
                    <Link className="text-zinc-50 font-semibold text-xl hover:text-zinc-400 transition-all duration-150" href={"../loginUI"}>
                        Login
                    </Link>
                </div>
            </header>
            <main className="bg-white rounded-lg p-10 w-3/5 h-[600px] min-w-[350px] shadow-xl shadow-gray-900 flex flex-col">
                <div className="flex flex-col justify-center gap-2 border-b pb-5">
                    <p className="text-lg font-semibold">
                        Nome do Programa
                    </p>
                    <input type="text" className="outline-none bg-gray-100 rounded-md py-2 px-4 text-md border" placeholder="Pesquisar" value={input} onChange={handleInputChange} />
                </div>
                <section className="pt-3 h-full overflow-auto">
                    <p className="font-light text-gray-400 pb-1 text-lg">
                        Resultados:
                    </p>
                    <ul className="flex flex-col gap-2">
                        {filteredItems.map((item) => {
                            return <Item key={item.id} name={item.name} description={item.description} url={item.url} />
                        })}
                    </ul>
                </section>
            </main>
        </div>
    );
}