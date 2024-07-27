import React from "react"
import Link from "next/link"
import { dm_Sans } from "../font"
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

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
    <>
      <div className=" 2xl:w-[40rem] xl:w-[37rem] lg:w-[30rem]">
        <ul className=" w-full lg:flex hidden justify-between">
          {
            links.map((link) => (
              <li key={link.id}>
                <Link href={`/${link.name.toLowerCase()}`} className={`${dm_Sans.className} text-white text-md`}>
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div>
          <RxHamburgerMenu className=" text-white lg:hidden" />
        </div>
      </div>
    </>

  )
}

export default Navbar