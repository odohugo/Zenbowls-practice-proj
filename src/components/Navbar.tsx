import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

    const user = false
    return (
        <div className='h-12 text-gray-900 p-4 flex justify-between items-center border-b-2 border-gray-600 uppercase md:h-24 lg:px-20 xl:px-40'>
            <div className='hidden md:flex gap-4 lg:gap-8 flex-1 lg:text-lg'>
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            <div className='text-xl md:font-bold flex-1 md:text-center text-gray-800 lg:text-2xl'>
                <Link href="/">ZENBOWLS</Link>
            </div>
            <div className='md:hidden'>
                <Menu/>
            </div>
            <div className='hidden md:flex gap-4 lg:gap-8 flex-1 items-center justify-end lg:text-lg'>
                <div className='flex items-center gap-2 cursor-pointer bg-emerald-800 text-white shadow-xl drop-shadow-md rounded-md px-2 md:absolute top-3 r-2 2xl:static'>
                    <Image src="/phone.svg" alt="" width={20} height={20}/>
                    <span>123-456-789</span>
                </div>
                {!user ? (
                <Link href="/login" className='flex items-center'>Login</Link>
                ) : (
                <Link href="/orders" className='flex items-center'>Orders</Link>
                )}
                <CartIcon/>
            </div>
        </div>
    )
}

export default Navbar