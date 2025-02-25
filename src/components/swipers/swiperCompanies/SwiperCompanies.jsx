import React from "react";
import styles from "./SwiperCompanies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCart from "./SwiperCart";

const SwiperCompanies = ({ data }) => {
  const displayedImages = data.slice(0, 12);
  return (
    <div dir="rtl" className="flex flex-col ">
        <div className="mx-[10%] mt-[10%] my-0 border-b border-b-[#eee] pb-[1%] text-[#555555] text-[18px] font-bold">آشنایی با شرکت‌ها</div>
    <div dir="rtl" className="mt-[3%] ml-[10%] mr-[10%]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
         slidesPerGroup={3}
        //  autoHeight={true}
        pagination={{
          clickable: true,
        }}
         className={styles["my-custom-swiper"]}
      >
        {displayedImages.map((item, index) => (
          <SwiperSlide key={index} className="border-[1px]  border-[#eee] rounded-sm">
            <SwiperCart
              image={item["company-image"]}
              title={item["organizationTitle-fa"]}
              icon={item["image-src"]}
              info={item["brief-info"]}
              popularity={item.popularity}
              diversity={item.diversity}
              checkResume={item["check-resume"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default SwiperCompanies;
