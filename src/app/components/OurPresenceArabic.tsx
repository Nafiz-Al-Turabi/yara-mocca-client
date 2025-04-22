"use client";

import Image from "next/image";

export default function OurPresenceArabic() {
    return (
        <section className=" py-20 font-poppins">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Image with Corner Border */}
                <div className="relative w-full lg:w-1/2">
                    {/* Blue corner frame */}
                    <div className="absolute -top-5 -left-5 z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="176" height="199" viewBox="0 0 176 199" fill="none">
                            <mask id="path-1-inside-1_5311_224" fill="white">
                                <path d="M175.272 190.441C175.272 194.86 171.69 198.441 167.272 198.441H8C3.58173 198.441 0 194.86 0 190.441V7.99986C0 3.58159 3.58173 -0.000152588 8 -0.000152588H167.272C171.69 -0.000152588 175.272 3.58157 175.272 7.99985V190.441Z" />
                            </mask>
                            <path d="M175.272 198.441H0H175.272ZM-12 7.99985C-12 -3.04585 -3.0457 -12.0002 8 -12.0002H155.272C166.318 -12.0002 175.272 -3.04585 175.272 7.99985V11.9998C175.272 11.9998 171.69 11.9998 167.272 11.9998H12L-12 7.99985ZM175.272 -0.000152588V198.441V-0.000152588ZM8 198.441C-3.0457 198.441 -12 189.487 -12 178.441V7.99985C-12 -3.04585 -3.0457 -12.0002 8 -12.0002L12 11.9998V190.441C12 194.86 12 198.441 12 198.441H8Z" fill="#002B5B" mask="url(#path-1-inside-1_5311_224)" />
                        </svg>
                    </div>

                    {/* Main image */}
                    <Image
                        src="/presence-main.png" // Replace with your image
                        alt="Presence Main"
                        width={600}
                        height={450}
                        className="rounded-md relative z-20"
                    />
                </div>

                {/* Right Text + Images */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[#002B5B] text_heading text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[584] leading-[130%] text-right mb-4">وجودنا</h2>
                    <p dir="rtl" className="text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] text-right tracking-[0.1px] mb-8">
                        تدير <strong>أدماس</strong> عدة مكاتب في العاصمة الرياض، المملكة العربية السعودية، وهي ملتزمة بتوسيع وجودها المادي لتلبية الطلب المتزايد والوصول إلى المناطق غير المخدومة.
                    </p>

                    <div className="flex gap-4">
                        <Image
                            src="/presence-sub1.png" // Replace with actual image
                            alt="Sub 1"
                            width={250}
                            height={180}
                            className="rounded-md"
                        />
                        <Image
                            src="/presence-sub2.png" // Replace with actual image
                            alt="Sub 2"
                            width={250}
                            height={180}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
