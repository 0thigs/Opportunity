"use client"
import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import { useState } from "react";
import { VerifyAdmin } from "../login/login"

export default function LoginUI() {
    const [user, setUser] = useState("")

    function handleLogin() {
        const verification = VerifyAdmin(user)

        if(verification === true) {
            console.log('Deu certo')
        } else {
            console.log("nao deu certo")
        }
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center items-center gap-20">
            <header className="from-slate-900 via-slate-800 to-slate-900 border-b-gray-600 border-b w-full flex justify-start items-center p-10 absolute top-0 gap-1">
                <h1 className="text-zinc-50 text-2xl font-bold tracking-tighter">
                    Opportunity
                </h1>
                <Image src={Logo} width={25} alt="Picture of the author" />
            </header>
            <main className="bg-white rounded-lg p-10 w-3/5 h-[600px] min-w-[350px] shadow-xl shadow-gray-900 flex flex-col">
                <div className="flex flex-col justify-center gap-2 border-b pb-5">
                    LOGIN
                </div>
                <section className="flex justify-center items-center h-full">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p className="text-[15px]">
                            USERNAME
                        </p>
                        <input type="text" className="outline-none bg-gray-100 rounded-md py-2 px-4 text-md border" onChange={(e) => {setUser(e.target.value)}}/>
                        <button className="p-3 border rounded-lg mt-5 transition duration-200 hover:border-zinc-400 focus:border-green-500" onClick={handleLogin}>
                            ENTRAR
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

