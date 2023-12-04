import Price from '@/components/Price'
import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-gray-800 md:flex-row md:gap-8 md:items-center'>
                {featuredProducts[0].img && (
                <div className='relative w-full h-1/2 md:h-[70%]'>
                    <Image src={featuredProducts[0].img} alt='' className='object-contain' fill/>
                </div>
                )}
            <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
                <h1 className='text-3xl uppercase font-bold xl:text-5xl'>{featuredProducts[0].title}</h1>
                <p>{featuredProducts[0].desc}</p>
                <Price price={featuredProducts[0].price} id={featuredProducts[0].id} options={featuredProducts[0].options}/>
            </div>
        </div>
    )
}

export default SingleProductPage