"use client"
import { dm_Sans } from '../font';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Page() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)
    const [topic, setTopic] = useState('All');
    interface featured {
        tagline: string;
        url: string;
        media: {
            url: string;
            type: string;
        }[];
        description: string; // Add the 'description' property
    }

    const topics: string[] = ['All', 'Tools', 'Software', 'Productivity'];

    const [featuredNews, setFeaturedNews] = useState<featured | undefined>();

    useEffect(() => {
        const fetchProductHuntData = async () => {
            try {
                // Fetch the access token
                const tokenResponse = await fetch('https://api.producthunt.com/v2/oauth/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        client_id: process.env.NEXT_PUBLIC_PRODUCT_HUNT_CLIENT_ID,
                        client_secret: process.env.NEXT_PUBLIC_PRODUCT_HUNT_CLIENT_SECRET,
                        grant_type: 'client_credentials',
                    }),
                });

                const tokenData = await tokenResponse.json();
                const token = tokenData.access_token;

                // Fetch the product data
                const response = await fetch('https://api.producthunt.com/v2/api/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        query: `
              {
                posts(first : 50) {
                  edges {
                    node {
                      id
                      name
                      tagline
                      url
                        thumbnail {
                        url
                      }
                        description
                        media {
                            url
                            type
                        }
                        topics {
                        edges {
                          node {
                            name
                          }
                        } 
                      }
                        user {
                        id
                        name
                        username
                      }
                        createdAt
                    }
                  }
                pageInfo {
                    endCursor
                    hasNextPage
                  }
                }
              }
            `,
                    }),
                });

                const data = await response.json();
                console.log(data.data.posts.edges);
                console.log(data.data.posts.edges[0].node);


                setProducts(data.data.posts.edges);
                setFeaturedNews(data.data.posts.edges[0].node);
            } catch (error) {
                console.error('Error fetching data from Product Hunt:', error);
            }
        };

        fetchProductHuntData();
    }, []);

    const dateFormatter = (dateStr: string) => {
        const date = new Date(dateStr);

        const day = String(date.getDate()).padStart(2, '0');
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
        const year = date.getFullYear();

        const formattedDate = `${month} ${day},${year}`;

        return formattedDate;
    }

    return (
        <div className='text-white'>
            <div>
                <div className=" 2xl:px-28 xl:px-24 lg:px-16 px-10 lg:mt-[3rem] space-y-[3rem] pb-5">
                    <div className={` flex flex-col lg:flex-row md:items-center md:justify-center lg:justify-between ${dm_Sans.className}`}>
                        <h1 className=" text-white font-semibold xl:text-[4rem] text-[4.5rem]">Blog</h1>
                        <div className=" text-white xl:text-sm lg:text-xs font-light md:text-center lg:text-left">
                            <p>It&apos;s the place to launch your ideas and discover your next favorite product.</p>
                            <p> We&apos;re a welcoming and supportive community.</p>
                        </div>
                    </div>
                    <div className='w-full bg-[#010D50] md:h-[21rem] md:rounded-l-3xl rounded-3xl flex max-md:flex max-md:flex-col justify-between relative '>
                        <div className='overflow-hidden rounded-t-3xl relative md:hidden'>
                            {featuredNews && <img src={featuredNews.media[0].url} alt="" className='w-full h-full object-fill opacity-70' />}
                        </div>
                        <div className={`w-[6.5rem] h-[2.5rem] md:hidden rounded-full bg-[#007AFF] flex justify-center items-center ${dm_Sans.className} font-medium absolute top-[10rem] left-[1rem]`}>
                            Featured
                        </div>
                        <div className='md:w-[50%] h-3/6 md:h-full py-[3rem] px-[2rem] md:px-[2rem] lg:px-[3rem] overflow-hidden text-ellipsis ...'>
                            <div className={`w-[6.5rem] h-[2.5rem] rounded-full bg-[#007AFF] flex justify-center items-center ${dm_Sans.className} font-medium max-md:hidden`}>
                                Featured
                            </div>
                            <div className={`${dm_Sans.className} space-y-[1rem] mt-[1rem]`}>
                                <p className='font-bold text-[1.5rem]'>
                                    {featuredNews && featuredNews.tagline}
                                </p>
                                <p>
                                    {
                                        featuredNews && featuredNews.description
                                    }
                                </p>
                            </div>
                        </div>
                        <div className='overflow-hidden w-3/6 max-md:hidden'>
                            {featuredNews && <img src={featuredNews.media[0].url} alt="" className='w-full h-full object-fill opacity-70' />}
                        </div>
                    </div>
                </div>
                <div className={`w-full md:h-[15rem] bg-[#0328EE] mt-[3rem] ${dm_Sans.className} max-md:py-[4rem]`}>
                    <div className='flex max-md:flex-col justify-between md:items-center h-full 2xl:px-28 xl:px-24 lg:px-16 px-10 max-md:space-y-[2rem]'>
                        <div className='flex max-md:flex-col md:items-center md:space-x-[2rem] max-md:space-y-[2rem]'>
                            <div className=' w-[4.3rem] h-[4.3rem] bg-white rounded-3xl flex items-center justify-center self-center'>
                                <img src="/newsLetter.png" alt="" className='block' />
                            </div>
                            <p className='font-bold text-[1.5rem] xl:text-[2.7rem]'>
                                Subscribe to our crypto news <span className='xl:hidden '>weekly newsletter!</span> <br /> <span className='max-xl:hidden'>weekly newsletter!</span>
                            </p>
                        </div>
                        <div className='md:relative md:w-[25rem] h-[4rem] rounded-full flex max-md:flex-col items-center overflow-hidden z-10'>
                            <input type="text" name="" id="" className='w-full h-full pl-[1rem] z-20 text-black' placeholder='Enter email address' />
                            <button className='absolute text-white right-2 bg-[#0328EE] h-[80%] px-[2rem] block rounded-full z-30 max-md:hidden'>SUBSCRIBE</button>
                        </div>
                        <button className='text-white right-2 bg-[#031FB4] h-[4rem] px-[2rem] block rounded-full z-30 font-bold md:hidden'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className=" 2xl:px-28 xl:px-24 lg:px-16 px-10 mt-[3rem] space-y-[3rem] pb-5">
                    <div className={` flex flex-col lg:flex-row md:justify-center lg:justify-between ${dm_Sans.className}`}>
                        <h1 className=" text-white font-semibold xl:text-[4rem] lg:text-[4.5rem]">Latest Posts</h1>
                        <div className=" text-white xl:text-sm lg:text-xs font-light md:text-center lg:text-left flex flex-col lg:flex-row max-md:space-y-[1rem] md:space-x-[1rem] lg:items-center">
                            {
                                topics.map((ele, index) => (
                                    <div key={index} className={`cursor-pointer ${ele === topic ? 'bg-[#0328EE]' : 'bg-[rgb(255,255,255,0.1)]'} px-[1rem] lg:px-[2rem] xl:px-[3rem] lg:py-[1rem] flex items-center rounded-full justify-center m-0`} onClick={() => setTopic(ele)}>{ele}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                        {products.filter((ele, ind) => {
                            if (topic === 'All') {
                                return ele;
                            }
                            else {
                                if (ele.node.topics.edges.map((ele) => ele.node.name).includes(topic)) {
                                    console.log(ele);
                                    return ele;

                                }
                            }
                        }).length === 0 ? (
                            <div className="text-white text-center w-full mt-4">
                                Not Found
                            </div>
                        ) : products.slice(page * 6 - 6, page * 6).map((product) =>
                        (                            
                            <Link href={product.node.url || '#'}  key={product.node.id} className={` lg:w-[23.9rem] rounded-3xl overflow-hidden flex flex-col bg-[#010D50] ${dm_Sans.className} mb-[2rem] pb-[1rem]`}>
                                <div >
                                    <div className=' h-[13.4rem] w-full mb-[5rem]'>
                                        <img src={product.node.media[0].url} alt="" className='w-full h-[15rem] object-fill' />
                                    </div>
                                    <div className='text-white space-y-[2rem] px-[1rem]'>
                                        <h1 className=' font-bold text-[1.4rem]'>

                                            {product.node.tagline}
                                        </h1>
                                        <p className=' font-light leading-loose'>
                                            {product.node.description}
                                        </p>
                                        <p className='font-bold'>
                                            {
                                                dateFormatter(product.node.createdAt)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                        }
                        <div className='w-full flex justify-center'>
                            <Pagination>
                                <PaginationPrevious
                                    onClick={() => setPage(page - 1)}
                                    aria-disabled={page <= 1}
                                    tabIndex={page <= 1 ? -1 : undefined}
                                    className={
                                        `${page <= 1 ? "pointer-events-none opacity-50" : ' cursor-pointer'} text-white rounded-full bg-[#010D50]`
                                    }
                                />
                                <PaginationContent>
                                    {Array.from({ length: Math.ceil(products.length / 6) }, (_, i) => (
                                        <PaginationItem key={i} onClick={() => setPage(i + 1)}>
                                            <PaginationLink className={`rounded-full ${i === (page - 1) ? 'text-[#0328EE]' : 'text-white'} cursor-pointer`}>{i + 1}</PaginationLink>
                                        </PaginationItem>
                                    ))}
                                </PaginationContent>
                                <PaginationNext
                                    onClick={() => setPage(page + 1)}
                                    aria-disabled={page >= Math.ceil(products.length / 6)}
                                    tabIndex={page >= Math.ceil(products.length / 6) ? -1 : undefined}
                                    className={
                                        `${page >= Math.ceil(products.length / 6) ? "pointer-events-none opacity-50" : ' cursor-pointer'} text-white rounded-full bg-[#010D50]`
                                    }
                                />
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
