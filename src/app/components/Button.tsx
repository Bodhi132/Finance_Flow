import React from 'react'
import { dm_Sans } from '../font'

const Button = () => {
return (
    <div className={`w-44 h-11 bg-[#0328EE] rounded-full hidden lg:flex items-center justify-center text-white ${dm_Sans.className}`}>
        DOWNLOAD APP
    </div>
)
}

export default Button