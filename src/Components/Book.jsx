import React from 'react'

const Book = () => {
    return (
        <div id='book' className=''>
            <div className='max-w-[1240px] mx-auto pt-16 pb-[15rem]  text-center'>
                <h2 className='text-[#386E72]'>BOOK NOW</h2>
                <p className='text-[#666]  pt-4 pb-8 text-xl md:text-2xl'>Get an  Additional 20% Off</p>

                <form className='w-full max-w-[700px] px-8 mx-auto text-left'>
                    {/* destinations */}
                    <div className='flex flex-col my-8'>
                        <label className='text-lg pl-2'>Destinations</label>
                        <select className='border-2 border-[#95C5C8] rounded-xl p-2 my-4'>
                            <option>-- Select Your Destinations --</option>
                            <option>Lang Tengah</option>
                            <option>Redang Island</option>
                            <option>Tioman Island</option>
                            <option>Langkawi</option>
                        </select>
                    </div>

                    {/* check in */}
                    <div className='flex flex-col my-8'>
                        <label className='text-lg pl-2'>Check-In</label>
                        <input className='border-2 border-[#95C5C8] rounded-xl p-2 my-4' type='date' />
                    </div>

                    {/* check out */}
                    <div className='flex flex-col my-8'>
                        <label className='text-lg pl-2'>Check-Out</label>
                        <input className='border-2 border-[#95C5C8] rounded-xl p-2 my-4' type='date' />
                    </div>

                    <button className='w-full text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Rates & Avaibilities</button>

                </form>
            </div>
        </div>
    )
}

export default Book