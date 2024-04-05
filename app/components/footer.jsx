import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <section>
        <div className="w-full bg-black text-white md:flex md:justify-between md:py-8 py-4 px-4 md:px-8">
            <div>
                <h1 className="pb-3 font-bold">GTech</h1>
                <p className="w-[300px] text-left">GTech is a shopping center that deals with all kinds of accessories like Phones, TV, Laptops, Headsets, etc. We love our customers and deliver 24/7 anywhere in the country.</p>
            </div>
            <div className="md:flex gap-5">
                <div className='pb-5'>
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/">About</Link></p>
                    <p><Link href="/">Contact Us</Link></p>
                    <p><Link href="/">Products</Link></p>
                    <p><Link href="/">Cart</Link></p>
                </div>
                <div className='pb-5'>
                    <p><Link href="/">Privacy Policy</Link></p>
                    <p><Link href="/">Careers</Link></p>
                    <p><Link href="/">Terms and Conditions</Link></p>
                    <p><Link href="/">Secure Payment</Link></p>
                    <p><Link href="/">Responsibility</Link></p>
                    <p><Link href="/">Delivery</Link></p>
                </div>
                <div className='pb-5'>
                    <p><Link href="/">Ps5</Link></p>
                    <p><Link href="/">Ps5 VR</Link></p>
                    <p><Link href="/">Games</Link></p>
                    <p><Link href="/">iPhones</Link></p>
                    <p><Link href="/">Macbook</Link></p>
                    <p><Link href="/">Hp Laptops</Link></p>
                    <p><Link href="/">Television</Link></p>
                    <p><Link href="/">Other Accessories</Link></p>
                </div>
            </div>
            {/* Newsletter Subscription */}
            <div>
                <h1>NEWSLETTER SUBSCRIPTION</h1>
                <p>Receive product news and updates in your inbox</p>
                <div className="md:flex">
                    <input className="py-2 px-3 outline-none border-none text-black" type="email" placeholder="Email address" />
                    <button className="bg-blue-400 px-4 py-2" type="submit">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
