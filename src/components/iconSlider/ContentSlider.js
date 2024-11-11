"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import SliderCard from "./sliderCard/sliderCard";
import RightIcon from "@/icons/rightIcon";
import Text from "../text/text";

const IconSlider = ({
  data,
  title,
}) => {
  const swiper = useSwiper();
  return (
    <div className="
    sm:mx-10  
    md:mx-10 
    lg:mx-0 lg:ml-16 lg:my-32
    ">
      <Text color={'text-black'} size={'text-4xl'} fontWeight="font-extrabold"> {title}</Text>
      <div className="flex items-center mt-10 mb-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          // slidesPerView={4}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
          }}
        >
          {data?.map((img, index) => (
            <SwiperSlide key={index}>
              <SliderCard
                text={img.text}
                img={img.src}
                imgAlt={img?.imgAlt}
                btnText={img.btnText}
                btnText2={img.btnText2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Navigation Buttons */}
      {/* <div className="absolute bottom-[-65px] right-[80px] transform -translate-y-1/2">
        <button className="text-black bg-gray-500 p-2 rounded-full">
          <RightIcon />
        </button>
      </div>
      <div className="absolute bottom-[-65px] right-[25px] transform -translate-y-1/2">
        <button className="text-black bg-gray-500 p-2 rounded-full">
          <RightIcon />
        </button>
      </div> */}
    </div>
  );
};

export default IconSlider;
