"use client"
import React from "react";
import BackgroundSwiper from "./components/backgroundSlider";
import Products from "./Products/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
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
        <div className="bg-black w-full text-white flex justify-around py-8 px-8">
          <div>
            <h1>GTech</h1>
            <p className="w-[40%]">GTech is a shopping center that deals on all kind of accessories like Phones, Tv, Laptops, Headset etc. We love our customers and deliver 24/7 anywhere in the country.</p>
          </div>
          <div>
            <nav className="flex gap-6">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Cart</a></li>
              </ul>
              <ul>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Terms and Conditions</a></li>
                <li><a href="/">Secure Payment</a></li>
                <li><a href="/">Responsibility</a></li>
                <li><a href="/">Delivery</a></li>
              </ul>
              <ul>
                <li><a href="/">Ps5</a></li>
                <li><a href="/">Ps5 VR</a></li>
                <li><a href="/">Games</a></li>
                <li><a href="/">iPhones</a></li>
                <li><a href="/">Macbook</a></li>
                <li><a href="/">Hp Latops</a></li>
                <li><a href="/">Televison</a></li>
                <li><a href="/">Other Accesories</a></li>
              </ul>
            </nav>
          </div>
          {/* social link */}
          <div className="gap-5">
            <li><span>Instagram</span></li>
            <li><span>Facebook</span></li>
            <li><span>Twitter</span></li>
            <li><span>Twitch</span></li>
            <li><span>Twitter</span></li>
          </div>
          {/* Newsletter Subscription */}
          <div>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
