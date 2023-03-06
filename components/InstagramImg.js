import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramImg({ socialImg }) {
  return (
    <div className=' relative'>
      <Image
        src={socialImg}
        width={600}
        height={400}
        alt='social image'
        className=' w-full h-full'
        layout='responsive'
      />
      {/* overlay */}
      <div className=' flex items-center justify-center group  absolute top-0  left-0 bottom-0 right-0 hover:bg-black/50'>
        <p className=' text-gray-400 hidden  group-hover:block'>
          <FaInstagram size={40} />
        </p>
      </div>
    </div>
  );
}
