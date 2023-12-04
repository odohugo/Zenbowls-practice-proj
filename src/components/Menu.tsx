"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
    { id: 1, title: "Homepage", url:"/" },
    { id: 2, title: "Menu", url:"/menu" }
];

const Menu = () => {
    const [open, setOpen] = useState(false);
    
    const user = false

    return (
        <div>
            {!open ? (
            <Image src='/menu.svg' alt='' width={20} height={20} onClick={()=>setOpen(true)}/>
            ) : (
            <Image src='/x.svg' alt='' width={20} height={20} onClick={()=>setOpen(false)}/>
            )}
            {open &&
            <div className='absolute left-0 top-24 py-10 bg-gray-800 text-white text-xl flex flex-col w-full text-center h-[calc(100vh-6rem)] justify-center items-center gap-10 z-10'>
                {links.map(item => (
                    <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                        {item.title}
                    </Link>
                ))}
                {!user ? (
                <Link href={"/login"} onClick={() => setOpen(false)}>Login</Link>
                ) : (
                <Link href={"/orders"} onClick={() => setOpen(false)}>Orders</Link>
                )}
                <CartIcon/>
            </div>
            }
        </div>
    )
}

export default Menu