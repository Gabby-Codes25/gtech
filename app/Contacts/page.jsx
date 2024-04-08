"use client"

import React from 'react';
import Footer from '../components/footer';

function Page() {
  return (
    <div>
      <div className='w-full md:h-[344px]'>
        <div>
          <img
            src="/iwatch-banner.jpeg" 
            alt="iWatch" 
            className='opacity-75 h-[300px] w-full sm:object-cover'
          />
        </div>
      </div>
      <div className='w-full bg-[#a19f9f22] px-4 lg:px-8 py-10 lg:py-28'>
        <div className='bg-gray-600 rounded-xl w-full max-w-[700px] mx-auto text-left border px-4 lg:px-24 shadow-lg'>
          <h1 className='text-center text-4xl font-extrabold py-7'>Leave us a message</h1>
          <form action="" method="post">
            <div className='py-3 flex flex-col lg:flex-row gap-3'>
              <input className='p-2 border rounded-lg outline-none' type="text" placeholder='First name' />
              <input className='p-2 border rounded-lg outline-none' type="text" placeholder='Last name' />
            </div>
            <div className='py-3 flex flex-col lg:flex-row gap-3'>
              <input className='p-2 border rounded-lg outline-none' type="email" placeholder='Email address' />
              <input className='p-2 border rounded-lg outline-none' type="tel" placeholder='Mobile Number' />
            </div>
            <div className='py-5'>
              <textarea className='p-2 border rounded-lg outline-none' name="" id="" cols="50" rows="10" placeholder='Add your text here'></textarea>
            </div>
            <button className='block mx-auto lg:mx-0 bg-blue-300 hover:bg-blue-500 py-2 px-3 mb-8 rounded-lg' type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
