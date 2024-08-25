"use client"
import { dm_Sans } from '../font';
import { useRouter } from 'next/navigation';

const RedirectButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/blog'); // Replace '/target-page' with your target URL
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[15.1rem] h-[4.4rem] block text-white text-center rounded-full font-bold mt-[2rem] text-lg ${dm_Sans.className}`} 
      style={{ backgroundColor: 'hsla(360, 100%, 100%, 0.1)' }}
    >
      VIEW ALL ARTICLES
    </button>
  );
};

export default RedirectButton;