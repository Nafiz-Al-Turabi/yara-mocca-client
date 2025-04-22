"use client";

import Image from "next/image";

export default function FooterArabic() {
  return (
    <footer  className="bg-[#002B5B] text-white py-10 font-poppins">
      <div  className="max-w-2xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/footerlogo.png"
            alt="Admass Logo"
            width={200}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-right">
          <h4 className="text-white font-ttinter text-lg sm:text-xl md:text-[24px] font-[584] leading-[130%] mb-3">روابط سريعة</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline text-[#E9E9EA] font-poppins text-sm sm:text-base md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              من نحن
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[#E9E9EA] font-poppins text-sm sm:text-base md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              الخدمات
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[#E9E9EA] font-poppins text-sm sm:text-base md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-4 text-[#777980] text-center font-poppins text-sm sm:text-base md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
      © 2025 مجموعة <strong>أدماس</strong> الدولية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
