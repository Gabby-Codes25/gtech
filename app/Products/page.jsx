"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Page() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addToCart = () => {
    setCartItems(prevItems => [...prevItems, cartItems]);
    setShowConfirmation(true);
  };

  const navigateToCart = () => {
    router.push('/Cart');
  };

  return (
    <div className='w-full flex justify-between'>
       <div className='bg-gray-800 text-white w-full lg:w-1/4 py-4 px-6 lg:py-8 lg:px-12'>
        <div className='text-xl font-bold mb-4'>Categories</div>
        <ul className='space-y-2'>
          <li><Link href="/">Laptop</Link></li>
          <li><Link href="/">Home Theater</Link></li>
          <li><Link href="/">Speaker</Link></li>
          <li><Link href="/">Ps5 Console</Link></li>
          <li><Link href="/">Television</Link></li>
        </ul>
      </div>
      <div className="bg-[#a09a9a22] text-white grid grid-cols-3 gap-x-5 gap-y-8 px-4 lg:px-24 py-10 lg:py-20 justify-center">
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
