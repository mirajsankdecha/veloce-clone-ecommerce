/* import { ImageContainer, Image } from './../Image';

const ProductCardImage = ({ src }) => {
  return (
    <>
      <ImageContainer className={`aspect-[4/5] bg-red-100 relative group overflow-hidden`} >
        <input type="checkbox" className='peer hidden' name="" id={src} />
        <label htmlFor={src} className='absolute z-10 text-6xl cursor-pointer select-none hidden group-hover:block text-gray-400 top-[43%] left-5'>{"<"}</label>
        <label htmlFor={src} className='absolute z-10 text-6xl cursor-pointer select-none hidden group-hover:block text-gray-400 top-[43%] right-5'>{">"}</label>
        <Image width="1200" height="1200" className={"w-full h-auto fill-none absolute transition-all duration-500 group-hover:scale-110 opacity-0 peer-checked:opacity-100"} alt="product 1" src={src[1]} />
        <Image width="1200" height="1200" className={"w-full h-auto fill-none absolute transition-all duration-500 group-hover:scale-110 opacity-100 peer-checked:opacity-0"} alt="product 1" src={src[0]} />
      </ImageContainer>
    </>
  )
}

export default ProductCardImage; */

'use client';
import { useState } from 'react';
import { ImageContainer, Image } from '@/Components/Image';

const ProductCardImage = ({ src }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <>
      <ImageContainer
        className={`aspect-[4/5] bg-red-100 relative group overflow-hidden`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
       {/*  <input type="checkbox" className='peer hidden' name="" id={src} />
        <label htmlFor={src} className='absolute z-10 text-6xl cursor-pointer select-none hidden group-hover:block text-gray-400 top-[43%] left-5'>{"<"}</label>
        <label htmlFor={src} className='absolute z-10 text-6xl cursor-pointer select-none hidden group-hover:block text-gray-400 top-[43%] right-5'>{">"}</label> */}
        <Image
          width="1200"
          height="1200"
          className={`w-full h-auto fill-none absolute transition-all duration-500 ${hovered ? 'scale-110 opacity-100' : 'opacity-0'}`}
          alt="product 1"
          src={src[1]}
        />
        <Image
          width="1200"
          height="1200"
          className={`w-full h-auto fill-none absolute transition-all duration-500 ${hovered ? 'scale-110 opacity-0' : 'opacity-100'}`}
          alt="product 1"
          src={src[0]}
        />
      </ImageContainer>
    </>
  );
};

export default ProductCardImage;