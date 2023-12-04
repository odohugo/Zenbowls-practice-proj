import { featuredProducts } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zenbowls',
}

const MenuPage = () => {
    return (
        <div className='flex flex-wrap text-gray-900 border-l-2 border-gray-800'>
            {featuredProducts.map((item => (
                <Link className='w-full h-[60vh] border-b-2 border-r-2 border-gray-800 sm:w-1/2 lg:w-[32vw] 2xl:[33vw] p-4 lg:p-10 flex flex-col justify-between group even:bg-gray-100' href={`/product/${item.id}`} key={item.id}>
                    {item.img && (
                        <div className='relative h-[80%]'>
                            <Image src={item.img} alt="" fill className='object-contain'/>
                        </div>
                    )}
                    <div className='flex items-center justify-between font-bold h-10 gap-5'>
                        <h1 className='text-2xl uppercase text-gray-800'>{item.title}</h1>
                        <h2 className='group-hover:hidden text-xl text-gray-800'>${item.price}</h2>
                        <button className='hidden group-hover:block uppercase bg-emerald-900 text-white rounded-md p-2'>Add to Cart</button>
                    </div>
                </Link>
            )))}
        </div>
    )
}

export default MenuPage