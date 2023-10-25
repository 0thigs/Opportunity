"use client"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { removeItem } from '../api/removeItem'
import Link from 'next/link';
import { useState } from 'react';

export default function ItemRemove({ id, name, description, url}) {

    function handleRemove() {
        removeItem(id)
    }

    const [visible, setVisible] = useState(false)

    return (
        <li className="flex justify-center items-start flex-col gap-1 border border-zinc-300 rounded-lg p-3 shadow-md">
            <div className='flex justify-between items-center w-full'>
                <button onClick={() => { setVisible(!visible) }} className='flex justify-center items-center'>
                    {visible ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                    <p className='text-lg'>
                        {name}
                    </p>
                </button>
            <button className="rounded-xl flex justify-center items-center hover:bg-red-400 transition-all duration-300" onClick={handleRemove}>
                    <HighlightOffIcon className='text-red-600'/>
                </button>
            </div> 
            {visible ?
                <div className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-3 rounded-lg text-white'>
                    <p className='font-semibold'>
                        {name}
                    </p>
                    <p className='my-3'>
                        {description}
                    </p>
                    <Link href={url} target='_blank'>
                        <p className='p-2 bg-green-400 rounded-lg flex justify-center items-center font-semibold text-white'>
                            Ir para o site
                            <TransitEnterexitIcon className="w-4" />
                        </p>
                    </Link>
                </div>
                : null}
        </li>
    );
}