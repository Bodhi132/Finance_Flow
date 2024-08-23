import React from 'react'
import Image from 'next/image'
import { dm_Sans } from '../font';

const Logo = () => {
    return (
        <div className='flex space-x-2 lg:items-center'>
            <div className='w-[3.5rem] h-[2.5rem] relative'>
                <Image
                    alt="Mountains"
                    src="/Finance-flow-logo.png"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h2 className={`${dm_Sans.className} text-white text-2xl lg:text-md`}>FinanceFlow</h2>
        </div>
    );
}

export default Logo
