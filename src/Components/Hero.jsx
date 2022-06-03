import React from 'react'
import HeroVideo from '../assets/hero2.mp4'


import { BiSearch } from "react-icons/bi"

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video
                className='w-full h-full object-cover'
                src={HeroVideo}
                autoPlay
                loop
                muted
            />

            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40'></div>

            <div className='absolute w-full h-full top-0 flex flex-col gap-4 justify-center text-center text-white p-4'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>First Class Travel</h2>
                <h3>Top 1% Beaches in Malaysia</h3>
                <form className='flex justify-between items-center w-[90%] max-w-[700px] mx-auto my-4 bg-gray-100 p-4 text-black border rounded-xl'>
                    <div>
                        <input
                        className='bg-transparent w-[220px] md:w-[400px] focus:outline-none'
                        placeholder='Search Beach'
                        type='text'    
                        />
                    </div>
                    <div>
                        <BiSearch className='icon' size={20} />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Hero