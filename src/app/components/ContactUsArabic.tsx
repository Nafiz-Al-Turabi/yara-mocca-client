"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactUsArabic() {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_3e6fgaf", //  service ID
        "template_9vmfu7h", //  template ID
        form.current,
        "UehaXJ2NZDeLrkWNr" //  public key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast.success("تم إرسال الرسالة بنجاح");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Send error:", error.text);
          toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
          setLoading(false);
        }
      );
  };

  return (
    <section dir="rtl" id="contact" className="bg-[#FDFBFA] py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-[#002B5B] text_heading text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[584] leading-[130%] mb-4">
          تواصل معنا
        </h2>
        <p
          dir="rtl"
          className="text-[#070707] text-center font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px] max-w-3xl mx-auto mb-12"
        >
          دعونا نعمل معًا. سواء كنت تبحث عن التوسع في المملكة العربية السعودية
          أو <br />
          استكشاف آفاق استثمار جديدة، فإن{" "}
          <strong>أدماس</strong> هو شريكك الموثوق.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="space-y-6 text-[#070707] font-poppins text-base sm:text-lg md:text-[20px] font-normal leading-[160%] tracking-[0.1px]">
            <div className="flex flex-row-reverse justify-end  items-center gap-3">
              <span>حي الورود، الرياض، المملكة العربية السعودية</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <g id="elements">
                  <path
                    id="Subtract"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0015 0.25C6.17538 0.25 2.52505 2.51303 0.997135 6.08468C-0.42482 9.40865 0.344963 12.2373 1.94771 14.6595C3.26177 16.6454 5.17835 18.4178 6.90742 20.0168L6.90758 20.0169L6.90824 20.0175C7.23768 20.3222 7.56031 20.6206 7.87066 20.9129L7.87231 20.9145C8.44734 21.4528 9.21115 21.75 10.0015 21.75C10.7919 21.75 11.5558 21.4528 12.1308 20.9144C12.4243 20.6396 12.7286 20.3592 13.039 20.0732L13.0391 20.0732L13.0391 20.0732C14.787 18.4627 16.7304 16.672 18.0582 14.6609C19.6591 12.2362 20.4261 9.40453 19.0059 6.08468C17.478 2.51303 13.8277 0.25 10.0015 0.25ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6Z"
                    fill="#002B5B"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-row-reverse justify-end items-center gap-3">
              <span dir="ltr">+966 11 419353</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="Call">
                  <path
                    id="Vector"
                    d="M4.31726 0.286568C4.88395 0.403692 5.33524 0.784431 5.61564 1.28746L6.50885 2.88991C6.83786 3.48011 7.11473 3.9768 7.29554 4.40857C7.48735 4.86658 7.60126 5.31824 7.54919 5.8176C7.49711 6.31696 7.29246 6.7354 7.01029 7.14399C6.74428 7.52917 6.37088 7.95804 5.92718 8.46767L4.61417 9.97585C4.37889 10.2461 4.26124 10.3812 4.25049 10.5501C4.23974 10.719 4.33616 10.8633 4.529 11.1518C6.17259 13.6109 8.38773 15.8268 10.8488 17.4718C11.1374 17.6647 11.2816 17.7611 11.4505 17.7503C11.6194 17.7396 11.7546 17.6219 12.0248 17.3866L13.5331 16.0736C14.0427 15.6299 14.4716 15.2565 14.8568 14.9905C15.2653 14.7083 15.6838 14.5036 16.1831 14.4516C16.6825 14.3995 17.1342 14.5134 17.5922 14.7052C18.0239 14.886 18.5206 15.1629 19.1107 15.4918L20.7133 16.3851C21.2163 16.6655 21.5971 17.1168 21.7142 17.6835C21.8325 18.2561 21.658 18.8316 21.2724 19.3047C19.8735 21.021 17.6322 22.1139 15.281 21.6396C13.8358 21.348 12.4098 20.8623 10.6851 19.8732C7.2197 17.8858 4.11263 14.777 2.12755 11.3157C1.13843 9.59099 0.652719 8.165 0.361176 6.71974C-0.11312 4.36852 0.979715 2.12724 2.69608 0.728334C3.16911 0.342792 3.74466 0.16822 4.31726 0.286568Z"
                    fill="#002B5B"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-row-reverse justify-end items-center gap-3">
              <span>admass@admassgroup.com</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <g id="elements">
                  <path
                    id="Subtract"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.92 0.786805C11.967 0.737734 10.033 0.737731 8.07999 0.786799L8.02182 0.788259C6.497 0.826545 5.27002 0.857352 4.2867 1.0286C3.2572 1.20789 2.42048 1.55177 1.71362 2.26132C1.00971 2.9679 0.66764 3.7926 0.491759 4.8054C0.324289 5.76978 0.298783 6.9668 0.267187 8.44965L0.265935 8.50839C0.244688 9.50473 0.244688 10.4953 0.265936 11.4916L0.267188 11.5504C0.298786 13.0332 0.324293 14.2302 0.491763 15.1946C0.667644 16.2074 1.00972 17.0321 1.71362 17.7387C2.42048 18.4482 3.2572 18.7921 4.2867 18.9714C5.27001 19.1426 6.49697 19.1735 8.02177 19.2117L8.07999 19.2132C10.033 19.2623 11.967 19.2623 13.92 19.2132L13.9782 19.2117C15.503 19.1735 16.73 19.1426 17.7133 18.9714C18.7428 18.7921 19.5795 18.4482 20.2864 17.7387C20.9903 17.0321 21.3324 16.2074 21.5082 15.1946C21.6757 14.2302 21.7012 13.0332 21.7328 11.5503L21.7341 11.4916C21.7553 10.4953 21.7553 9.50474 21.7341 8.5084L21.7328 8.44967C21.7012 6.96683 21.6757 5.76979 21.5082 4.80542C21.3324 3.79261 20.9903 2.96792 20.2864 2.26134C19.5795 1.55179 18.7428 1.20791 17.7133 1.02862C16.73 0.857365 15.503 0.826555 13.9782 0.788266L13.92 0.786805ZM6.38182 5.85452C6.02527 5.64371 5.56533 5.76186 5.35452 6.11841C5.14371 6.47497 5.26186 6.93491 5.61841 7.14572L8.56043 8.88515C9.43128 9.40003 10.1827 9.75012 11.0001 9.75012C11.8175 9.75012 12.569 9.40003 13.4398 8.88515L16.3818 7.14572C16.7384 6.93491 16.8565 6.47497 16.6457 6.11841C16.4349 5.76186 15.975 5.64371 15.6184 5.85452L12.6764 7.59395C11.832 8.09316 11.3831 8.25012 11.0001 8.25012C10.6171 8.25012 10.1682 8.09316 9.32384 7.59395L6.38182 5.85452Z"
                    fill="#002B5B"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-1/2 space-y-4"
          >
            <input
              name="user_name"
              type="text"
              placeholder="اسمك"
              className="w-full border text-right border-[#070707] rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <input
              name="user_email"
              type="email"
              placeholder="عنوان البريد الإلكتروني"
              className="w-full border text-right border-[#070707] rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <input
              name="company"
              type="text"
              placeholder="الشركة"
              className="w-full border text-right border-[#070707] rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <input
              name="interest"
              type="text"
              placeholder="مجال الخدمة المهتم به"
              className="w-full border text-right border-[#070707] rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            />
            <textarea
              name="message"
              placeholder="اكتب رسالتك"
              className="w-full border text-right border-[#070707] rounded-sm px-4 py-2 h-28 focus:outline-none focus:ring-1 focus:ring-[#002B5B]"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#002B5B] text-right text-white px-6 py-2 rounded-sm transition-all ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#014380]"
              }`}
            >
              {loading ? "جاري الإرسال..." : "قدّم الآن"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
