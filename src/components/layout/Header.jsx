import HomeIcon from "@mui/icons-material/Home";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useEffect, useRef, useState } from "react";

const userDashboard = [
  "درخواست های من",
  "ایمیل های اطلاع رسانی من",
  "فرصت های شغلی نشان شده",
  "فرصت های شغلی پیشنهادی",
  "رزومه ساز",
  "مشاهده رزومه",
  "تنظیمات حساب کاربری من",
  "خروج",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // close the dropdown by click out side of button//
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        dir="rtl"
        className="flex justify-between  items-center bg-[#444] h-[10.5vh] fixed w-full z-50"
      >
        {/* The menu on right side of header */}
        <ul
          dir="rtl"
          className=" flex justify-center items-center list-none mr-[10vh] "
        >
          <li className="relative pt-6 pb-6 pl-3.5 pr-3.5 hover:bg-[#555]">
            <div class="flex items-center text-[#fff] text-[14px] font-medium leading-relaxed ">
              <HomeIcon style={{ color: "#fff", fontSize: "1.5rem" }} />
              خانه
            </div>
            <span class="absolute top-0 bottom-0 right-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)]"></span>
          </li>
          <li className="pt-6 pb-6 pl-3.5 pr-3.5 relative hover:bg-[#555]">
            <div class="flex items-center text-[#fff] text-[14px] font-medium leading-relaxed">
              <SearchRoundedIcon
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
              جستجوی مشاغل
            </div>
            <span class="absolute top-0 bottom-0 right-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)] "></span>
          </li>
          <li className="pt-6 pb-6 pl-3.5 pr-3.5 relative hover:bg-[#555]">
            <div class="flex items-center text-[#fff] text-[14px] font-medium leading-relaxed">
              <AutoAwesomeRoundedIcon
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
              رزومه ساز
            </div>
            <span class="absolute top-0 bottom-0 right-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)]"></span>
          </li>
          <li className="pt-6 pb-6 pl-3.5 pr-3.5 relative hover:bg-[#555]">
            <span class="absolute top-0 bottom-0 left-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)]"></span>
            <div class="flex items-center text-[#fff] text-[14px] font-medium leading-relaxed">
              <DiamondRoundedIcon
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
              50 شرکت برتر
            </div>
            <span class="absolute top-0 bottom-0 right-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)]"></span>
          </li>
        </ul>
        {/* the items in left side of header */}
        <div
          dir="ltr"
          className=" flex justify-center items-center list-none ml-[10vh] "
        >
          <div className="relative pt-6 pb-6 pl-3.5 pr-3.5">
            <span class="absolute top-0 bottom-0 left-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)]"></span>
            <div class="flex items-center italic text-[#fff] text-[18px] font-bold leading-relaxed">
              jobyab
            </div>
            <span class="absolute top-0 bottom-0 right-0 w-0.5 h-full bg-[rgba(0, 0, 0, .2)] shadow-[0_0px_1px_rgba(255,255,255,0.5)]"></span>
          </div>
          {/* DropDown Button */}
          <div className=" pt-6 pb-6 pl-3.5 pr-3.5">
            <div dir="rtl" className=" relative inline-block" ref={dropdownRef}>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className={`min-w-[200px] text-white bg-[#555]  hover:bg-[#666]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between ${
                  isOpen ? "bg-[#666]" : "bg-[#555]"
                }`}
                style={{ boxShadow: "inset 0 -3px 0 0 #363636" }}
                type="button"
                onClick={toggleDropdown}
              >
                <PersonRoundedIcon
                  style={{ color: "#888", fontSize: "1.5rem" }}
                />
                الهه مرادی
                {/* arrow icon */}
                <svg
                  className="w-2.5 h-2.5 ms-3 text-[#888]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="z-10 absolute mt-2 bg-[#363636] rounded-lg shadow ">
                  {/* Tringle above dropdown menu */}
                  <div className="absolute border-b-[#333] top-[-8px] left-4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent"></div>

                  <ul className="py-2 text-sm text-gray-700">
                    {userDashboard.map((item, index) => (
                      <li
                        key={index}
                        className=" text-[#f5f5f5] pt-2.5 pr-3.5 pb-2.5 pl-3.5 hover:bg-[#282828] whitespace-nowrap bg-[#363636]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="relative inline-block">
            {/* Bell Icon */}
            <NotificationsNoneRoundedIcon
              fontSize="medium"
              className="text-[#888]"
            />

            {/* Badge */}
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs rounded-[4px] w-4 h-4 flex items-center justify-center translate-x-[-3px] -translate-y-[0px]">
              3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
