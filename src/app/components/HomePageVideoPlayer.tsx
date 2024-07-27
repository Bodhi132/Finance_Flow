"use client";
import React,{useState,useRef} from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const HomePageVideoPlayer = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (isPlaying && videoRef.current) {
          videoRef.current.pause();
        } else if (videoRef.current) {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="xl:w-[41rem] xl:h-[25rem] lg:w-[30rem] lg:h-[18rem] relative">
            <video src="/crypto_video.mp4" className="lg:w-full lg:h-full lg:px-0 md:h-[80%] rounded-3xl object-cover" ref={videoRef}></video>
            <button
                className="absolute flex items-center justify-center rounded-full w-[6rem] h-[6rem] cursor-pointer"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transition: 'opacity 0.6s ease',
                    opacity: isPlaying ? 0 : 1,
                }}
                onClick={handlePlay}
            >
                {isPlaying ? (
                    <FaPause className="text-3xl text-white cursor-pointer" />
                ) : (
                    <FaPlay className="text-3xl text-white absolute cursor-pointer" />
                )}
            </button>
        </div>
    );
}

export default HomePageVideoPlayer