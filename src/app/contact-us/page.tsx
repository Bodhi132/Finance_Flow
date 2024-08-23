import React from 'react'
import { Suspense } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { dm_Sans } from '../font'

const page = () => {
  return (
    <div className='w-full'>
      <div className={`2xl:px-28 xl:px-24 lg:px-16 px-10 text-white ${dm_Sans.className} lg:mt-[2.5rem] w-full`}>
        <span className="h-[42rem] w-[42rem] bg-[#010D50] absolute top-[-14rem] right-[-13rem] rounded-full z-[-10] blur-2xl opacity-50 p-10"
        >
        </span>
        <h1 className='font-bold text-[4.2rem] mb-[1.5rem]'>Get in touch</h1>
        <div className='md:flex md:justify-between md:space-x-[3rem] space-y-[1rem]'>
          <div className='md:grid md:grid-cols-2 md:w-[60%] md:gap-7 max-md:space-y-[2rem]'>
            <div className='space-y-2'>
              <Label className='font-bold text-[1.1rem]'>Name</Label>
              <Input type="email" placeholder="Full Name" className='bg-[#010D50] border-0 rounded-full text-white py-[2rem] px-[1rem]' />
            </div>
            <div className='space-y-2'>
              <Label className='font-bold text-[1.1rem]'>Email</Label>
              <Input type="email" placeholder="email@gmail.com" className='bg-[#010D50] border-0 rounded-full text-white py-[2rem] px-[1rem]' />
            </div>
            <div className='space-y-2'>
              <Label className='font-bold text-[1.1rem]'>Comapny</Label>
              <Input type="email" placeholder="Comapny Name" className='bg-[#010D50] border-0 rounded-full text-white py-[2rem] px-[1rem]' />
            </div>
            <div className='space-y-2'>
              <Label className='font-bold text-[1.1rem]'>Subject</Label>
              <Input type="email" placeholder="How can we help?" className='bg-[#010D50] border-0 rounded-full text-white py-[2rem] px-[1rem]' />
            </div>
            <div className='col-span-2 space-y-2'>
              <Label className='font-bold text-[1.1rem]'>Message</Label>
              <Textarea placeholder="Your Message" className='bg-[#010D50] border-0 rounded-md text-white' />
            </div>
          </div>
          <div className='w-auto md:w-[40%] flex flex-col space-y-[1rem] text-wrap'>
            <h2 className='font-bold text-[1.4rem]'>Want to reach us directly?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Id dui pharetra elementum sit id sagittis non donec egestas.
            </p>
            <div className=' space-y-[1rem]'>
              <div className='flex space-x-[1rem]'>
                <div className=' w-[2.4rem] h-[2.4rem] rounded-full bg-[#0328EE] flex justify-center items-center'>
                  <img src="/support.png" alt="" />
                </div>
                <p>contact@example.com</p>
              </div>
              <div className='flex space-x-[1rem]'>
                <div className=' w-[2.4rem] h-[2.4rem] rounded-full bg-[#0328EE] flex justify-center items-center'>
                  <img src="/support.png" alt="" />
                </div>
                <p>support@example.com</p>
              </div>
              <div className='flex space-x-[1rem]'>
                <div className=' w-[2.4rem] h-[2.4rem] rounded-full bg-[#0328EE] flex justify-center items-center'>
                  <img src="/support.png" alt="" />
                </div>
                <p>press@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <Button className='mt-[2rem] py-[1.7rem] px-[1.5rem] rounded-full bg-[#0328EE]'>SEND MESSAGE</Button>
        <div className='flex flex-col md:px-[10rem] mt-[3rem] py-[3rem] md:py-[1rem]'>
          <h1 className='text-center font-bold text-[4.2rem]'>FAQ</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Question 1</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus commodi voluptas ducimus facilis amet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Question 2</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus commodi voluptas ducimus facilis amet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Question 3</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus commodi voluptas ducimus facilis amet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Question 4</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus commodi voluptas ducimus facilis amet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Question 5</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus commodi voluptas ducimus facilis amet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default page