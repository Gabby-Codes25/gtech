'use client'

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function ProductCard(props) {
  const { id, image, title, price, quantity, slug } = props.data;

  return (
    <div className='bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300'>
      <Link href={`/products/${slug}`} className='block'>
          <div className='w-full h-64 relative'>
            <Image
              src={image}
              alt={title}
              layout='fill'
              objectFit='cover'
              className='rounded-t-md'
              priority={true} // Optimizes image loading for better performance
            />
          </div>
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{title}</h3>
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-medium'>{price}</p>
        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 transition-colors duration-200'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
