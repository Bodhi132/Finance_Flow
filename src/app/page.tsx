import { DeviceFrameset } from "react-device-frameset";
import 'react-device-frameset/styles/marvel-devices.min.css';
import { dm_Sans } from "./font";
import FeaturedCompanies from "./components/FeaturedCompanies";
import DualMobOne from "./components/DualMobOne";
import DualMobTwo from "./components/DualMobTwo";
import SlidesScroll from "./components/SlidesScroll";
import HomePageVideoPlayer from "./components/HomePageVideoPlayer";
import NewsCard from "./components/NewsCard";
import DownloadIosCard from "./components/DownloadIosCard";
import DownloadAndroidCard from "./components/DownloadAndroidCard";

export default function Home() {

  return (
    <div className="w-full overflow-x-hidden">
      <div className="h-[42rem] w-[42rem] bg-[#010D50] md:block hidden absolute top-[-11rem] left-[-7rem] rounded-full z-[-10] blur-2xl opacity-30 p-10"
      >
      </div>
      <div className="h-[43rem] w-[43rem] bg-[#0328EE] absolute top-[20rem] right-0 rounded-full z-[-10] blur-2xl opacity-20 p-10"
      >
      </div>
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="text-white lg:w-[60%] lg:pl-32 px-10 space-y-1 mt-[3rem] lg:mt-[10rem]">
          <h1 className=" 2xl:text-7xl lg:text-5xl md:text-7xl text-3xl font-semibold">Buy, trade, and hold</h1>
          <h1 className="2xl:text-7xl lg:text-5xl md:text-7xl text-3xl font-semibold">350+ cryptocurrencies</h1>
          <p className=" text-md md:w-[70%]" style={{ marginTop: '2rem' }}>Finance refers to monetary resources and to the study and discipline of money, currency and capital assets.
            As a subject of study, it is related to but distinct from economics, which is the study of the production, distribution, and consumption of goods and services
          </p>
          <div className={`flex ${dm_Sans.className}  flex-col lg:flex-row font-bold lg:space-x-5 space-y-5 lg:space-y-0`} style={{ marginTop: '3rem' }}>
            <button className={" lg:w-52 h-16 bg-[#0328EE] rounded-full text-white"}>DOWNLOAD APP</button>
            <button className=" bg-slate-800 lg:w-52 h-16 rounded-full text-white">VIEW PRICING</button>
          </div>
        </div>
        <div className=" lg:p-16 lg:w-[40%] lg:block hidden overflow-x-hidden">
          <DeviceFrameset device="MacBook Pro" width={500} height={600}>
            <video className=" object-cover h-full w-full" autoPlay loop muted>
              <source src="/device_video.mp4" type="video/mp4" />
            </video>
          </DeviceFrameset>
        </div>
        <div className="p-14 max-sm:hidden sm:block lg:hidden">
          <DeviceFrameset device="iPad Mini" height={550}>
            <video className=" object-cover h-full w-full" autoPlay loop muted>
              <source src="/device_video.mp4" type="video/mp4" />
            </video>
          </DeviceFrameset>
        </div>
        <div className="p-14 sm:hidden">
          <DeviceFrameset device="iPad Mini" height={300} width={250}>
            <video className=" object-cover h-full w-full" autoPlay loop muted>
              <source src="/device_video.mp4" type="video/mp4" />
            </video>
          </DeviceFrameset>
        </div>
      </div>

      
      <FeaturedCompanies />

      {/*Card Section */}

      <div className={`flex flex-col items-center text-white ${dm_Sans.className} md:mt-32 mt-16 relative md:px-0 px-10`}>
        <div className="h-[43rem] w-[43rem] bg-[#0326eec2] absolute top-[5rem] right-[10rem] rounded-full z-[-10] blur-2xl opacity-20 p-10"
        >
        </div>
        <h1 className=" md:text-[3rem] text-[2rem] font-semibold">Build your crypto portfolio</h1>
        <p className="mt-6 mb-1">
          Discover the top 10 crypto portfolio trackers.
        </p>
        <p className="mb-6">Effortlessly manage and optimize your digital assets for maximum returns.</p>
      </div>

      <div className={`flex md:flex-row flex-col justify-between 2xl:px-28 xl:px-24 lg:px-16 px-6 ${dm_Sans.className} my-14`}>
        <div className=" space-y-[1rem]">
          <div className="bg-[#010D50] 2xl:w-[20.5rem] xl:w-[19rem] lg:w-[17rem] md:w-[12rem] md:h-[18rem] rounded-[2rem] py-6 lg:py-10 text-white space-y-4 2xl:px-5 xl:px-4 lg:px-4 px-2">
            <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
              <img src="/arrow.png" alt="" className=" block" />
            </div>
            <h1 className=" text-xl font-bold">Send & Receive</h1>
            <p className=" text-sm xl:text-base">
              Send/Receive with deep experience in the worlds of
              architecture, design, media and technology.
            </p>
          </div>
          <div className="bg-[#010D50] 2xl:w-[20.5rem] xl:w-[19rem] lg:w-[17rem] md:w-[12rem] md:h-[18rem] rounded-[2rem] py-6 lg:py-10 text-white space-y-4 2xl:px-5 xl:px-4 lg:px-4 px-2">
            <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
              <img src="/wallet.png" alt="" className="block" />
            </div>
            <h1 className=" text-xl font-bold">100% Secure Wallet</h1>
            <p className=" text-sm xl:text-base">
              The Secure Wallet by ECOMI is the most advanced and secure way
              to store your Bitcoin and other cryptocurrencies.
            </p>
          </div>
        </div>
        <div className="bg-[#0328EE] 2xl:w-[29.5rem] xl:w-[26rem] md:w-[20rem] h-[37rem] md:my-0 my-5 rounded-[2rem] flex flex-col justify-between items-center overflow-hidden">
          <div className={`${dm_Sans.className} text-white px-8 pt-8 space-y-6`}>
            <h1 className="font-bold">iOS & Android App</h1>
            <p >
              Grow your portfolio automatically with daily, weekly, or monthly trades. phone with Crypto.com App open recurring buy page.
              On-chain Staking.
            </p>
          </div>
          <div className=" h-[68%] overflow-hidden hidden xl:block">
            <DeviceFrameset device="iPhone X" width={350} height={500}>
              <img src="/finance_img.jpg" alt="" />
            </DeviceFrameset>
          </div>
          <div className=" h-[68%] overflow-hidden xl:hidden">
            <DeviceFrameset device="iPhone 8 Plus" color="black" width={300} height={500}>
              <img src="/finance_img.jpg" alt="" />
            </DeviceFrameset>
          </div>
        </div>
        <div className=" space-y-[1rem]">
          <div className="bg-[#010D50] 2xl:w-[20.5rem] xl:w-[19rem] lg:w-[17rem] md:w-[12rem] md:h-[18rem] rounded-[2rem] py-6 lg:py-10 text-white space-y-4 2xl:px-5 xl:px-4 lg:px-4 px-2">
            <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
              <img src="/graph-bar.png" alt="" className="block" />
            </div>
            <h1 className=" text-xl font-bold">Trading Charts</h1>
            <p className=" text-sm xl:text-base">
              Real-Time charting tool that includes thousands of instruments:
              shares, indices, commodities, currencies, ETFs, bonds, and futures.
            </p>
          </div>
          <div className="bg-[#010D50] 2xl:w-[20.5rem] xl:w-[19rem] lg:w-[17rem] md:w-[12rem] md:h-[18rem] rounded-[2rem] py-6 lg:py-10 text-white space-y-4 2xl:px-5 xl:px-4 lg:px-4 px-2">
            <div className=" h-16 w-16 bg-[#0328EE] rounded-[1.2rem] flex items-center justify-center">
              <img src="/loop.png" alt="" className="block" />
            </div>
            <h1 className=" text-xl font-bold">Real Time Trading</h1>
            <p className=" text-sm xl:text-base">
              Online charting software for technical analysis & trading of stocks, futures, forex, commodities,
              Intuitive market analysis tools & low latency market
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[4rem] mb-[8rem]">
        <button className={`w-[12rem] h-[3.5rem] rounded-full bg-[#0328EE] flex justify-center items-center ${dm_Sans.className} text-white font-semibold`}>
          DOWLOAD APP
        </button>
      </div>

      {/*Daily Rewards mobile*/}
      <div className="flex text-white justify-between 2xl:px-28 xl:px-24 lg:px-16 relative mb-[13rem]">
        <div className="h-[45rem] w-[45rem] bg-[#0326eec2] absolute top-[70%] left-[14rem] rounded-full z-[-10] blur-3xl opacity-20 p-10"
        >
        </div>
        <DualMobOne />
        <div className={`flex flex-col mt-24 ${dm_Sans.className} ml-[12rem]`}>
          <div>
            <h1 className=" 2xl:text-[3.3rem] xl:text-[2rem] md:text-[1.4rem] font-medium">Earn daily rewards on</h1>
            <h1 className=" 2xl:text-[3.3rem] xl:text-[2rem] md:text-[1.4rem] font-medium">your idle tokens</h1>
            <p className="mt-[1rem] 2xl:text-[1.5rem] md:text-[1rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="2xl:text-[1.5rem] lg:text-[1rem] font-light">Feugiat nulla suspendisse tortor aene.</p>
          </div>
          <div className=" mt-[4rem] space-y-5">
            <div className="flex items-center space-x-5">
              <div className=" w-[3rem] h-[3rem] bg-[#0328EE] flex justify-center items-center rounded-xl">
                <img src="/down_arr.png" className="block" />
              </div>
              <p className=" text-white">Lowest fees in market</p>
            </div>
            <div className="flex items-center space-x-5">
              <div className=" w-[3rem] h-[3rem] bg-[#0328EE] flex justify-center items-center rounded-xl">
                <img src="/lightning.png" className="block" />
              </div>
              <p className=" text-white">Fast and secure transactions</p>
            </div>
            <div className="flex items-center space-x-5">
              <div className=" w-[3rem] h-[3rem] bg-[#0328EE] flex justify-center items-center rounded-xl">
                <img src="/lock.png" className="block" />
              </div>
              <p className=" text-white">256-bit secure encryption</p>
            </div>
          </div>
        </div>
      </div>

      {/*daily Rewards Section laptop*/}

      <div className="flex md:flex-row flex-col text-white justify-between lg:pl-32 max-sm:pl-10 md:mb-[13rem]">
        <div className={`flex flex-col mt-24 ${dm_Sans.className} justify-end pb-[2rem]`}>
          <div>
            <h1 className=" xl:text-[3.3rem] lg:text-[2.5rem] md:text-[1.8rem] font-medium">Earn daily rewards on</h1>
            <h1 className="xl:text-[3.3rem] lg:text-[2.5rem] md:text-[1.8rem] font-medium">your idle tokens</h1>
            <p className="mt-[1rem] lg:text-[1rem] xl:text-[1.5rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className=" lg:text-[1rem] xl:text-[1.5rem] font-light">Feugiat nulla suspendisse tortor aene.</p>
          </div>
          <div className=" mt-[4rem] space-y-5">
            <div className="flex items-center space-x-5">
              <div className=" w-[3rem] h-[3rem] bg-[#0328EE] flex justify-center items-center rounded-xl">
                <img src="/down_arr.png" className="block" />
              </div>
              <p className=" text-white">100% Private data</p>
            </div>
            <div className="flex items-center space-x-5">
              <div className=" w-[3rem] h-[3rem] bg-[#0328EE] flex justify-center items-center rounded-xl">
                <img src="/percent.png" className="block" />
              </div>
              <p className=" text-white">99.99% Uptime guarantee</p>
            </div>
            <div className="flex items-center space-x-5">
              <div className=" w-[3rem] h-[3rem] bg-[#0328EE] flex justify-center items-center rounded-xl">
                <img src="/service.png" className="block" />
              </div>
              <p className=" text-white">24/7 Dedicated support</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden md:block overflow-hidden pl-[4rem]">
          <DeviceFrameset device="MacBook Pro" width={600} height={600}>
            <img src="/fin.png" className=" h-full" />
          </DeviceFrameset>
        </div>
        <div className=" block sm:hidden overflow-hidden ">
          <DeviceFrameset device="iPad Mini" width={270} height={350}>
            <img src="/fin.png" className=" h-full" />
          </DeviceFrameset>
        </div>
      </div>

      {/*Explore Section*/}

      <div className=" md:h-[37.5rem] h-[45rem] w-full bg-[#0328EE] relative flex flex-col md:flex-row overflow-hidden md:pr-[14rem] mb-[5rem] max-sm:pt-5">
        <div className="absolute top-0 bg-[#010725] w-full h-[10rem]"></div>
        <div className={`flex flex-col md:justify-center text-center md:w-3/6 ${dm_Sans.className} text-white mt-[4rem] md:pl-[3rem]`}>
          <h1 className=" text-2xl md:text-4xl font-semibold mt-[6rem] ">Explore endless possibilities</h1>
          <h1 className=" text-2xl md:text-4xl font-semibold mb-[2rem] ">with FinanceFlow</h1>
          <p className="text-sm md:w-[80%] mb-[0.3rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm md:w-[80%]">
            Feugiat nulla suspendisse tortor aene.
          </p>
          <button className=" bg-white md:w-[10rem] h-[4rem] block text-[#0328EE] text-center rounded-full text-sm font-bold mt-[2rem]">DOWNLOAD APP</button>
        </div>
        <DualMobTwo />
      </div>


      {/*Nav slides Section*/}
      <div className={`flex flex-col md:flex-row md:px-28 px-10 ${dm_Sans.className} md:items-center md:justify-between my-[2rem] relative`}>
        <div className="h-[42rem] w-[42rem] bg-[#0326eeb8] absolute top-[7rem] left-[7rem] rounded-full z-[-10] blur-[5rem] opacity-40 p-10"
        ></div>
        <h1 className=" text-white text-3xl font-semibold">What our users say?</h1>
        <button className=" text-white w-[10rem] h-[3rem] block bg-[#0328EE] text-center rounded-full text-sm font-bold mt-[2rem]">DOWNLOAD APP</button>
      </div>
      <SlidesScroll />

      {/*Get started today*/}

      <div className="flex flex-col lg:flex-row justify-between 2xl:px-28 xl:px-24 lg:px-16 px-10">
        <div className={` lg:h-[25rem] flex flex-col lg:items-stretch items-center ${dm_Sans.className}`}>
          <h1 className=" xl:text-3xl lg:text-2xl text-white font-semibold mb-[1rem]">Get started today</h1>
          <p className=" xl:text-sm lg:text-xs text-white font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className=" xl:text-sm lg:text-xs text-white font-light"> Feugiat nulla suspendisse tortor aene.</p>
          <div className=" mt-[2rem] mb-[3rem] lg:mb-0 md:flex lg:block xl:space-y-[1rem] lg:space-y-[0.4rem] space-x-[4rem] lg:space-x-0 text-sm text-white font-light">
            <div className=" flex items-center space-x-[1rem]">
              <div className=" xl:w-[3rem] xl:h-[3rem] md:w-[2.5rem] md:h-[2.5rem] rounded-2xl bg-[#0328EE] flex items-center justify-center">
                <img src="./download.png" alt="" className=" block" />
              </div>
              <p>Download App</p>
            </div>
            <div className=" flex items-center space-x-[1rem]">
              <div className=" xl:w-[3rem] xl:h-[3rem] md:w-[2.5rem] md:h-[2.5rem] rounded-2xl bg-[#0328EE]  flex items-center justify-center">
                <img src="./account.png" alt="" className="block" />
              </div>
              <p>Create a free account</p>
            </div>
            <div className=" flex items-center space-x-[1rem]">
              <div className=" xl:w-[3rem] xl:h-[3rem] md:w-[2.5rem] md:h-[2.5rem] rounded-2xl bg-[#0328EE] flex items-center justify-center">
                <img src="./trading.png" alt="" className=" block" />
              </div>
              <p>Start trading</p>
            </div>
          </div>
        </div>
        <HomePageVideoPlayer />
      </div>

      {/*News Section*/}

      <div className=" 2xl:px-28 xl:px-24 lg:px-16 px-10 mt-[5rem] space-y-[3rem] pb-5">
        <div className={` flex md:flex-col lg:flex-row md:items-center md:justify-center lg:justify-between ${dm_Sans.className}`}>
          <h1 className=" text-white font-semibold xl:text-3xl lg:text-2xl">Browse our latest news</h1>
          <div className=" text-white xl:text-sm lg:text-xs font-light md:text-center lg:text-left">
            <p>It's the place to launch your ideas and discover your next favorite product.</p>
            <p> We're a welcoming and supportive community.</p>
          </div>
        </div>
        <div className=" flex flex-col space-y-[2rem] lg:space-y-0 lg:flex-row justify-between">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="w-full flex justify-center">
          <button className={`w-[15.1rem] h-[4.4rem] block text-white text-center rounded-full font-bold mt-[2rem] text-lg ${dm_Sans.className}`} style={{ backgroundColor: 'hsla(360, 100%, 100%, 0.1)' }}>VIEW ALL ARTICLES</button>
        </div>
      </div>

      {/*Download our app Section*/}

      <div className=" 2xl:px-28 xl:px-24 lg:px-16 px-5 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-white mt-[7rem] mb-[2rem]">
        <h1 className=" font-semibold text-3xl">Download our app</h1>
        <div className=" text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>Sit non neque orci amet, amet .</p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row md:items-center lg:justify-between 2xl:px-28 xl:px-24 lg:px-16 px-10 mb-[7rem] space-y-5">
        <DownloadIosCard />
        <DownloadAndroidCard />
      </div>
    </div>
  );
}
