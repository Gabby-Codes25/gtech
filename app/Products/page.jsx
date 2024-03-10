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
      <div>
        <div className='w-[50px] h-[200px] px-5 pt-5'>
          <p><Link href="/">Laptop</Link></p>
          <p><Link href="/">Laptop</Link></p>
          <p><Link href="/">Laptop</Link></p>
          <p><Link href="/">Laptop</Link></p>
          <p><Link href="/">Laptop</Link></p>
        </div>
      </div>
      <div className="bg-black text-white grid grid-cols-3 gap-4 px-12 py-20 justify-center">
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
          <img
            src="/Macbook-M3.png"
            alt="Macbook Pro M3 image"
            className="rounded-t-xl h-48 w-full"
          />
          <div className="px-6 pt-2 pb-8">
            <h2 className="text-white text-xl font-bold mb-2">Macbook M3</h2>
              <p className="pb-2">
                <span className="text-white font-bold pr-1">$256</span>
              </p>
              <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
                Add to Cart
              </button>
          </div>
        </div>
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
        <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
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
