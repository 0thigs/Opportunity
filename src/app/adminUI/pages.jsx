"use client"
import supabase from '../../config/supabaseClient';
import Logo from '../../../public/images/logo.png'
import Image from 'next/image';
import ItemRemoveUI from '../../components/itemRemoveUI';
import { useState, useEffect } from 'react'

export default function adminUI({ data }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("")

  const SendData = async (e) => {
    console.log(name, description, link)

    const { data } = await supabase
      .from('programs')
      .insert([{ name: name, description: description, url: link }])
      .select()
  }

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


  console.log(data)

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center items-center gap-20">
      <header className="from-slate-900 via-slate-800 to-slate-900 border-b-gray-600 border-b w-full flex justify-start items-center p-10 absolute top-0 gap-1">
        <h1 className="text-zinc-50 text-2xl font-bold tracking-tighter">
          Opportunity
        </h1>
        <Image src={Logo} width={25} alt="Picture of the author" />
      </header>
      <main className="bg-white rounded-lg p-10 w-3/5 h-[600px] min-w-[350px] shadow-xl shadow-gray-900 flex flex-col overflow-auto">
        <h1 className='text-2xl font-semibold mb-5'>
          EDITAR
        </h1>
        <div className='flex gap-10 justify-around items-start'>
          <section className='flex flex-col justify-center items-center gap-5'>
            <div>
              <p className='text-lg my-2'>
                Nome do Programa
              </p>
              <input className='border p-2 rounded-md w-80' placeholder='Insira o nome do programa' onChange={(e) => { setName(e.target.value) }}></input>
            </div>
            <div>
              <p className='text-lg my-2'>
                Descrição do Programa
              </p>
              <textarea className='border p-2 rounded-md w-80 max-h-40' placeholder='Insira a descrição' onChange={(e) => { setDescription(e.target.value) }}></textarea>
            </div>
            <div>
              <p className='text-lg my-2'>
                Link para o site do Programa
              </p>
              <input className='border p-2 rounded-md w-80' placeholder='Insira o link para o site' onChange={(e) => { setLink(e.target.value) }}></input>
            </div>
            <button className='border-zinc-300 border p-2 rounded-md bg-green-500 shadow-md hover:bg-green-600 transition-all text-black hover:text-white duration-300' onClick={SendData}>INSERIR</button>
          </section>
          <span className=''></span>
          <section className='flex flex-col justify-center items-center gap-5 w-[25rem]'>
            <input type="text" className="outline-none bg-gray-100 rounded-md py-2 px-4 text-md border w-full" placeholder="Pesquisar" value={input} onChange={handleInputChange} />
            <ul className="flex flex-col gap-2">
              {filteredItems.map((item) => {
                return <ItemRemoveUI key={item.id} id={item.id} name={item.name} description={item.description} url={item.url}/>
              })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
