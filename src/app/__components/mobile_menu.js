'use client'

import React, { useState } from 'react';
import Link from "next/link"
import { Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="top-4 right-4 z-10 p-2 rounded-md text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-14"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="fixed top-0 left-0 h-[30%] w-full bg-black z-40">
            <nav className="flex flex-col justify-center h-full text-white ml-8">
              <Link href="/about" className={`${jost.classname} text-2xl text-white font-normal leading-[25px] tracking-wide mb-8`} onClick={closeMenu}>OUR COMPANY</Link>
              <Link href="/locations" className='text-2xl text-white font-normal leading-[25px] tracking-wide mb-8' onClick={closeMenu}>LOCATIONS</Link>
              <Link href="/contact" className='text-2xl text-white font-normal leading-[25px] tracking-wide' onClick={closeMenu}>CONTACT</Link>
            </nav>
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 z-50 p-2 rounded-md bg-gray-800 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
