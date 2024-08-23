"use client"
import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Logo from './Logo'
import Link from 'next/link'
import { dm_Sans } from '../font'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { Button as Btn } from '@/components/ui/button'

type LinkType = {
  id: number;
  name: string;
  link: string;
};

const Header = () => {


  const links: LinkType[] = [
    {
      id: 1,
      name: 'HOME',
      link: ''
    },
    {
      id: 2,
      name: 'ABOUT',
      link: 'about'
    },
    {
      id: 3,
      name: 'PRICING',
      link: 'pricing'
    },
    {
      id: 4,
      name: 'TOKENS',
      link: 'tokens'
    },
    {
      id: 5,
      name: 'BLOG',
      link: 'blog'
    },
    {
      id: 6,
      name: 'CONTACT US',
      link: 'contact-us'
    }
  ];

  const [menu, setMenu] = useState(false)

  return (
    <div className={`space-y-[2rem] max-lg:mb-[0.5rem] max-lg:w-full max-lg:z-[999] ${menu && 'max-lg:h-full bg-blue-700 max-lg:fixed'}`}>
      <div className='w-full flex flex-row  max-lg:hidden 2xl:py-7 xl:py-6 lg:py-6 py-4 2xl:px-28 xl:px-24 lg:px-16 px-12 2xl:space-x-28 xl:space-x-20 lg:space-x-12 md:space-x-9'>
        <Logo />
        <div className=' w-full flex lg:items-center justify-end lg:justify-between'>
          <Navbar />
          <Button />
        </div>
      </div>
      <div className='lg:hidden w-full'>
      {!menu && <div className='flex justify-between px-12'>
          <Logo />
          <div className=''>
            <RxHamburgerMenu className=" text-white text-2xl lg:hidden" onClick={() => setMenu((prev) => !prev)} />
          </div>
        </div>}
          {
            menu && (
              <div className="fixed top-0 left-0 w-full h-full origin-top py-[4rem]">
                <div className='flex justify-between px-12'>
                  <Logo />
                  <div className=''>
                    <RxHamburgerMenu className=" text-white text-2xl lg:hidden" onClick={() => setMenu((prev) => !prev)} />
                  </div>
                </div>
                <div className='z-[999] py-[3rem] w-full h-full flex flex-col px-12'>
                  <div 
                  className="w-full text-white flex flex-col items-center space-y-[1rem]"
                  >
                    {
                      links.map((link) => (
                        <div key={link.id} className='block overflow-hidden'>
                          <Link href={`/${link.link}`} className={`${dm_Sans.className} text-white text-[2.5rem] font-bold`} onClick={() => setMenu((prev) => !prev)}>
                            {link.name}
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                  <Btn className='text-white mt-[1.5rem] bg-[#010D50] rounded-full py-[2rem] text-[1.5rem]'>
                    Download
                  </Btn>
                </div>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default Header