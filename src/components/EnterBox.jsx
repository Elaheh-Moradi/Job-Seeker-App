import React from "react";
import MyIcon from "../assets/icons/clipboard-home-icon.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const EnterBox = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden sm:flex flex-col bg-[#f9f9f9] mt-[15%] mx-[3%]">
      <div dir="rtl" className="flex justify-between space-x-6">
        <img src={MyIcon} className="w-[32px] h-[35px] mt-[3%] ml-[3%]" />
        <span className="flex justify-center items-center text-[#777777] text-[14px] leading-7">
          همین حالا ثبت‌نام کن و رزومه‌ات رو برای استخدام در شرکت‌های معتبر
          بفرست.
        </span>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-[5%]">
        <Button
          onClick={() => navigate("/login/user")}
          title="ورود کارجو"
          className="w-[100%] text-[#1abc9c] border border-[#1abc9c] rounded-sm py-[1%]"
        />
        <Button
        onClick={() => navigate("/join/user")}
          title="ثبت‌نام کارجو"
          className="bg-[#1dd3af] text-[#fff] w-[100%] rounded-sm  py-[1%]"
        />
      </div>
    </div>
  );
};

export default EnterBox;
