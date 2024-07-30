"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Page() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const addToCart = () => {
    setCartItems(prevItems => [...prevItems, cartItems]);
    setShowConfirmation(true);
  };

  const navigateToCart = () => {
    router.push('/Cart');
  };

  return (
    <div className='w-full flex justify-between'>
       <div className='bg-[#0a192f] '>
        <div onClick={handleClick} className='cursor-pointer z-10 font-extrabold text-white  md:text-3xl bg-[#0a192f] px-6'>
            {!nav ? ">" : "X" }
          </div>
          <ul
          className={
            !nav
            ? 'hidden'
            : 'cursor-pointer sm:w-[100px] md:w-[300px] h-screen bg-[#0a192f] text-white flex flex-col pt-[4rem] px-3 md:px-10'
          }
          >
            <div className='text-2xl font-bold mb-4'>Categories</div>
            <li className='md:pb-12 pt-4 pb-6'><Link href="/">Laptop</Link></li>
            <li className='md:pb-12 pb-6'><Link href="/">Sounds</Link></li>
            <li className='md:pb-12 pb-6'><Link href="/">Speaker</Link></li>
            <li className='md:pb-12 pb-6'><Link href="/">Ps5 Console</Link></li>
            <li className='md:pb-12 pb-6'><Link href="/">Television</Link></li>
          </ul>
        </div>
      <div className="bg-[#a09a9a22] w-full text-white flex flex-wrap gap-x-5 gap-y-8 px-4 lg:px-24 py-10 lg:py-20 justify-center">
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/onyx-studio-8.jpg"
            alt="Onyx Studio 8 image"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Onyx Studio 8</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Macbook-M2.jpg"
            alt="Macbook Pro M2"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Macbook M2</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Hp-laptop.jpg"
            alt="Hp Laptop"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Hp Laptop</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Ps5-box.jpg"
            alt="Ps5 pad"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Ps5 Box</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Ps5-VR.jpg"
            alt="Ps5 VR"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Ps5 VR</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/iwatch.webp"
            alt="Apple iwatch"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">iWatch</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Apple-tv.jpg"
            alt="Apple Tv"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Apple Tv</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Ps5-pad.webp"
            alt="Ps5 Twin pad"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Ps5 Twin Pad</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
          <img
            src="/Macbook-Air.png"
            alt="Macbook Air"
            className="bg-white rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Macbook Air</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        {showConfirmation && (
          <div className="ml-4 flex flex-col justify-center">
            <p className="text-white">Item added to cart!</p>
            <button onClick={navigateToCart} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-700">
              View Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
