import React from 'react'
import PackageCard from './PackageCard'

const Packages = () => {
    return (
        <div id='packages' className='max-w-[1240px] mx-auto py-16 text-center'>

            <h2 className='text-[#386E72]'>Packages</h2>
            <p className='text-[#666] text-xl md:text-2xl py-4'>All in one packages. Easy and Relax.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-2'>
                <PackageCard
                    title='Redang 3D2N Snorkel Package'
                    img='https://source.unsplash.com/IGgykJJMxJA'
                    roomType='Deluxe Twin Room'
                    meal={false}
                    price='RM 298'
                />
                <PackageCard
                    title='Langkawi 3D2N Joyful Package'
                    img='https://source.unsplash.com/fFx7m5_07Ro'
                    roomType='Deluxe Suite Seaview'
                    meal={true}
                    price='RM 998'
                />
                <PackageCard
                    title='Tioman 4D3N Luxury Package'
                    img='https://source.unsplash.com/ao1ZaY55bvs'
                    roomType='Beach Villa'
                    meal={true}
                    price='RM 1698'
                />
            </div>

        </div>
    )
}

export default Packages