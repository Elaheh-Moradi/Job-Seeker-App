import React from "react";
import styles from "./SwiperCompanies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCart from "./SwiperCart";
import { Link } from "react-router-dom";

const SwiperCompanies = ({ data }) => {
  const displayedImages = data.slice(0, 12);
  return (
    <div dir="rtl" className="flex flex-col ">
      {/* <div className="mx-[10%] mt-[5%] my-0 border-b border-b-[#eee] pb-[1%] text-[#555555] text-[18px] font-bold">
        آشنایی با شرکت‌ها
      </div> */}
      <div className="flex justify-between mx-[10%] mt-[7%] my-0 border-b border-b-[#eee] pb-[1%] sm:mt-[20%] ">
        <span className="text-[#555555] text-[18px] font-medium">
        آشنایی با شرکت‌ها
        </span>
        <div className="flex items-center justify-start text-[#3ab1e4] text-[14px]">
          <Link to={"/top-companies"} className="ml-[10%] whitespace-nowrap">مشاهده همه</Link>
          <span className="text-[18px] mt-[1%]">&gt;</span>
        </div>
      </div>
      <div dir="rtl" className="mt-[3%] ml-[10%] mr-[10%]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          
          breakpoints={{
            767: {
              slidesPerView: 3, // Show 3 slides on desktop
              slidesPerGroup: 3, // Move 3 slides at a time
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          
          className={styles["my-custom-swiper"]}
        >
          {displayedImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className="border-[1px]  border-[#eee] rounded-sm"
            >
              <SwiperCart
                image={item["company-image"]}
                title={item["organizationTitle-fa"]}
                icon={item["image-src"]}
                info={item["brief-info"]}
                popularity={item.popularity}
                diversity={item.diversity}
                checkResume={item.checkResume}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCompanies;
