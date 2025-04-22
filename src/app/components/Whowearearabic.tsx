"use client";

import Image from "next/image";
import CheckIcon from "./CheckIcon";

export default function Whowearearabic() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2">
            {/* Corner Decoration */}
            <div className="absolute bottom-0 left-0 z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="156"
                height="191"
                viewBox="0 0 156 191"
                fill="none"
              >
                <path
                  d="M156 0H0H156ZM-12 183C-12 194.046 -3.0457 203 8 203H136C147.046 203 156 194.046 156 183V179C156 179 152.418 179 148 179H12L-12 183ZM156 191V0V191ZM8 0C-3.0457 0 -12 8.9543 -12 20V183C-12 194.046 -3.0457 203 8 203L12 179V8C12 3.58172 12 0 12 0H8Z"
                  fill="#002B5B"
                />
              </svg>
            </div>

            {/* Image */}
            <div className="relative z-10 p-5 rounded-md overflow-hidden">
              <Image
                src="/whoweare.png"
                alt="Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-right">
            <h2 dir="rtl" className="text-2xl md:text-5xl mb-3 text_heading font-semibold text-[#002B5B]">
              من نحن؟
            </h2>
            <p dir="rtl" className="text-[#070707] mb-8 font-poppins text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
              تأسست <strong>مجموعة <strong>أدماس</strong> العالمية</strong> عام ١٩٨٨ م. في المملكة العربية
              السعودية، وهي شركة رائدة في مجال الاستثمار والخدمات، تدعم الشركات
              العالمية في مسيرتها نحو النجاح في المملكة. بفضل خبرتنا في مختلف
              القطاعات، نقدم دعمًا شاملًا، بدءًا من الخدمات اللوجستية وخدمات
              القوى العاملة، وصولًا إلى الاستثمارات المتخصصة في القطاعات التالية:
            </p>

            <div className="grid grid-cols-1  sm:grid-cols-2  mb-6 text-[#070707] font-poppins text-sm sm:text-base md:text-[18px] font-medium leading-[160%] tracking-[0.09px]">
              <div  className="space-y-3">
                <div className="flex justify-end gap-3">
                  <span >النقل والبنية التحتية اللوجستية</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>استهداف قطاع التعدين</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>استهداف قطاع الطاقة</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>استهداف قطاع الرعاية الصحية</span>
                  <CheckIcon />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-end gap-3">
                  <span>تطوير العقارات</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>إدارة الضيافة والفنادق</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>تداول الأوراق المالية</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>خدمات السيارات</span>
                  <CheckIcon />
                </div>
                <div className="flex justify-end gap-3">
                  <span>توريد مواد البناء</span>
                  <CheckIcon />
                </div>
              </div>
            </div>

            <p dir="rtl" className="text-[#070707] mb-8 font-poppins text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-[160%] tracking-[0.1px] text-right">
              تتمتع <strong>أدماس</strong> بسمعة قوية ومحترمة لدى كبرى المؤسسات المالية، مما ساهم
              بشكل كبير في نمونا ومصداقيتنا على مر السنين. هذه السمعة تُمكّننا
              من تعزيز شراكاتنا الاستراتيجية وبناء ثقة المستثمرين والشركاء.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-right">
            <h2 className=" text-2xl md:text-5xl mb-4 font-semibold text_heading text-[#002B5B]">
              إرثنا ومستقبلنا
            </h2>
            <p dir="rtl" className=" mb-6 text-[#070707] font-poppins text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
              بفضل إرثها الممتد لأكثر من ثلاثة عقود، نجحت شركة <strong>أدماس</strong> في بناء
              علاقات عميقة مع الشركات الدولية والهيئات الحكومية والمستثمرين
              والشركاء الإقليميين والدوليين.
            </p>
            <p dir="rtl" className="mb-6 text-[#070707] font-poppins text-base sm:text-lg md:text-xl lg:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
              واليوم، نتطور مع التركيز على الاستدامة والتكنولوجيا وأهداف التنمية
              الوطنية، ونهدف إلى أن نصبح شركة مدرجة في البورصة وقوة رائدة في
              تشكيل الاقتصاد السعودي الجديد والتوافق مع رؤية السعودية 2030.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2">
            {/* Corner Decoration */}
            <div className="absolute bottom-0 right-0 z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="142"
                height="191"
                viewBox="0 0 142 191"
                fill="none"
              >
                <mask id="path-1-inside-1_5311_55" fill="white">
                  <path d="M0.0935059 8C0.0935059 3.58173 3.67523 0 8.09351 0H134C138.418 0 142 3.58172 142 8V183C142 187.418 138.418 191 134 191H8.09349C3.67521 191 0.0935059 187.418 0.0935059 183V8Z" />
                </mask>
                <path
                  d="M0.0935059 0H142H0.0935059ZM154 183C154 194.046 145.046 203 134 203H20.0935C9.04781 203 0.0935059 194.046 0.0935059 183V179C0.0935059 179 3.67523 179 8.09351 179H130L154 183ZM0.0935059 191V0V191ZM134 0C145.046 0 154 8.9543 154 20V183C154 194.046 145.046 203 134 203L130 179V8C130 3.58172 130 0 130 0H134Z"
                  fill="#002B5B"
                  mask="url(#path-1-inside-1_5311_55)"
                />
              </svg>
            </div>

            {/* Image */}
            <div className="relative z-10 p-5 rounded-md overflow-hidden">
              <Image
                src="/whoweare2.png"
                alt="Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
