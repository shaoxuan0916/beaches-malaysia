import React from 'react'

import BeachCard from './BeachCard'

const Destinations = () => {
    return (
        <div id='destinations' className='max-w-[1240px] mx-auto py-16 text-center'>
            <h2 className='text-[#386E72] px-4'>Beaches in Malaysia</h2>

            <div className='grid md:grid-cols-2 gap-8 my-12 px-8 xl:p-0'>
                <BeachCard 
                    img='https://source.unsplash.com/nHWczyFxIEA'
                    title='Lang Tengah'
                />
                <BeachCard 
                    img='https://source.unsplash.com/tLvBvOm4XLs'
                    title='Redang Island'
                />
                <BeachCard 
                    img='https://source.unsplash.com/WEa8A8LVM7A'
                    title='Tioman Island'
                />
                <BeachCard 
                    img='https://source.unsplash.com/-rry_vL0hCg'
                    title='Langkawi'
                />

            </div>


        </div>
    )
}

export default Destinations