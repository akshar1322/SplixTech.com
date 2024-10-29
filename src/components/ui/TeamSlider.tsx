"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaInstagram, FaFacebook, FaTwitter, FaMedium } from 'react-icons/fa';
import { Swiper as SwiperType } from "swiper";
import teamData from '@/data/TeamData.js';

const TeamSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

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
    <div className="font-semibold bg-[#F1F0EB] p-4">
      <div className="p-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#333333] text-start">
          Meet Our Team
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
        {teamData.map((member) => (
          <SwiperSlide key={member.id}>
            <motion.div
              className="relative rounded-lg p-4 bg-white shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
              <div className="absolute  right-0 bg-black text-white px-4 py-2 bottom-0 text-sm rounded-tl-lg">
                {member.role}
              </div>
              <h2 className="text-xl md:text-2xl text-[#333333] mt-4">{member.name}</h2>
              <div className="flex space-x-4 mt-4">
                {member.socialLinks.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl md:text-2xl text-[#E4405F]" />
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-xl md:text-2xl text-[#3b5998]" />
                  </a>
                )}
                {member.socialLinks.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-xl md:text-2xl text-[#1DA1F2]" />
                  </a>
                )}
                {member.socialLinks.medium && (
                  <a href={member.socialLinks.medium} target="_blank" rel="noopener noreferrer">
                    <FaMedium className="text-xl md:text-2xl text-[#00AB6C]" />
                  </a>
                )}
              </div>
            </motion.div>
            <br /><br />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-xl md:text-2xl lg:text-3xl justify-end space-x-4 mt-4">
        <button
          onClick={handlePrevClick}
          className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-[#d1d5db] hover:bg-[#9ca3af] text-[#333333] font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
