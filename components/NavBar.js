import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <div className=' fixed top-0 left-0 w-full z-10 ease-in duration-300 '>
      <div className=' max-w-[1240px] mx-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 className=' text-4xl font-bold '>Capture</h1>
        </Link>
        <ul className=' hidden sm:flex'>
          <li className=' p-4'>
            <Link href='/'>Home</Link>
          </li>{' '}
          <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>{' '}
          <li className=' p-4'>
            <Link href='/#portfolio'>Work</Link>
          </li>{' '}
          <li className=' p-4'>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>

        {/* mobile navigation  button*/}
        <div className=' sm:hidden block z-10'>
          {navIsOpen ? (
            <AiOutlineClose size={20} onClick={toggleNav} />
          ) : (
            <AiOutlineMenu size={20} onClick={toggleNav} />
          )}
        </div>
        {/* mobile menu  */}

        <div
          className={
            navIsOpen
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }>
          <ul>
            <li className=' p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>{' '}
            <li className=' p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>{' '}
            <li className=' p-4 text-4xl hover:text-gray-500'>
              <Link href='/#work'>Work</Link>
            </li>{' '}
            <li className=' p-4 text-4xl hover:text-gray-500'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
