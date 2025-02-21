import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MobileFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <footer
      dir="rtl"
      className="hidden sm:flex sm:flex-col bg-[#444] text-[#f0f0f0] text-center bottom-0 w-full h-auto"
    >
      <div className="border-t bg-[#444] w-full">
        <button
          className="w-full flex justify-between border-b border-b-gray-300 text-rigth px-4 py-3 bg-[#444]  focus:outline-none"
          onClick={handleToggleAccordion}
        >
          <span className="font-bold ">تماس با ما</span>
          <span className="float-left">{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div className="text-sm bg-[#555] ">
            <p className="hover:bg-[#444] text-right  text-[#f0f0f0]  px-4 py-2">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸ </p>
            <div className="border-b border-b-gray-300"></div>
            <p className="hover:bg-[#444] text-right text-[#f0f0f0]  px-4 py-2">ایمیل: info@website.com</p>
            <div className="border-b border-b-gray-300"></div>

            <p className="hover:bg-[#444] text-right text-[#f0f0f0]  px-4 py-2">
              آدرس: تهران، خیابان آزادی، پلاک ۱۰
            </p>
            <div className="border-b border-b-gray-300"></div>
         
          </div>
        )}
      </div>
      <div className="flex px-4 py-3">
            
            <div className="flex space-x-4 space-x-reverse items-start text-[#f0f0f0] ">
              <a href="#" aria-label="Telegram" className="hover:text-white">
                <TelegramIcon size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <InstagramIcon size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <LinkedInIcon size={20} />
              </a>
            </div>
          </div>
          <div
          dir="rtl"
          className="font-thin text-[14px] text-[#999] text-center border-t border-gray-700 pt-4"
        >
          <p>
            <span className="text-[12px]">
              &copy;{" "}
              {
                new Intl.DateTimeFormat("fa-IR", {
                  calendar: "persian",
                })
                  .formatToParts(new Date())
                  .find((part) => part.type === "year").value
              }{" "}
            </span>
            تمامی حقوق محفوظ است.
          </p>
        </div>
    </footer>
  );
};

export default MobileFooter;


