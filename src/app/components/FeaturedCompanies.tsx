import React from 'react'
import { dm_Sans } from '../font'

const FeaturedCompanies = () => {

    const comapnies = [
        {
            name: 'Angellist',
            img: '/angellist.png'
        },
        {
            name: 'Coinbase',
            img: '/cb.png'
        },
        {
            name: 'producthunt',
            img: '/product hunt.png'
        },
        {
            name: 'Y Combinator',
            img: '/y_comb.png'
        },
        {
            name: 'Glassdoor',
            img: '/glassdoor.png'
        }
    ]

    return (
        <div className={`flex flex-col ${dm_Sans.className} text-white mt-7 space-y-7 lg:px-28`}>
            <h1 className=' text-center'>Finance flow has been featured on</h1>
            <div className='flex lg:justify-between flex-wrap justify-center space-x-4 gap-7 lg:gap-0'>
                {
                    comapnies.map((company, index) => (
                        <div key={index} className='flex justify-center items-center space-x-4'>
                            <img src={company.img} alt={company.name} className=' w-12 h-12' />
                            <p>{company.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedCompanies