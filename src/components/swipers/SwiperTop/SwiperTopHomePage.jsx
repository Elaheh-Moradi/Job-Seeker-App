import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import DefaultImage from "../../../assets/images/organization-icon/Default.webp";
import styles from "./SwiperTopHomePage.module.css";
// import useFetch from "../../../hooks/useFetch";

const SwiperTopHomePage = ({data}) => {
  // const { data } = useFetch("http://localhost:3000/jobOffers");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);


useEffect(() => {
  if (swiperRef.current && prevRef.current && nextRef.current) {
    swiperRef.current.params.navigation.prevEl = prevRef.current;
    swiperRef.current.params.navigation.nextEl = nextRef.current;
    swiperRef.current.navigation.init();
    swiperRef.current.navigation.update();
  }
}, [swiperRef.current, prevRef.current, nextRef.current, data]);

  return (
    <div className="relative top-10 w-[60%] mx-auto ">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        //loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          disableOnInteraction: false
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center "
          >
            <div className="flex flex-col justify-between items-center text-[#3ab1e4] text-[12px] h-[50%] w-[50%]">
              {item["image-src"] ? (
                <img
                  src={item["image-src"]}
                  className="h-[80%] w-[80%] rounded-md mb-[20%]"
                />
              ) : (
                <img
                  src={DefaultImage}
                  className="h-[80%] w-[80%] rounded-md mb-[20%]"
                />
              )}
              <span className="text-center whitespace-nowrap">{item["organizationTitle-fa"]}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={prevRef}
        style={{ fontWeight: "bold" }}
        className={`swiper-button-prev ${styles["swiper-button-prev"]}`}
      ></div>
      <div
        ref={nextRef}
        style={{ fontWeight: "bold" }}
        className={`swiper-button-next ${styles["swiper-button-next"]}`}
      ></div>
    </div>
  );
};

export default SwiperTopHomePage;
