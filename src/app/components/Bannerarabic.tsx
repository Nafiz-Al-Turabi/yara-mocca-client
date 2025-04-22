"use client";

import Image from "next/image";

const Bannerarabic = () => {
  return (
    <section className="relative h-screen xl:h-[800px] w-full">
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
          <h1 className="text-3xl md:text-[64px] text_heading md:max-w-3xl md:mx-auto font-bold leading-[130%]  ">
            تعزيز مستقبل الاستثمار في المملكة العربية السعودية وخارجها
          </h1>
          <p dir="rtl" className="mt-6 text-[16px] md:text-[20px] md:max-w-5xl md:mx-auto font-light text-white/90  leading-relaxed md:w-[80%] mx-auto font-poppins">
            تقديم خدمات عالمية المستوى في العقارات، والخدمات اللوجستية،
            والضيافة، والصناعات الناشئة - وتمكين النمو من خلال الابتكار والتأثير
            منذ عام ١٩٨٨ م. معترف بها من قبل المؤسسات المالية الرائدة لمصداقيتنا
            وموثوقيتنا.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white rounded-md px-6 py-3 text-[#070707] font-poppins text-base sm:text-lg md:text-[18px] font-medium leading-[160%] hover:bg-gray-100 transition">
              استكشف أقسامنا
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-poppins text-base sm:text-lg md:text-[18px] font-medium leading-[160%] hover:bg-white hover:text-black transition">
              شارك مع أدماس
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannerarabic;
