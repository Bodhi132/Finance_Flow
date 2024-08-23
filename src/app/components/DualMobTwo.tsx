import React from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const DualMobTwo = () => {
    return (
            <div className='relative'>
                <div className=' -rotate-[13deg] z-20 absolute left-[3rem] md:top-[5rem]'>
                    <DeviceFrameset device="iPhone X" width={350}>
                        <img src="/crypt_btc.jpg" alt="" />
                    </DeviceFrameset>
                </div>
                <div className=' rotate-12 z-10 absolute left-[23rem] md:top-[5rem]'>
                    <DeviceFrameset device="iPhone X" width={350}>
                        <img src="/bitc.jpg" alt="" />
                    </DeviceFrameset>
                </div>
            </div>
    )
}

export default DualMobTwo