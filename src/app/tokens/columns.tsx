"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { dm_Sans } from "../font"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Crypto = {
  name: string
  description: string
  symbol: string
  price: number
  marketCap: number
  volume: number
  website: string
  image: string
}

export const columns: ColumnDef<Crypto>[] = [
  {
    accessorKey: "name",
    header: () => <div className={`${dm_Sans.className} font-bold text-white`}>NAME</div>,
    cell: ({ row }) => {
      const symbol = row.original.symbol; // Access the symbol from the original row data
      const iconUrl = row.original.image;
      return (
        <div className="flex font-bold items-center space-x-[1rem]">
          <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full">
            <img src={iconUrl} alt="image" className=" object-fill"/>
            {/* <p>{iconUrl}</p> */}
          </div>
          <p>{row.getValue("name")}</p>
          <div className="bg-[#010D50] px-4 py-2 rounded-full">{symbol}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "description",
    header: () => <div className={`${dm_Sans.className} font-bold text-white`}>DESCRIPTION</div>,
    cell: () => {
      return <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        Corporis qui assumenda earum voluptatem architecto aperiam.</div>
    },
  },
  {
    accessorKey: "price",
    header: () => <div className={`${dm_Sans.className} font-bold text-white`}>PRICE</div>,
    cell: ({ row }) => {
      return <div className=" font-bold flex max-sm:space-x-3"><p>$</p><p>{row.getValue("price")}</p></div>
    },
  },
  {
    accessorKey: "marketCap",
    header: () => <div className={`${dm_Sans.className} font-bold text-white`}>MARKET CAP</div>,
    cell: ({ row }) => {
      return <div className=" font-bold flex max-sm:space-x-3"><p>$</p><p>{row.getValue("marketCap")}</p></div>
    },
  },
  {
    accessorKey: "volume",
    header: () => <div className={`${dm_Sans.className} font-bold text-white`}>VOLUME</div>,
    cell: ({ row }) => {
      return <div className=" font-bold flex max-sm:space-x-3"><p>$</p><p>{row.getValue("volume")}</p></div>
    },
  },
  {
    accessorKey: "website",
    header: () => <div className={`${dm_Sans.className} font-bold text-white`}>WEBSITE</div>,
    cell: ({ row }) => {
      return <div className="cursor-pointer">
        <Link href={row.getValue("website")} className=" underline">Visit Website</Link>
      </div>
    },
  },
]
