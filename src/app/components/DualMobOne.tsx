"use client";
import React,{useState} from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const DualMobOne = () => {

  const [deviceWidth, setdeviceWidth] = useState<number>(350)

  function handleDeviceDimension() {
    if(window.innerWidth >= 1024){
      setdeviceWidth(320)
    }
    if(window.innerWidth >= 1280){
      setdeviceWidth(350)
    }
    if(window.innerWidth >= 1536){
      
    }
  }

  return (
    <div className='block 2xl:px-20 px-0'>
      <div className='relative opacity-80'>
        <div className=' -rotate-6 z-10 '>
          <DeviceFrameset device="iPhone X" width={320} height={550}>
            <img src="/bitc.jpg" alt="" className=' h-full' />
          </DeviceFrameset>
        </div>
        <div className='rotate-6 z-20 absolute left-[8rem] top-[5rem]'>
          <DeviceFrameset device="iPhone X" width={320} height={550}>
            <img src="/eth.jpg" alt="" className='h-full' />
          </DeviceFrameset>
        </div>
      </div>
    </div>
  )
}

export default DualMobOne