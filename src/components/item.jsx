"use client"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Link from 'next/link';
import { useState } from 'react';

export default function Item({ name, description, url }) {

    const [visible, setVisible] = useState(false)

    return (
        <li className="flex justify-center items-start flex-col gap-1 border border-zinc-300 rounded-lg p-3 shadow shadow-md">
            <div>
                <button onClick={() => { setVisible(!visible) }} className='flex justify-center items-center'>
                    {visible ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                    <p className='text-lg'>
                        {name}
                    </p>
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