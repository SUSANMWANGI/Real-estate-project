/*import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 width-full z-10'>
      
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          
        <img  src={assets.logo} alt="" />
        
        <ul className='hidden md:flex gap-7 text-white font-semibold'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
        </ul>
        <button className='hidden md:block px-8 bg-white py-2 rounded-full'>Sign Up</button>
        
        </div>
        
    </div>
  )
}

export default <Navbar></Navbar>*/ 
import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

useEffect(() => {
  if(showMobileMenu) {
    document.body.style.overflow = 'hidden';}else{
    document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
},[showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </div>

        {/* Center - Links */}
        <ul className="hidden md:flex flex-1 justify-center gap-7 text-white font-semibold">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
        </ul>

        {/* Right - Button */}
        <div className="flex-shrink-0">
          <button className="hidden md:block px-8 bg-white py-2 rounded-full text-black font-semibold hover:bg-gray-200">
            Sign Up
          </button>
          <img src={assets.menu_icon} onClick={()=>setShowMobileMenu(true)} className='md:hidden w-7' alt="" />
        </div>
       {/* ------------mobile menu----------------*/}
       <div className={`md:hidden ${showMobileMenu?'fixed w-full':'h-0 w-0'}  right-0 bottom-0 top-0 overflow-hidden bg-white transotion-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img src={assets.cross_icon} onClick={()=>setShowMobileMenu(false)} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setShowMobileMenu(false)}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setShowMobileMenu(false)}  href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setShowMobileMenu(false)}  href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>setShowMobileMenu(false)}   href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
       </div>

      </div>
    </div>
  )
}

export default Navbar

