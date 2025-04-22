"use client";

import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative h-[800px] w-full">
      {/* Background Image */}
      <Image
        src="/banner.png" 
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
        <div className="text-center max-w-[1200px] text-white">
          <h1 className="text-3xl md:text-[64px] text_heading   font-bold leading-[130%] ">
            Powering the Future of Investment  in Saudi Arabia and Beyond
          </h1>
          <p className="mt-6 text-[16px] md:text-[20px] font-light text-white/90  leading-relaxed md:w-[80%] mx-auto font-poppins">
            Delivering world-class services in real estate, logistics, hospitality, and emerging industries empowering growth through innovation and impact since 1988. Recognized by leading financial institutions for our credibility and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#services" className="bg-white rounded-md px-6 py-3 text-[#070707] font-poppins text-base sm:text-lg md:text-[18px] font-medium leading-[160%] hover:bg-gray-100 transition">
              Explore Our Divisions
            </Link>
            <button className="border border-white text-white px-6 py-3 rounded-md font-poppins text-base sm:text-lg md:text-[18px] font-medium leading-[160%] hover:bg-white hover:text-black transition">
              Partner With Admass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
