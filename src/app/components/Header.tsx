import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Logo from './Logo'

const Header = () => {
    return (
        <div className='w-full flex flex-row 2xl:py-7 xl:py-6 lg:py-6 py-4 2xl:px-28 xl:px-24 lg:px-16 px-12 items-center 2xl:space-x-28 xl:space-x-20 lg:space-x-12 md:space-x-9'>
            <Logo />
            <div className=' w-full flex items-center justify-end lg:justify-between'>
                <Navbar />
                <Button />
            </div>
        </div>
    )
}

export default Header