import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Lable";
import Button from "../../components/Button";

const RegisterJobSeeker = () => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="آدرس ایمیل"
          htmlFor="email"
        />
        <Input
          id="email"
          type="email"
          placeholder="آدرس ایمیل خود را وارد کنید"
          // onChange={(event) => {
          //   handleChangeInput(event, "email");
          // }}
          // value={inputs.email}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
              focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)] "
        />
      </div>
      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="نام و نام‌خانوادگی"
          htmlFor="name"
        />
        <Input
          id="name"
          placeholder="مثلا: الهه مرادی"
          //   onChange={(event) => {
          //     handleChangeInput(event, "password");
          //   }}
          //   value={inputs.password}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
              focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="انتخاب رمز عبور"
          htmlFor="password"
        />
        <Input
          id="password"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          //   onChange={(event) => {
          //     handleChangeInput(event, "password");
          //   }}
          //   value={inputs.password}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
                    focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="flex flex-col items-start">
        <Label
          className="text-[16px] text-[#555555] font-light py-[3%]"
          title="تکرار رمز عبور"
          htmlFor="repeatpassword"
        />
        <Input
          id="repeatpassword"
          type="password"
          placeholder="رمز عبور خود را تکرار کنید"
          //   onChange={(event) => {
          //     handleChangeInput(event, "password");
          //   }}
          //   value={inputs.password}
          className="placeholder:text-right w-full p-2 border border-gray-300 rounded-sm focus:outline-none 
                    focus:shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5),inset_2px_0_4px_-2px_rgba(0,0,0,0.5),inset_-2px_0_4px_-2px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="mt-[10%]">
        <Button
          title="ثبت‌نام"
          className="w-full bg-[#1abc9c] text-[#FFFFFF] py-2 rounded-sm shadow-[inset_0px_-2px_4px_-2px_rgba(0,0,0,0.5)] hover:bg-[#1dd3af] hover:text-[#fff]"
          type="submit"
        />
      </div>
    </div>
  );
};

export default RegisterJobSeeker;
