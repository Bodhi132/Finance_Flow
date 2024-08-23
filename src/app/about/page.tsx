import React from 'react'
import { dm_Sans } from '../font'
import Image from 'next/image'
import planet from '../../../public/planet.svg'
import Companies from '../components/Companies'

const about = () => {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col sm:items-center sm:text-center text-white space-y-3 sm:mb-[8rem] mb-[2.5rem] 2xl:px-28 xl:px-24 lg:px-16 px-12 mt-[1.2rem] sm:mt-[5rem] relative'>
        <div className="h-[45rem] w-[45rem] bg-[#0326eec2] absolute md:left-[5rem] rounded-full z-[-10] blur-3xl opacity-20 p-10"
        >
        </div>
        <h1 className='md:w-[40rem] sm:text-[4rem] text-[2rem] font-semibold'>About Finance Flow</h1>
        <p className='md:w-[40rem] text-[1.3rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Feugiat nulla suspendisse tortor aenean dis placerat.
          <span className='max-sm:hidden'> Scelerisque imperdiet vitae dolor non aliquam. Malesuada.</span>
        </p>
      </div>
      <div className={`md:px-28 px-10 text-white ${dm_Sans.className}`}>
        <div className={`flex flex-col md:flex-row max-sm:space-y-[1rem] ${dm_Sans.className} md:items-center md:justify-between my-[2rem] relative`}>
          <h1 className=" text-white text-3xl font-semibold">What drives Finance Flow?</h1>
          <p className=" text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className='lg:hidden'> Feugiat nulla suspendisse tortor aene.</span> <br /><span className='max-md:hidden'> Feugiat nulla suspendisse tortor aene.</span></p>
        </div>

        <div className='grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 lg:gap-x-[2rem] xl:gap-x-[9rem] md:gap-x-[2rem] gap-y-[2rem]'>
          <div className=' 2xl:w-[36.5rem] xl:w-[28rem] h-[14rem] flex justify-between items-center bg-[#010D50] rounded-3xl px-5 sm:col-auto'>
            <div className=' w-[4.2rem] h-[4.2rem] bg-[#0328EE] rounded-2xl flex justify-center items-center'>
              <img src="/opensource.png" alt="" className='block' />
            </div>
            <div className='flex flex-col w-[90%] h-auto px-5'>
              <h1 className=' font-bold mb-1'>Open Source</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
            </div>
          </div>
          <div className='2xl:w-[36.5rem] xl:w-[28rem] h-[14rem] flex justify-between items-center bg-[#010D50] rounded-3xl px-5 sm:col-auto'>
            <div className=' w-[4.2rem] h-[4.2rem] bg-[#0328EE] rounded-2xl flex justify-center items-center'>
              <img src="/globe.png" alt="" className='block' />
            </div>
            <div className='flex flex-col w-[90%] h-auto px-5 '>
              <h1 className=' font-bold mb-1'>worldwide</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
            </div>
          </div>
          <div className=' 2xl:w-[36.5rem] xl:w-[28rem] h-[14rem] flex justify-between items-center bg-[#010D50] rounded-3xl px-5 sm:col-auto'>
            <div className=' w-[4.2rem] h-[4.2rem] bg-[#0328EE] rounded-2xl flex justify-center items-center'>
              <img src="/zoomScope.png" alt="" className='block' />
            </div>
            <div className='flex flex-col w-[90%] h-auto px-5 '>
              <h1 className=' font-bold mb-1'>Transparent</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
            </div>
          </div>
          <div className=' 2xl:w-[36.5rem] xl:w-[28rem] h-[14rem] flex justify-between items-center bg-[#010D50] rounded-3xl px-5 sm:col-auto'>
            <div className=' w-[4.2rem] h-[4.2rem] bg-[#0328EE] rounded-2xl flex justify-center items-center'>
              <img src="/nav.png" alt="" className='block' />
            </div>
            <div className='flex flex-col w-[90%] h-auto px-5 '>
              <h1 className=' font-bold mb-1'>Community Driven</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col 2xl:pl-28 xl:pl-24 lg:pl-16 md:pl-12 h-auto mt-[10rem] justify-between'>
        <div className={`text-white ${dm_Sans.className} sm:w-[38rem] space-y-[4rem]`}>
          <div className=' space-y-8 max-sm:px-10 leading-8'>
            <h1 className=' text-[3rem] font-bold'>Our mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </p>
            <p>
              Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.
            </p>
          </div>
          <div className=' space-y-8 max-sm:px-10 leading-8'>
            <h1 className='text-[3rem] font-bold'>Our story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </p>
            <p>
              Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.
            </p>
          </div>
        </div>
        <div className='max-sm:my-[3rem]'>
          <Image
            src={planet}
            alt='planet'
            width={654.62}
            height={632.9}
          />
        </div>
      </div>

      <div className='2xl:px-28 xl:px-24 lg:px-16 px-12 md:flex text-white justify-between mt-[10rem]'>
        <div className={`${dm_Sans.className} md:w-3/6`}>
          <h1 className='font-bold text-[2.6rem]'>Timeline</h1>
          <p className=' leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <div className=' md:px-[7rem] lg:px-[10rem] space-y-[2rem] md:mt-0 mt-[2.5rem]'>
          <div className='flex text-white space-x-10'>
            <div>
              <div className=' bg-white w-[1.5rem] h-[1.5rem] rounded-full mt-[0.5rem]'>

              </div>
            </div>
            <div className={`${dm_Sans.className} mt-0 flex flex-col justify-start`}>
              <h1 className='text-[1.75rem] font-bold'>2014</h1>
              <p className='text-[1.1rem] my-[1rem] font-bold'>ANNOUNCEMENT</p>
              <p className='leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
              </p>
            </div>
          </div>
          <hr className=' mt-[2rem]' />
          <div className='flex text-white space-x-10'>
            <div>
              <div className=' bg-white w-[1.5rem] h-[1.5rem] rounded-full mt-[0.5rem]'>

              </div>
            </div>
            <div className={`${dm_Sans.className} mt-0 flex flex-col justify-start`}>
              <h1 className='text-[1.75rem] font-bold'>2016</h1>
              <p className='text-[1.1rem] my-[1rem] font-bold'>ANNOUNCEMENT</p>
              <p className='leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
              </p>
            </div>
          </div>
          <hr className=' mt-[2rem]' />
          <div className='flex text-white space-x-10'>
            <div>
              <div className=' bg-white w-[1.5rem] h-[1.5rem] rounded-full mt-[0.5rem]'>

              </div>
            </div>
            <div className={`${dm_Sans.className} mt-0 flex flex-col justify-start`}>
              <h1 className='text-[1.75rem] font-bold'>2018</h1>
              <p className='text-[1.1rem] my-[1rem] font-bold'>ANNOUNCEMENT</p>
              <p className='leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
              </p>
            </div>
          </div>
          <hr className=' mt-[2rem]' />
          <div className='flex text-white space-x-10'>
            <div>
              <div className=' bg-white w-[1.5rem] h-[1.5rem] rounded-full mt-[0.5rem]'>

              </div>
            </div>
            <div className={`${dm_Sans.className} mt-0 flex flex-col justify-start`}>
              <h1 className='text-[1.75rem] font-bold'>2022</h1>
              <p className='text-[1.1rem] my-[1rem] font-bold'>ANNOUNCEMENT</p>
              <p className='leading-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.
              </p>
            </div>
          </div>
          <hr className=' mt-[2rem]' />
        </div>
      </div>
      <div className={`2xl:px-28 xl:px-24 lg:px-16 px-12 text-white ${dm_Sans.className} mt-[8rem]`}>
        <div className={`flex flex-col md:flex-row max-sm:space-y-[1rem] ${dm_Sans.className} lg:items-center lg:justify-between my-[2rem] relative`}>
          <h1 className=" text-white text-3xl font-semibold w-3/6">Our Team</h1>
          <p className=" text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className='lg:hidden'> Feugiat nulla suspendisse tortor aene.</span> <br /><span className='max-lg:hidden'> Feugiat nulla suspendisse tortor aene.</span></p>
        </div>
        <div className='md:flex justify-between max-sm:space-y-5'>
          <div className=' lg:w-[23.5rem] lg:h-[33rem] bg-[#010D50] flex flex-col rounded-2xl py-[2rem] px-[2rem]'>
            <img src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
              className=' h-[85%] block rounded-2xl'
            />
            <div className={`flex flex-col justify-start mt-[2rem] ${dm_Sans.className}`}>
              <p className=' font-bold'>JOHN CARTER</p>
              <p>CEO & CO-FOUNDER</p>
            </div>
          </div>
          <div className=' lg:w-[23.5rem] lg:h-[33rem] bg-[#010D50] flex flex-col rounded-2xl py-[2rem] px-[2rem]'>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
              className=' h-[85%] block rounded-2xl'
            />
            <div className={`flex flex-col justify-start mt-[2rem] ${dm_Sans.className}`}>
              <p className=' font-bold'>ALEX TURNER</p>
              <p>OPERATIONS</p>
            </div>
          </div>
          <div className=' lg:w-[23.5rem] lg:h-[33rem] bg-[#010D50] flex flex-col rounded-2xl py-[2rem] px-[2rem]'>
            <img src="https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
              className=' h-[85%] block rounded-2xl'
            />
            <div className={`flex flex-col justify-start mt-[2rem] ${dm_Sans.className}`}>
              <p className=' font-bold'>SOPHIE MOORE</p>
              <p className='font-normal'>COMMUNITY LEAD</p>
            </div>
          </div>
        </div>
      </div>
      <div className='2xl:px-28 xl:px-24 lg:px-16 px-12'>
        <div className={`flex flex-col items-center text-white ${dm_Sans.className} pt-[7rem] pb-[3rem]`}>
          <h1 className=' font-bold text-[2.6rem]'>Investors</h1>
          <p className=' text-[1.1rem] text-center leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className=' text-[1.1rem] text-center leading-7'>Parturient lorem purus justo, ultricies.</p>
        </div>
      </div>
      <Companies />
    </div>
  )
}

export default about