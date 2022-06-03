import React from 'react'

const Hero2 = () => {
  return (
    <div className=''>

      <div className='max-w-[1240px] mx-auto py-20 px-4 text-center'>
        <h2 className='text-[#386E72]'>All Inclusive Resorts</h2>
        <p className='text-[#666] py-8 text-xl md:text-2xl'>On Malaysia's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className='rounded-xl w-full h-full object-cover col-span-2 row-span-2 md:col-span-3' src='https://source.unsplash.com/Oke1-WCiYj0' />
          <img className='rounded-xl w-full h-full object-cover' src='https://source.unsplash.com/8xXYqz5X7yo' />
          <img className='rounded-xl w-full h-full object-cover' src='https://source.unsplash.com/SI8xM3Ernvg' />
          <img className='rounded-xl w-full h-full object-cover' src='https://source.unsplash.com/KMn4VEeEPR8' />
          <img className='rounded-xl w-full h-full object-cover' src='https://source.unsplash.com/BTC2vY45Gsc' />
        </div>
      </div>

    </div>
  )
}

export default Hero2