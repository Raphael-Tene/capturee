import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Slider({ images }) {
  const [current, setCurrent] = useState(0);
  const lenght = images.length;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className=' max-w-[1240px] mx-auto'>
      <h1 className=' text-2xl font-bold text-center'>Gallery</h1>
      <div className=' relative flex justify-center p-4'>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in duration-1000'
                  : 'opacity-0'
              }>
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={30}
                className='absolute top-[50%] left-[30px] text-inherit cursor-pointer select-none z-[2]'
              />
              {index === current && (
                <Image
                  className=' object-cover'
                  src={slide.image}
                  width={300}
                  height={400}
                  alt='images'
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={30}
                className='absolute top-[50%] right-[30px] text-inherit cursor-pointer select-none z-[2]'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
