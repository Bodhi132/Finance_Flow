import React from 'react'
import Link from 'next/link'
import { dm_Sans } from '../font';

const FooterNav = () => {

    type LinkType = {
        id: number;
        name: string;
    };

    const links: LinkType[] = [
        {
            id: 1,
            name: 'HOME',
        },
        {
            id: 2,
            name: 'ABOUT',
        },
        {
            id: 3,
            name: 'PRICING',
        },
        {
            id: 4,
            name: 'TOKENS',
        },
        {
            id: 5,
            name: 'BLOG',
        },
        {
            id: 6,
            name: 'CONTACT US',
        }
    ];

    return (
        <div className='w-[17.5rem] space-y-4'>
            <h1 className=' text-white'>MENU</h1>
            <hr />
            <div className=' grid grid-cols-2 gap-3 list-none justify-between'>
                {
                    links.map((link) => (
                        <li key={link.id}>
                            <Link href={`/${link.name !== 'HOME' ? link.name.toLowerCase() :''}`} className={`${dm_Sans.className} text-white text-md`}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default FooterNav