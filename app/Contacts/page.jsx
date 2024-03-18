"use client"

import React from 'react'
import Footer from '../components/footer'

function page() {
  return (
    <div>
      <div className='w-full'>
        <h1 className='text-center text-4xl font-extrabold py-7'>Leave us a message</h1>
        <div className='bg-gray-600 rounded-xl w-[700px] my-14 mx-auto text-left border px-24 py-7 shadow-lg'>
          <form action="" method="post">
            <div className='py-3 flex gap-3'>
              <input className='p-2 border-none rounded-lg outline-none' type="text" placeholder='First name' />
              <input className='p-2 border-none rounded-lg outline-none' type="text" placeholder='Last name' />
            </div>
            <div className='py-3 flex gap-3'>
              <input className='p-2 border-none rounded-lg outline-none' type="email" placeholder='Email address' />
              <input className='p-2 border-none rounded-lg outline-none' type="tel" placeholder='Mobile Number' />
            </div>
            <div className='py-5'>
            <textarea className='p-2 border-none rounded-lg outline-none ' name="" id="" cols="50" rows="10" placeholder='Add your text here'></textarea>
            </div>
            <button className='block justify-center bg-blue-300 hover:bg-blue-500 py-2 px-3 rounded-lg' type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page