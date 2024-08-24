import React from 'react'
import { dm_Sans } from '../font'

const pricing = () => {
    return (
        <div className='2xl:px-28 xl:px-24 lg:px-16 px-6'>
            <div className={`${dm_Sans.className} text-white flex flex-col md:items-center lg:mt-[3rem]`}>
                <h1 className='font-bold text-[3rem]'>
                    Pricing
                </h1>
                <p className=' text-[1.1rem]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                </p>
                <p className=' text-[1.1rem]'>
                    nulla suspendisse tortor aenean dis placerat. Scelerisque
                </p>
            </div>
            <div className='flex md:flex-row flex-col justify-between flex-wrap text-white py-[4rem] max-md:space-y-[1rem]'>
                <div className='flex items-center space-x-5'>
                    <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
                        <img src="/arrow.png" alt="" className=" block" />
                    </div>
                    <p>Send & receive</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
                        <img src="/wallet.png" alt="" className=" block" />
                    </div>
                    <p>Trading Charts</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
                        <img src="/graph-bar.png" alt="" className=" block" />
                    </div>
                    <p>
                        Wallet
                    </p>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
                        <img src="/loop.png" alt="" className=" block" />
                    </div>
                    <p>Real Time Trading</p>
                </div>
            </div>
            <div className={`${dm_Sans.className} text-white flex justify-between flex-wrap mb-[10rem] mt-[4rem]`}>
                <div className='h-[38.3rem] w-[24rem] bg-[#010D50] rounded-3xl py-[2rem] px-[2rem] mt-[1rem]'>
                    <div className='bg-[#0328EE] w-[6rem] py-[0.5rem] text-center  rounded-full font-medium'>
                        BASIC
                    </div>
                    <h2 className='font-bold text-[2.6rem] my-[1rem]'>$ 100 USD</h2>
                    <p className=' text-[1.1rem]'>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>
                    <div>
                        <h2 className=' text-[1.1rem] mt-[4rem]'>FEATURES</h2>
                        <ul className='list-disc marker:text-[#0328EE] mt-[1.5rem] space-y-[1rem]'>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                    </div>
                    <div>
                        <button className=' text-center w-full bg-[#0328EE] hover:bg-[#031FB4] cursor-pointer mt-[2rem] py-[1rem] rounded-full'>CONTACT US</button>
                    </div>
                </div>
                <div className='h-[38.3rem] w-[24rem] bg-[#010D50] rounded-3xl py-[2rem] px-[2rem] mt-[1rem]'>
                    <div className='bg-[#0328EE] w-[6rem] py-[0.5rem] text-center  rounded-full font-medium'>
                        PRO
                    </div>
                    <h2 className='font-bold text-[2.6rem] my-[1rem]'>$ 100 USD</h2>
                    <p className=' text-[1.1rem]'>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>
                    <div>
                        <h2 className=' text-[1.1rem] mt-[4rem]'>FEATURES</h2>
                        <ul className='list-disc marker:text-[#0328EE] mt-[1.5rem] space-y-[1rem]'>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                    </div>
                    <div>
                        <button className=' text-center w-full bg-[#0328EE] hover:bg-[#031FB4] cursor-pointer mt-[2rem] py-[1rem] rounded-full'>CONTACT US</button>
                    </div>
                </div>
                <div className='h-[38.3rem] w-[24rem] bg-[#010D50] rounded-3xl py-[2rem] px-[2rem] mt-[1rem]'>
                    <div className='bg-[#0328EE] w-[6rem] py-[0.5rem] text-center  rounded-full font-medium'>
                        EXPERT
                    </div>
                    <h2 className='font-bold text-[2.6rem] my-[1rem]'>$ 100 USD</h2>
                    <p className=' text-[1.1rem]'>Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.</p>
                    <div>
                        <h2 className=' text-[1.1rem] mt-[4rem]'>FEATURES</h2>
                        <ul className='list-disc marker:text-[#0328EE] mt-[1.5rem] space-y-[1rem]'>
                            <li>Everything included in Basic</li>
                            <li>Trading up to $1MM per month</li>
                            <li>Windows & macOS App</li>
                            <li>Premium Support</li>
                        </ul>
                    </div>
                    <div>
                        <button className=' text-center w-full bg-[#0328EE] hover:bg-[#031FB4] cursor-pointer mt-[2rem] py-[1rem] rounded-full'>CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pricing