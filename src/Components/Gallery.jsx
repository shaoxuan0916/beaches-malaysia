import React, { useState } from 'react'

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://source.unsplash.com//RN6ts8IZ4_0'
    },
    {
        url: 'https://source.unsplash.com//ZCRtfop2hZY'
    },
    {
        url: 'https://source.unsplash.com//DuD5D3lWC3c'
    },
    {
        url: 'https://source.unsplash.com//KS70QiSOecM'
    },
]

const Gallery = () => {

    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

    const nextSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }

    return (
        <div id='gallery' className='max-w-[1000px] mx-auto md:h-screen px-4 py-16 text-center'>
            <h2 className='text-[#386E72]'>Gallery</h2>
            <p className='text-xl md:text-2xl text-[#666] py-8'>“Happiness is a day at the beach!”</p>

            <div className='relative w-full flex justify-center items-center'>
                <BsArrowLeftCircleFill
                    onClick={prevSlide}
                    className='absolute top-[50%] cursor-pointer left-2 hover:text-slate-50/90 text-slate-50/50 text-2xl md:text-3xl'
                />
                <BsArrowRightCircleFill
                    onClick={nextSlide}
                    className='absolute top-[50%] cursor-pointer right-2 hover:text-slate-50/90 text-slate-50/50 text-2xl md:text-3xl'
                />
                {sliderData.map((item, index) => (
                    <div>
                        {index === slide && <img className='rounded-3xl' src={item.url} />}

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Gallery