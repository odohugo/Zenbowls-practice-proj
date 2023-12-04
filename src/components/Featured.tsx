import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
    return (
        <div className='w-screen overflow-x-scroll text-gray-800'>
            {/* WRAPPER */}
            <div className='w-max flex'>
                {/* SINGLE ITEM */}
                {featuredProducts.map(item => (
                <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 bg-gray-800 text-white hover:bg-gray-900 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                    {/* IMAGE CONTAINER */}
                    {item.img && <div className='relative flex-1 w-full'>
                        <Image src={item.img} alt='' fill className='object-contain'/>
                    </div>
                    }
                    {/* TEXT CONTAINER */}
                    <div className='flex-1 flex flex-col justify-center gap-4 text-center items-center'>
                        <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                        <p className='p-4 2xl:p-8'>{item.desc}</p>
                        <span className='text-xl md:text-2xl font-bold'>${item.price}</span>
                        <button className='p-2 rounded-md border-2 border-white hover:bg-emerald-800'>Add to Cart</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Featured