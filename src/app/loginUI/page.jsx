"use client"
import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import { useState } from "react";
import { VerifyAdmin } from "../login/login"

export default function LoginUI() {
    const [user, setUser] = useState("")
    const [verified, setVerified] = useState(false)
    
    function handleLogin() {
        const verification = VerifyAdmin(user)
        
        if (verification === true){
            window.location.replace("/admin");  
            setVerified(true)
        } else {
            alert('Invalid Username')  
            setVerified(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
            <header className="absolute top-0 flex items-center justify-start w-full gap-1 p-10 border-b from-slate-900 via-slate-800 to-slate-900 border-b-gray-600">
                <h1 className="text-2xl font-bold tracking-tighter text-zinc-50">
                    Opportunity
                </h1>
                <Image src={Logo} width={25} alt="Picture of the author" />
            </header>
            <main className="bg-white rounded-lg p-10 w-3/5 h-[600px] min-w-[350px] shadow-xl shadow-gray-900 flex flex-col">
                <div className="flex flex-col justify-center gap-2 pb-5 border-b">
                    LOGIN
                </div>
                <section className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <p className="text-[15px]">
                            USERNAME
                        </p>
                        <input type="text" className="px-4 py-2 bg-gray-100 border rounded-md outline-none text-md" onChange={(e) => {setUser(e.target.value)}}/>
                        <button className={`p-3 mt-5 transition duration-200 border rounded-lg hover:border-zinc-400 ${verified? "focus:border-green-500" : "focus:border-red-700"}`} onClick={handleLogin}>
                            ENTRAR
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

