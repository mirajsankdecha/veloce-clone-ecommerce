'use client'
import { useState, useEffect } from 'react';
import logo from "./logo.png";
import Image from 'next/image';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isAtTop, setIsAtTop] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  }
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navbarClass = isAtTop ? `bg-[#ffffff00] py-10  ${pathname === '/' ? 'text-white fill-white' : 'text-black fill-black'}` : `bg-white bg-opacity-50 backdrop-blur-[10px] backdrop-saturate-200 shadow-xl text-black fill-black`;
  return (
    <>
      <div className={`w-full fixed ${pathname !== '/' && 'sticky top-0'} z-[9999]`}>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <nav nav="true" className='w-full h-auto m-auto max-w-[--max-width]' >
          <div className={` ${navbarClass} font-bold py-7 px-5 md:px-7 flex justify-between w-full transition-all duration-500`}>
            <div className={` ${isAtTop && ''} text-3xl w-full sm:text-center flex items-center md:justify-between gap-4`}>
              <i className={`fas fa-bars text-black cursor-pointer ${isAtTop && pathname === '/' && "text-white"}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}></i>
              <Link href="/" className={`flex items-center gap-1 md:gap-3 cursor-pointer ${pathname === '/' && isAtTop && 'opacity-0'} `}>
                <Image src={logo} alt="l" width={50} height={50} />
                <span className="font-serif">V8Wardrobe</span>
              </Link>
              <Link href="/cart" className='cursor-pointer'>
                <svg className={`ml-3 ${isAtTop && pathname === '/' ? 'fill-white' : 'fill-black'}`} xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 -960 960 960">
                  <path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;