import React from "react";
import styles from "./SwiperCart.module.css";
const SwiperCart = (props) => {
  //convert the numbers to persian numbers
  const convertToPersianNumbers = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((digit) => (/\d/.test(digit) ? persianDigits[digit] : digit))
      .join("");
  };

  return (
    <div className="flex flex-col py-[5%] px-[5%]">
      <div className="flex justify-start"></div>
      <div className="flex justify-start items-center space-x-3 pb-[5%]">
        <img src={props.icon} className="h-[40px] w-[40px] " />
        <span className="text-[14px] text-[#555555] font-extrabold whitespace-nowrap pr-[2%]">
          {props.title}
        </span>
      </div>
      <div className={styles["image-container"]}>
        <img src={props.image} className={styles["cropped-image"]} />
      </div>
      <div className="line-clamp-2 text-[#A5A5A5] text-[13px] leading-6 my-[5%]">
        {props.info}
      </div>
        <div className=" border-b border-b-[#eee]"></div>
      <div className="flex flex-col mt-[5%] leading-8">
        <div className="flex justify-start items-center">
          <div className="bg-[#e9fcf8] text-[#008c67] text-[14px] h-4 w-4 font-bold flex justify-center items-center outline outline-1 outline-slate-200 rounded-sm">{convertToPersianNumbers(props.popularity)}</div>
          <div className="mr-[2%] text-[14px] text-[#555555] font-light">محبوبیت میان کارجویان</div>
        </div>
        <div className="flex justify-start  items-center">
          <div className="bg-[#e9fcf8] text-[#008c67] text-[14px] h-4 w-4 font-bold flex justify-center items-center outline outline-1 outline-slate-200 rounded-sm">{convertToPersianNumbers(props.diversity)}</div>
          <div className="mr-[2%] text-[14px] text-[#555555] font-light">تعدد و تنوع فرصت‌های شغلی</div>
        </div>
        <div className="flex justify-start items-center">
          <div className="bg-[#e9fcf8] text-[#008c67] text-[14px] h-4 w-4 font-bold flex justify-center items-center outline outline-1 outline-slate-200 rounded-sm">{convertToPersianNumbers(props.checkResume)}</div>
          <div className="mr-[2%] text-[14px] text-[#555555] font-light">بررسی رزومه‌های دریافتی</div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCart;
