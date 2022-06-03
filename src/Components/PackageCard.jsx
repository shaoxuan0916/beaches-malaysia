import React from 'react'



const PackageCard = (props) => {
    return (
        <div className='py-8 px-4 cursor-pointer'>
            <div className='flex flex-col w-full shadow-2xl rounded-2xl text-left'>
                <div className='relative'>
                    <img className='w-[100%] h-[20rem] object-cover rounded-t-2xl' src={props.img} />
                    {/* <div className='absolute w-full h-full rounded-2xl top-0 left-0 bg-gray-900/30'></div> */}
                </div>
                <div className='relative p-4 text-[#333]'>
                    <h4 className='text-xl font-bold text-[#333] py-2'>{props.title}</h4>
                    <div className='pt-4 pb-12 flex flex-col gap-2'>
                        <p>{props.roomType}</p>
                        <p>{props.meal ? 'Include 6 Meals (Buffet & BBQ)' : 'Not including any meals'}</p>
                        <p>Free Welcome Drinks</p>
                        <p>Free Boat Transfer</p>
                    </div>
                    <h5 className='absolute right-4 bottom-4 text-md'>from <span className='pl-2 text-2xl font-bold text-green-900'>{props.price}</span></h5>
                </div>
            </div>



        </div>
    )
}

export default PackageCard