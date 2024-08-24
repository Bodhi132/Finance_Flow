import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ImAppleinc } from "react-icons/im";
import FooterNav from './FooterNav';

import { dm_Sans } from '../font'

const Footer = () => {
  return (
    <div className={`h-[43rem] w-full bg-[#010D50] 2xl:px-28 xl:px-24 lg:px-16 px-10 ${dm_Sans.className} pt-[2.8rem]`}>
      <div className='w-full flex justify-between'>
        <div className='flex items-center space-x-3 mb-[4rem]'>
          <img src="/Finance-flow-logo.png" alt="" className=' block' />
          <p className=' text-white text-lg'>FinanceFlow</p>
        </div>
        <div className=' flex space-x-4'>
          <div className=' h-[2.3rem] w-[2.3rem] rounded-full flex items-center justify-center cursor-pointer' style={{ backgroundColor: 'hsla(360, 100%, 100%, 0.5)' }}>
            <FaInstagram className='block text-white' />
          </div>
          <div className=' h-[2.3rem] w-[2.3rem] rounded-full flex items-center justify-center cursor-pointer' style={{ backgroundColor: 'hsla(360, 100%, 100%, 0.5)' }}>
            <FaFacebookSquare className='block text-white' />
          </div>
          <div className=' h-[2.3rem] w-[2.3rem] rounded-full flex items-center justify-center cursor-pointer' style={{ backgroundColor: 'hsla(360, 100%, 100%, 0.5)' }}>
            <FaLinkedinIn className='block text-white' />
          </div>
        </div>
      </div>
      <div className=' sm:w-full flex flex-col md:flex-row justify-between mb-[4rem]'>
        <FooterNav />
        <div className=' lg:w-[27rem] xl:w-[32rem] md:w-[22rem] md:h-[17.6rem] mt-4 rounded-3xl sm:px-[3rem] px-[1rem] sm:py-[2rem] py-[1rem] lg:space-y-4 text-white' style={{ backgroundColor: 'hsla(360, 100%, 100%, 0.1)' }}>
          <h1 className=' font-bold'>DOWNLOAD OUR APPLICATION</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer </p>
          <div className='flex lg:flex-row flex-col lg:justify-between font-light'>
            <div className=' xl:w-[12rem] lg:w-[9rem] xl:h-[4.4rem] lg:h-[3.4rem] h-[2.5rem] bg-[#0328EE] rounded-full flex items-center justify-center space-x-[1rem] lg:my-[2rem] my-[0.4rem] sm:my-[1rem] hover:bg-[#031FB4] cursor-pointer'>
              <ImAppleinc className=' text-white text-2xl' />
              <p className=' text-white font-bold'>APP STORE</p>
            </div>
            <div className=' xl:w-[12rem] lg:w-[9rem] xl:h-[4.4rem] lg:h-[3.4rem] h-[2.5rem] bg-[#0328EE] rounded-full flex items-center justify-center space-x-[1rem] lg:my-[2rem] my-[0.4rem] sm:my-[1rem] hover:bg-[#031FB4] cursor-pointer'>
              <IoLogoGooglePlaystore className=' text-white text-2xl' />
              <p className=' text-white font-bold'>PLAY STORE</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className='text-white font-light mt-[2rem]'>All rights reserved</p>
    </div>
  )
}

export default Footer