import React from 'react';

export default function Portfolio() {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 text-center'>
      <h1
        className=' font-bold text-2xl
      '>
        Travel Photos
      </h1>
      <div
        className=' grid grid-rows-none md:grid-cols-5 p-4 gap-4
      '>
        <div className=' w-full h-full col-span-2 md:cols row-span-2 '>
          <img src='/images/IMG_5735.JPG' alt='travel photos' />
        </div>
        <div className=' w-full h-full'>
          {/* insert image here */}
          <img src='/images/IMG_6668.jpg' />
        </div>{' '}
        <div className=' w-full h-full'>
          {/* insert image here */}
          <img src='/images/IMG_6668.jpg' />
        </div>{' '}
        <div className=' w-full h-full'>
          {/* insert image here */}
          <img src='/images/IMG_6668.jpg' />
        </div>{' '}
        <div className=' w-full h-full'>
          {/* insert image here */}
          <img src='/images/IMG_6668.jpg' />
        </div>{' '}
        <div className=' w-full h-full'>
          {/* insert image here */}
          <img src='/images/IMG_6668.jpg' />
        </div>
      </div>
    </div>
  );
}
