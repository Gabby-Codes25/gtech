"use client"
import React, { Suspense } from "react";
import BackgroundSwiper from "./components/backgroundSlider";
import Products from "./Products/page";
import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <Suspense fallback={<p>Loading home...</p>}>
      <section className="w-full h-[587px]">
        <BackgroundSwiper />
      </section>
      <section className="flex overflow-hidden gap-4 w-full h-full px-8 pb-[5.5rem] pt-5">
      <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-72 h-80 mx-auto mb-5">
        <img
          src="/Macbook-M2.jpg"
          alt="Macbook M2"
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
          src="/COD-MWII.jpg"
          alt="Call of Duty II"
          className="rounded-t-xl h-48 w-full"
        />
        <div className="px-6 pt-2 pb-8">
          <h2 className="text-white text-xl font-bold mb-2">Call of Duty II</h2>
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
          src="/iphone-15-pro-max.jpg"
          alt="iPhone 15"
          className="rounded-t-xl h-48 w-full"
        />
        <div className="px-6 pt-2 pb-8">
          <h2 className="text-white text-xl font-bold mb-2">iPhone 15 Pro Max</h2>
            <p className="pb-2">
              <span className="text-white font-bold pr-1">$256</span>
            </p>
            <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 cursor-pointer">
              Add to Cart
            </button>
        </div>
        <div className="w-full justify-center">
          <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300 mx-[auto] cursor-pointer">
              <Link href="/Products">See More</Link>
            </button>
        </div>
      </div>
      </section>
      <footer>
        <section>
          <div className="bg-black w-full text-white flex justify-between py-8 px-8">
            <div>
              <h1 className="pb-3 font-bold">GTech</h1>
              <p className="w-[300px] text-left">GTech is a shopping center that deals on all kind of accessories like Phones, Tv, Laptops, Headset etc. We love our customers and deliver 24/7 anywhere in the country.</p>
            </div>
            <div className="flex gap-5">
                <div>
                  <p><Link href="/">Home</Link></p>
                  <p><Link href="/">About</Link></p>
                  <p><Link href="/">Contact Us</Link></p>
                  <p><Link href="/">Products</Link></p>
                  <p><Link href="/">Cart</Link></p>
                </div>
                <div>
                  <p><Link href="/">Privacy Policy</Link></p>
                  <p><Link href="/">Careers</Link></p>
                  <p><Link href="/">Terms and Conditions</Link></p>
                  <p><Link href="/">Secure Payment</Link></p>
                  <p><Link href="/">Responsibility</Link></p>
                  <p><Link href="/">Delivery</Link></p>
                </div>
                <div>
                  <p><Link href="/">Ps5</Link></p>
                  <p><Link href="/">Ps5 VR</Link></p>
                  <p><Link href="/">Games</Link></p>
                  <p><Link href="/">iPhones</Link></p>
                  <p><Link href="/">Macbook</Link></p>
                  <p><Link href="/">Hp Latops</Link></p>
                  <p><Link href="/">Televison</Link></p>
                  <p><Link href="/">Other Accesories</Link></p>
                </div>
            </div>
            {/* Newsletter Subscription */}
            <div>
              <h1>NEWSLETTER SUBSCRIPTION</h1>
              <p>Receive products news and update in your inbox</p>
              <div className="flex">
                <input className="py-2 px-3 outline-none border-none text-black" type="email" placeholder="Email address" />
                <button className="bg-blue-400 px-4 py-2" type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </footer>
      </Suspense>
    </section>
  );
}
