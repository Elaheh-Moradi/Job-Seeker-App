import React from "react";
import LastNewsCart from "./lastNewsCart";
import { Link } from "react-router-dom";

const LastNews = ({ data }) => {
  const lastNews = data.filter((item) => item.lastNews === true);

  return (
    <div dir="rtl" className="flex flex-col sm:mt-[10%] ">
      <div className="flex justify-between mx-[10%] mt-[7%] my-0 border-b border-b-[#eee] pb-[1%] ">
        <span className="text-[#555555] text-[18px] font-bold">
          آخرین آگهی‌ها
        </span>
        <div className="flex items-center justify-start text-[#3ab1e4] text-[14px]">
          <Link to={"/search-job"} className="ml-[10%] whitespace-nowrap">مشاهده همه</Link>
          <span className="text-[18px] mt-[1%]">&gt;</span>
        </div>
      </div>
      <div className="w-[80%] mx-[10%] mt-[3%]">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 sm:flex sm:flex-col ">
          {lastNews.map((item, index) => (
            <LastNewsCart
              key={index}
              jobTitle={item.jobTitle}
              icon={item["image-src"]}
              name={item["organizationTitle-fa"]}
              orgState={item.orgState}
              orgCity={item.orgCity}
              contractType={item.contractType}
              salary={item.salary}
              duration={item.duration}
              emergency={item.emergency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastNews;
