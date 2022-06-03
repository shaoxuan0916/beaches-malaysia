import React from 'react'

const BeachCard = (props) => {
    return (
        <div className='relative cursor-pointer'>
            <img className='rounded-2xl' src={props.img} alt='/' />
            <div className='rounded-2xl w-full h-full top-0 left-0 bg-gray-900/40 absolute'>
                <p className='absolute left-8 bottom-6 text-white font-bold text-2xl'>{props.title}</p>
            </div>
        </div>
    )
}

export default BeachCard