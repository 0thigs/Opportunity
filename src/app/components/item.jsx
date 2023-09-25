import React from 'react';
import Link from "next/link";

export default function Item({ name, url }) {
    return (
        <li className="">
            <Link href={url}>
                {name}
            </Link>
        </li>
    );
}