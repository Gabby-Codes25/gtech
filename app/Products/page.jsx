"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Products } from '../components/products';
import ProductCard from '../components/ProductCard';

function Page() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='flex absolute top-[8rem]'>
      <div className='fixed left-0 h-full bg-[#0a192f] text-white flex flex-col z-20 transition-width duration-300 ease-in-out' style={{ width: nav ? '200px' : '50px' }}>
        <div onClick={handleClick} className='cursor-pointer z-10 font-extrabold text-white text-3xl px-4 py-4'>
          {nav ? "X" : ">"}
        </div>
        <div className={`flex flex-col pt-16 px-4 transition-opacity duration-300 ease-in-out ${nav ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-2xl font-bold mb-4'>Categories</div>
          <ul className='space-y-6'>
            <li><Link href="/">Laptop</Link></li>
            <li><Link href="/">Sounds</Link></li>
            <li><Link href="/">Speaker</Link></li>
            <li><Link href="/">Ps5 Console</Link></li>
            <li><Link href="/">Television</Link></li>
          </ul>
        </div>
      </div>
      <div className={`flex-1 p-5 transition-margin duration-300 ${nav ? 'ml-[200px]' : 'ml-[50px]'}`}>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {Products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
