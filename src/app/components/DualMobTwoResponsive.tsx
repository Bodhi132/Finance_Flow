import React from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const DualMobTwoResponsive = () => {
    return (
            <div className=' relative w-full'>
                <div className=' -rotate-[13deg] z-20 absolute left-[3rem] top-[5rem]'>
                    <DeviceFrameset device="iPhone X" width={200}>
                        <img src="/crypt_btc.jpg" alt="" />
                    </DeviceFrameset>
                </div>
                <div className=' rotate-12 z-10 absolute left-[23rem] top-[5rem]'>
                    <DeviceFrameset device="iPhone X" width={200}>
                        <img src="/bitc.jpg" alt="" />
                    </DeviceFrameset>
                </div>
            </div>
    )
}

export default DualMobTwoResponsive