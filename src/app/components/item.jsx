"use client"
import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                <div className='bg-slate-400 w-2/4 min-w-max p-3 rounded-sm'>
                    <p className='font-semibold'>
                        {name}
                    </p>
                    <p>
                        {description}
                    </p>
                    <button>
                        Ir para o site
                    </button>
                </div>
                : null}
        </li>
    );
}