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
import projects from '@/data/project.js';  // Import your projects data
import Link from "next/link";

const Portfolio = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [filter, setFilter] = useState<string>('all');  // State for filter selection

  // Filter projects based on the selected filter
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

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
    <div className="  bg-[#F1F0EB] p-4">
      <div className="p-5">
        <h1 className="text-4xl font-saiddier md:text-7xl text-[#333333] text-start">
        Our Projects.
        </h1>
        <div className="mt-4 flex font-semibold flex-wrap justify-end md:justify-end gap-4">
          <button
            onClick={() => setFilter('all')}
            className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          >
            All
          </button>
          <button
            onClick={() => setFilter('working')}
            className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          >
            Working
          </button>
          <button
            onClick={() => setFilter('UI')}
            className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          >
            UI
          </button>

          <button
            onClick={() => setFilter('published')}
            className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
          >
            Published
          </button>
        </div>
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
        {filteredProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              className="rounded-lg p-4 bg-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold md:text-xl text-[#333333] mt-4">{project.title}</h2>
              <div className="flex mt-4 space-x-4">
                {project.link && (

                    <Link
                      href={project.link} className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
                      Visit &#8599;
                    </Link>


                )}
                {project.githubLink && (
                  <Link
                    href={project.githubLink} className="bg-gray-500 hover:bg-gray-700 text-white  py-2 px-4 rounded" >
                      Source Code &#8599;
                  </Link>
                )}
              </div>
            </motion.div>
            <br /><br />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-2xl md:text-3xl justify-start space-x-4 mt-4">
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

export default Portfolio;
