import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function NavBar() {
  return (
    <div className=' fixed top-0 left-0 w-full z-10 ease-in duration-300 '>
      <div className=' max-w-[1240px] mx-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1>Capture</h1>
        </Link>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>{' '}
          <li>
            <Link href='/#gallery'>Gallery</Link>
          </li>{' '}
          <li>
            <Link href='/#work'>Work</Link>
          </li>{' '}
          <li>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>

        {/* mobile navigation  button*/}
        <div>
          <AiOutlineMenu size={20} />
        </div>
        {/* mobile menu  */}
        <div>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>{' '}
            <li>
              <Link href='/#gallery'>Gallery</Link>
            </li>{' '}
            <li>
              <Link href='/#work'>Work</Link>
            </li>{' '}
            <li>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
