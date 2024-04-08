'use client'

import React, { useState } from "react"
import Cart from "./Cart/page"
import Products from "./Products/page";
import Contacts from "./Contacts/page";
import Signup from "./Signup/page";
import Login from "./Login/page";
import Link from "next/link"
import "./globals.css";

// export const metadata = {
//   title: "GTech",
//   description: "Tech services & assessories",
// };

export default function RootLayout({ children }) {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <html lang="en">
      <body>
        <div className='w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
            <h1 className=' font-bold text-5xl font-sans'>GTech</h1>
          </div>
          {/* menu */}
          <ul className='hidden md:flex gap-x-8'>
            <li className="hover:scale-110">
              <Link href='/' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:scale-110">
              <Link href='/Products' smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className="hover:scale-110">
              <Link href='/Contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className="hover:scale-110">
              <Link href='/Signup' smooth={true} duration={500}>
                SignUp
              </Link>
            </li>
            <li className="hover:scale-110">
              <Link href='/Login' smooth={true} duration={500}>
                Login
              </Link>
            </li>
            <li className="hover:scale-110">
              <Link href='/Cart' smooth={true} duration={500}>
                Cart
              </Link>
            </li>
          </ul>
          {/* Hamburger */}
          <div onClick={handleClick} className='cursor-pointer md:hidden z-10'>
            {!nav ? "O" : "X" }
          </div>
          {/* Mobile menu */}
          <ul
            className={
              !nav
                ? 'hidden'
                : 'absolute cursor-pointer top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            }
          >
            <li className='py-6 text-4xl hover:scale-110'>
              <Link onClick={handleClick} href='/' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110'>
              {' '}
              <Link onClick={handleClick} href='/Products' smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110'>
              {' '}
              <Link onClick={handleClick} href='/Contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110'>
              {' '}
              <Link onClick={handleClick} href='/Signup' smooth={true} duration={500}>
                SignUp
              </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110'>
              {' '}
              <Link onClick={handleClick} href='Login' smooth={true} duration={500}>
                Login
              </Link>
            </li>
            <li className='py-6 text-4xl hover:scale-110'>
              {' '}
              <Link onClick={handleClick} href='/Cart' smooth={true} duration={500}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
