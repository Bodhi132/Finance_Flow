"use client"
import React from "react"
import { useState } from "react";
import Link from "next/link"
import { dm_Sans } from "../font"
import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  const context = useContext(MenuContext);

  const {toggleMenu} = context;

  type LinkType = {
    id: number;
    name: string;
    link: string;
  };

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

  return (
    <>
      <div className=" 2xl:w-[40rem] xl:w-[37rem] lg:w-[30rem]">
        <ul className=" w-full lg:flex hidden justify-between">
          {
            links.map((link) => (
              <li key={link.id}>
                <Link href={`/${link.link}`} className={`${dm_Sans.className} text-white text-md`}>
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>

  )
}

export default Navbar