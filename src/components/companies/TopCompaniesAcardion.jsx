import React, { useEffect, useState } from "react";
import DefaultImage from "../../assets/images/organization-icon/Default.webp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const TopCompaniesAcardion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMoved, setIsMoved] = useState(false);

  const convertToPersianNumbers = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .split("")
      .map((digit) => (/\d/.test(digit) ? persianDigits[digit] : digit))
      .join("");
  };
  useEffect(() => {
    if (props.defaultOpen&&props.index===1) {
      setIsOpen(true);
      setIsMoved(true);
      setTimeout(() => setIsExpanded(true), 200);
    }
  }, [props.defaultOpen]);

  return (
    <div>
      <div
        className={`${
          isOpen ? "shadow-[0px_2px_4px_rgba(0,0,0,0.3)] z-50" : ""
        } `}
      >
        <button
          className={`w-full text-left p-3 flex justify-between items-center h-20  border-t border-t-gray-200 border-r-4 border-r-gray-200 hover:bg-gray-100 transition ${
            isOpen ? "bg-gray-100  " : ""
          } `}
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isMoved) {
              setIsMoved(true);
              setTimeout(() => setIsExpanded(true), 200); // Delays expansion after movement
            } else {
              setIsExpanded(false);
              setIsMoved(false);
            }
          }}
        >
          <div className="flex items-center">
            <div className=" text-[#999999] ml-4 w-[40px] h-[40px] border-2 border-dashed rounded-full border-gray-300 flex items-center justify-center">
              <span className="text-[20px] font-semibold">
                {convertToPersianNumbers(props.index)}
              </span>
            </div>
            {props.icon ? (
              <img
                src={props.icon}
                className={`relative bg-white transition-transform duration-500 rounded-sm ease-in-out ${
                  isMoved ? " translate-x-[-20%] translate-y-[80%]" : ""
                } ${
                  isExpanded
                    ? " border border-gray-200 w-[90px] h-[90px] rounded-sm"
                    : " w-12 h-12"
                } `}
              />
            ) : (
              <img
                src={DefaultImage}
                className={`relative bg-white transition-transform duration-500 rounded-sm ease-in-out ${
                  isMoved ? " translate-x-[-20%] translate-y-[80%]" : ""
                } ${
                  isExpanded
                    ? " border border-gray-500 w-[90px] h-[90px] rounded-sm shadow-2xl"
                    : " w-12 h-12"
                } `}
              />
            )}
            {
              <span
                className={` text-[#555555] text-[18px] font-semibold mr-4 whitespace-nowrap transition-all duration-500 ease-in-out flex items-center ${
                  isExpanded ? "absolute justify-center right-[25%]" : ""
                } `}
              >
                {props.titleFa} | {props.titleEn}
              </span>
            }
          </div>
          <div className="flex justify-center items-center">
            <span className="text-yellow-500 ml-[10%] text-[18px] font-semibold">
              {convertToPersianNumbers(props.avg)}
            </span>
            <div className="ml-[5%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className={`w-4 h-4 ml-2 
                   text-yellow-500
                 `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>

            <span className="text-[#9d9d9d] text-[12px] pl-[2%]">
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </span>
          </div>
        </button>
      </div>
      <div
        className={` bg-white overflow-hidden transition-height duration-500 ease-in-out z-10 ${
          isOpen ? "h-[320px] mt-[4px] " : "max-h-[0px]"
        } `}
      >
        <div className="flex justify-between">
          <div className="w-[50%] flex flex-col mt-[12%] mr-[3%]">
            <div className="flex border-b-[1px] border-dashed border-b-gray-300 pb-2">
              <span className="text-[#444444] text-[14px] border-l border-l-gray-400 pl-2">
                کامپیوتر، فناوری اطلاعات و اینترنت
              </span>

              <span className="text-[#444444] text-[14px] pr-2">
                {convertToPersianNumbers(props.number)}
              </span>
            </div>
            <div className="flex flex-col mt-[5%] text-[#00b38f] text-[15px] leading-10">
              <div className="flex justify-start items-center">
                <div className="bg-[#e5f7f3] border-[1px] w-7 h-7 rounded-sm border-[#00b38f] flex justify-center items-center">
                  {convertToPersianNumbers(props.popularity)}
                </div>
                <span className="mr-[2%]">محبوبیت میان کارجویان</span>
              </div>
              <div className="flex justify-start items-center">
                <div className="bg-[#e5f7f3] border-[1px] w-7 h-7 rounded-sm border-[#00b38f] flex justify-center items-center">
                  {convertToPersianNumbers(props.diversity)}
                </div>
                <span className="mr-[2%]">تعدد و تنوع فرصت‌های شغلی</span>
              </div>
              <div className="flex justify-start items-center">
                <div className="bg-[#e5f7f3] border-[1px] w-7 h-7 rounded-sm border-[#00b38f] flex justify-center items-center">
                  {convertToPersianNumbers(props.checkResume)}
                </div>
                <span className="mr-[2%]">بررسی رزومه‌های دریافتی</span>
              </div>
            </div>
          </div>
          <img
            src={props.image}
            className="w-[50%] h-[276px] rounded-[3px] mt-[2%] ml-[2%] shadow-gray-500 shadow-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default TopCompaniesAcardion;
