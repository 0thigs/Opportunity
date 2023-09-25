"use client"
import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import Link from 'next/link';

export default function Item({ name, description, url}) {

    const [visible, setVisible] = useState(false)

    return (
        <li className="flex justify-center items-start flex-col gap-1">
            <div>
                <button onClick={() => { setVisible(!visible) }} className='flex justify-center items-center'>
                {visible?<ArrowDropDownIcon/>:<ArrowRightIcon />}
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
                    <p>
                        {description}
                    </p>
                    <Link href="url">
                        <p className='p-2 bg-green-400 rounded-lg flex justify-center items-center font-semibold text-white'>
                            Ir para o site
                            <TransitEnterexitIcon className="w-4"/>
                        </p>
                    </Link>
                </div>
                : null}
        </li>
    );
}