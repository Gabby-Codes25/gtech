"use client"
import React, { Suspense } from "react";
import BackgroundSwiper from "./components/backgroundSlider";
import Footer from "./components/footer";
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
      <Footer />
      </Suspense>
    </section>
  );
}
