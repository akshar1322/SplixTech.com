"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper as SwiperType } from "swiper";

const WorksSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const cardData = [
    {
      id: 1,
      title: "Web Development",
      imageUrl: "/Images/Art/Web-dev.png",
    },
    {
      id: 2,
      title: "Fullstack-Web Development",
      imageUrl: "/Images/Art/Fullstack-web.png",
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      imageUrl: "/Images/Art/ecommerce solutions.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      imageUrl: "/Images/Art/UI-UX.png",
    },
    {
      id: 5,
      title: "Mobile Application Development",
      imageUrl: "/Images/Art/mobile application.png",
    },

    {
      id: 6,
      title: "AI/ML solutions",
      imageUrl: "/Images/Art/AI-ML.png",
    },
  ];

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="font-semibold rounded-t-2xl bg-[#F1F0EB] p-4">
      <div className="p-5">
        <h1 className="text-4xl md:text-7xl text-[#333333] text-start">
          Websites for Every Business, Across All Platforms.
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          }
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              className="rounded-lg p-4 bg-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
              <h2 className="text-xl md:text-2xl text-[#333333] mt-4">{card.title}</h2>
            </motion.div>
            <br /><br />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-2xl md:text-3xl justify-end space-x-4 mt-4">
        <button
          onClick={handlePrevClick}
          className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-4 rounded-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-4 rounded-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WorksSlider;
