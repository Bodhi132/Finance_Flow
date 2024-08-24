import React from 'react'
import { dm_Sans } from '../font'
import { ImAppleinc } from "react-icons/im";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const DownloadAndroidCard = () => {
  return (
    <div className={` bg-[#010D50] 2xl:w-[35.3rem] xl:w-[30rem] lg:w-[24rem] h-[48.3rem] rounded-3xl overflow-hidden px-[3rem] ${dm_Sans.className} py-[2rem] md:space-y-[2rem] lg:space-y-[1rem]]`}>
        <h1 className=' text-white xl:text-[3rem] text-[2rem] font-medium'>Download for Android</h1>
        <p className='text-white font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.</p>
        <div>
            <div className=' w-[12rem] h-[4.4rem] bg-[#0328EE] hover:bg-[#031FB4] cursor-pointer rounded-full flex items-center justify-center space-x-[1rem] my-[2rem]'>
                <IoLogoGooglePlaystore className=' text-white text-2xl'/>
                <p className=' text-white font-bold'>PLAY STORE</p>
            </div>
            <DeviceFrameset
            device='Galaxy Note 8'
            color='black'
            >
                <img src="/bit_man.jpg" alt="" className='h-[80%]'/>
            </DeviceFrameset>
        </div>
    </div>
  )
}

export default DownloadAndroidCard