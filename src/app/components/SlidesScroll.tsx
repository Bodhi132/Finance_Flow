"use client";
import React, { useRef, useEffect, useState } from 'react'
import '../styles/scrollbar_styles.css'
import { dm_Sans } from '../font';

const SlidesScroll = () => {

  const data = [
    {
      id: 1,
      name: 'John Doe',
      imgPath: '/person-1.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    },
    {
      id: 2,
      name: 'John Doe',
      imgPath: '/person-2.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    },
    {
      id: 3,
      name: 'John Doe',
      imgPath: '/person-3.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    },
    {
      id: 4,
      name: 'John Doe',
      imgPath: '/person-1.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    },
    {
      id: 5,
      name: 'John Doe',
      imgPath: '/person-2.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    },
    {
      id: 6,
      name: 'John Doe',
      imgPath: '/person-3.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    },
    {
      id: 7,
      name: 'John Doe',
      imgPath: '/person-1.jpg',
      info: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”'
    }
  ]

  const outerContainerRef = useRef(null);
  const innerContainerRefs = useRef([]);

  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    // Initialize refs array
    innerContainerRefs.current = data.map(() => React.createRef());
  }, [data]);

  const handleScroll = () => {
    if (outerContainerRef.current && innerContainerRefs.current[0].current) {
      const scrollLeft = outerContainerRef.current.scrollLeft;
      const scrollWidth = outerContainerRef.current.scrollWidth;
      const itemWidth = innerContainerRefs.current[0].current.scrollWidth;
      const ind = Math.trunc(scrollWidth / itemWidth);
      const focusedIndex = Math.round((scrollLeft / scrollWidth) * ind);
      setFocusedIndex(focusedIndex);
    }
  };

  return (
    <>
      <div
        className="flex w-full overflow-x-scroll scroll-snap-x scrollable_content mb-[8rem] relative"
        ref={outerContainerRef}
        onScroll={handleScroll}
      >
        {data.map((item, ind) => (
          <div
            key={ind}
            className={`min-w-[26rem] h-[14rem] rounded-3xl py-[2rem] px-[2rem] mx-[1.5rem] flex flex-col space-y-[2rem] text-white bg-[#010D50] ${focusedIndex === ind ? 'opacity-100' : 'opacity-60'
              }`}
            ref={innerContainerRefs.current[ind]}
          >
            <p className="text-sm">{item.info}</p>
            <div className="flex space-x-[1rem] items-center">
              <div className="w-[3.6rem] h-[3.6rem] rounded-full overflow-hidden">
                <img src={item.imgPath} alt="" className="w-full h-full" />
              </div>
              <div>
                <h1>{item.name}</h1>
                <h2>Role, Company</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SlidesScroll

