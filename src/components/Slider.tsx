"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import sliderImg1 from '../../public/Slider-1.jpg'
import sliderImg2 from '../../public/Slider-2.jpg'
import sliderImg3 from '../../public/Slider-3.jpg'

const data = [
    {
        id: 1,
        title: "Ocean-Inspired Bowls, Bursting with Flavor!",
        image: sliderImg1
    },
    {
        id: 2,
        title: "Savor the Seas: Your Poke Paradise Awaits!",
        image: sliderImg2
    },
    {
        id: 3,
        title: "Bite into Bold Flavors with our Signature Poke Bowls!",
        image: sliderImg3
    }
]

const Slider = () => {
    const [currSlide, setCurrSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
            , 4000);
        return () => clearInterval(interval)
    },[])

    return (
        <div className='flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            <div className='flex items-center justify-center flex-col gap-8 bg-sky-100 text-gray-800 font-bold flex-1'>
                <h1 className='text-5xl text-center uppercase p-4 md:p-10 xl:text-6xl '>
                    {data[currSlide].title}
                </h1>
                <button className='bg-emerald-800 text-white uppercase p-4 rounded-md shadow-lg drop-shadow-lg'>Order Now</button>
            </div>
            <div className='w-full relative flex-1'>
                <Image src={data[currSlide].image} alt='' className='object-cover' fill></Image>
            </div>
        </div>
    )
}

export default Slider