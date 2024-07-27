import React from 'react'
import { dm_Sans } from '../font'

const NewsCard = () => {
    return (
        <div className={` lg:h-[34rem] xl:w-[24rem] lg:w-[18rem] lg:pb-0 pb-4 rounded-3xl overflow-hidden flex flex-col space-y-6 ${dm_Sans.className} relative`} style={{ backgroundColor: 'hsla(231, 98%, 47% , 0.2)' }}>
            <img src="./laptop.jpg" className=' block' alt="" />
            <div className={` w-[8rem] h-[2.3rem] bg-[#0328EE] rounded-full absolute xl:top-[13rem] lg:top-[9rem] left-[2rem] text-white flex items-center justify-center ${dm_Sans.className}`}>
                <p>PRODUCTS</p>
            </div>
            <div className=' space-y-6 px-8'>
                <h1 className=' text-white text-xl font-semibold'>The Basics about Cryptocurrency</h1>
                <p className=' text-white font-light'>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.</p>
                <hr className=' opacity-10'/>
                <div className=' flex space-x-3 items-center text-white'>
                    <img src="/newsman.png" className=' h-[3.8rem] w-[3.8rem] rounded-full block' />
                    <div>
                        <p>Alex Turner</p>
                        <p className=' font-light'>August 2, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard