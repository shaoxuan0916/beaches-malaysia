import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { BiSearch } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa"




const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }


    return (
        <div id='home' className='absolute w-full z-10 text-white flex justify-between items-center h-20 px-4 md:px-8'>
            <div>
                <h1 className={logo ? 'hidden' : 'flex'}>BEACHES.</h1>
            </div>

            <ul className='hidden md:flex'>
                <li><Link activeClass="active" to="home" smooth={true} offset={-20} duration={1500} >Home</Link></li>
                <li><Link activeClass="active" to="destinations" smooth={true} offset={-20} duration={1500} >Destinations</Link></li>
                <li><Link activeClass="active" to="packages" smooth={true} offset={-20} duration={1500} >Packages</Link></li>
                <li><Link activeClass="active" to="gallery" smooth={true} offset={-20} duration={1500} >Gallery</Link></li>
                <li><Link activeClass="active" to="book" smooth={true} offset={-20} duration={1500} >Book</Link></li>
            </ul>

            <div className='hidden md:flex gap-4'>
                <BiSearch size={25} className='cursor-pointer hover:text-[#386E72]' />
                <BsPerson size={25} className='cursor-pointer hover:text-[#386E72]' />
            </div>


            {/* Hamburger Menu */}

            <div onClick={handleNav} className='md:hidden cursor-pointer z-10'>
                {nav ? <AiOutlineClose size={25} className='text-black' /> : <HiMenuAlt4 size={25} />}
            </div>

            {/* Mobile menu dropdown */}

            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 px-4 py-7 w-full bg-slate-100' : 'hidden'}>
                {/* <h1>BEACHES.</h1> */}
                <ul className='text-black'>
                <li><Link onClick={handleNav} activeClass="active" to="home" smooth={true} duration={1000} >Home</Link></li>
                <li><Link onClick={handleNav} activeClass="active" to="destinations" smooth={true} duration={1000} >Destinations</Link></li>
                <li><Link onClick={handleNav} activeClass="active" to="packages" smooth={true} duration={1000} >Packages</Link></li>
                <li><Link onClick={handleNav} activeClass="active" to="gallery" smooth={true} duration={1000} >Gallery</Link></li>
                <li><Link onClick={handleNav} activeClass="active" to="book" smooth={true} duration={1000} >Book</Link></li>
                    <div className='flex flex-col gap-4 py-4'>
                        <button>Search</button>
                        <button>Sign In</button>
                    </div>
                    <div className='flex justify-around py-8'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaPinterest className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </ul>


            </div>
        </div>
    )
}

export default Navbar