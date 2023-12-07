import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zenbowls',
}

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-9rem)] md:h-[calc(100vh-12rem)] flex flex-col text-gray-800 lg:flex-row'>
            <div className='h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40'>
                <div className='flex items-center justify-between mb-4 w-full'>
                    <Image src="/Poke-1.png" alt='' width={100} height={100}/>
                    <div className='w-80'>
                        <h1 className='uppercase text-xl font-bold'>Sweet Chicken</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$29.99</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4 w-full'>
                    <Image src="/Poke-4.png" alt='' width={100} height={100}/>
                    <div className='w-80'>
                        <h1 className='uppercase text-xl font-bold'>Salmon Bowl</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$29.99</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                <div className='flex items-center justify-between mb-4 w-full'>
                    <Image src="/Poke-6.png" alt='' width={100} height={100}/>
                    <div className='w-80'>
                        <h1 className='uppercase text-xl font-bold'>Tuna Bowl</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$29.99</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            <div className='h-1/2 p-4 bg-gray-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-20 2xl:p-40 2xl:text-xl 2xl:gap-6'>
                <div className='flex justify-between'>
                    <span>Subtotal (3 items)</span>
                    <span>$89.97</span>
                </div>
                <div className='flex justify-between'>
                    <span>Service Cost</span>
                    <span> $0.00</span>
                </div>
                <div className='flex justify-between'>
                    <span>Delivery Cost</span>
                    <span className='text-green-600'>FREE!</span>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between'>
                    <span>Total (Incl. VAT)</span>
                    <span className='font-bold'> $109.32</span>
                </div>
                <button className='bg-gray-800 text-white rounded-md w-1/2 p-3 self-end min-w-fit shadow-xl drop-shadow-lg'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartPage