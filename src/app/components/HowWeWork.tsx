"use client";

import Image from "next/image";

export default function HowWeWorkPage() {
    return (
        <section className="bg-[#F8F8F8] py-20 font-poppins">
            <div className="text-center mb-10">
                <h2 className="text-[#002B5B] text_heading text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[584] leading-[130%]">How We Work</h2>
            </div>
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
                {/* Left: Steps */}
                <div className="relative w-full lg:w-1/2">
                    {/* Steps */}
                    <div className="space-y-10 pl-12 relative z-10">
                        {/* Step 1 */}
                        <div className="flex gap-4 items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#002B5B" />
                                <path d="M25.5 16.7324V31H23.1465V19.5254L19.6602 20.707V18.7637L25.2168 16.7324H25.5Z" fill="white" />
                            </svg>
                            <div>
                                <h3 className="text-[#002B5B] text_heading text-lg sm:text-xl md:text-[24px] font-[584] leading-[130%]">Client Discovery</h3>
                                <p className="text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
                                    We gather relevant information about your business, goals, and market needs.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4 items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#002B5B" />
                                <path d="M28.6055 29.125V31H19.0742V29.3887L23.7031 24.3398C24.2109 23.7669 24.6113 23.2721 24.9043 22.8555C25.1973 22.4388 25.4023 22.0645 25.5195 21.7324C25.6432 21.3939 25.7051 21.0651 25.7051 20.7461C25.7051 20.2969 25.6204 19.903 25.4512 19.5645C25.2884 19.2194 25.0475 18.9492 24.7285 18.7539C24.4095 18.5521 24.0221 18.4512 23.5664 18.4512C23.0391 18.4512 22.5964 18.5651 22.2383 18.793C21.8802 19.0208 21.61 19.3366 21.4277 19.7402C21.2454 20.1374 21.1543 20.5931 21.1543 21.1074H18.8008C18.8008 20.2806 18.9896 19.5254 19.3672 18.8418C19.7448 18.1517 20.2917 17.6048 21.0078 17.2012C21.724 16.791 22.5866 16.5859 23.5957 16.5859C24.5462 16.5859 25.3535 16.7454 26.0176 17.0645C26.6816 17.3835 27.1862 17.8359 27.5312 18.4219C27.8828 19.0078 28.0586 19.7012 28.0586 20.502C28.0586 20.9447 27.987 21.3841 27.8438 21.8203C27.7005 22.2565 27.4954 22.6927 27.2285 23.1289C26.9681 23.5586 26.6589 23.9915 26.3008 24.4277C25.9427 24.8574 25.5488 25.2936 25.1191 25.7363L22.043 29.125H28.6055Z" fill="white" />
                            </svg>
                            <div>
                                <h3 className="text-[#002B5B] text_heading text-lg sm:text-xl md:text-[24px] font-[584] leading-[130%]">Saudi Market Research</h3>
                                <p className="text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
                                    Our team conducts deep analysis to assess opportunity, viability, and competition.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4 items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 48" fill="none">
                                <rect width="48" height="48" rx="24" fill="#002B5B" />
                                <path d="M21.8379 22.8262H23.2441C23.791 22.8262 24.2435 22.7318 24.6016 22.543C24.9661 22.3542 25.2363 22.0938 25.4121 21.7617C25.5879 21.4297 25.6758 21.0488 25.6758 20.6191C25.6758 20.1699 25.5944 19.7858 25.4316 19.4668C25.2754 19.1413 25.0345 18.8906 24.709 18.7148C24.39 18.5391 23.9831 18.4512 23.4883 18.4512C23.0716 18.4512 22.694 18.5358 22.3555 18.7051C22.0234 18.8678 21.7598 19.1022 21.5645 19.4082C21.3691 19.7077 21.2715 20.0658 21.2715 20.4824H18.9082C18.9082 19.7272 19.1068 19.0566 19.5039 18.4707C19.901 17.8848 20.4414 17.4258 21.125 17.0938C21.8151 16.7552 22.5898 16.5859 23.4492 16.5859C24.3672 16.5859 25.168 16.7389 25.8516 17.0449C26.5417 17.3444 27.0788 17.7936 27.4629 18.3926C27.847 18.9915 28.0391 19.7337 28.0391 20.6191C28.0391 21.0228 27.9447 21.4329 27.7559 21.8496C27.5671 22.2663 27.2871 22.6471 26.916 22.9922C26.5449 23.3307 26.0827 23.6074 25.5293 23.8223C24.9759 24.0306 24.3346 24.1348 23.6055 24.1348H21.8379V22.8262ZM21.8379 24.6621V23.373H23.6055C24.4388 23.373 25.1484 23.4707 25.7344 23.666C26.3268 23.8613 26.8086 24.1315 27.1797 24.4766C27.5508 24.8151 27.821 25.2025 27.9902 25.6387C28.166 26.0749 28.2539 26.5371 28.2539 27.0254C28.2539 27.6895 28.1335 28.2819 27.8926 28.8027C27.6582 29.3171 27.3229 29.7533 26.8867 30.1113C26.4505 30.4694 25.9395 30.7396 25.3535 30.9219C24.7741 31.1042 24.1426 31.1953 23.459 31.1953C22.847 31.1953 22.2611 31.1107 21.7012 30.9414C21.1413 30.7721 20.64 30.5215 20.1973 30.1895C19.7546 29.8509 19.403 29.431 19.1426 28.9297C18.8887 28.4219 18.7617 27.8359 18.7617 27.1719H21.1152C21.1152 27.5951 21.2129 27.9694 21.4082 28.2949C21.61 28.6139 21.89 28.8646 22.248 29.0469C22.6126 29.2292 23.0293 29.3203 23.498 29.3203C23.9928 29.3203 24.4193 29.2324 24.7773 29.0566C25.1354 28.8809 25.4089 28.6204 25.5977 28.2754C25.793 27.9303 25.8906 27.5137 25.8906 27.0254C25.8906 26.472 25.7832 26.0228 25.5684 25.6777C25.3535 25.3327 25.0475 25.0788 24.6504 24.916C24.2533 24.7467 23.7845 24.6621 23.2441 24.6621H21.8379Z" fill="white" />
                            </svg>
                            <div>
                                <h3 className="text-[#002B5B] text_heading text-lg sm:text-xl md:text-[24px] font-[584] leading-[130%]">Strategic Development</h3>
                                <p className="text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
                                    We develop a customized action plan and execute with agility and compliance.
                                </p>
                            </div>
                        </div>

                        {/* Reporting */}
                        <div className="pl-12">
                            <p className="text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
                                <span className="font-semibold text-[#002B5B]">Reporting:</span> Communication is tailored to the stage of your engagement—daily, weekly, or monthly updates as needed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/how-we-work.jpeg"
                        alt="How We Work"
                        width={700}
                        height={500}
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
