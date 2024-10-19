"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

interface SliderProps {
  images: { src: string; alt: string }[];
}

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const swiperRef = useRef<any>(null); // Ref to access Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of the active slide

  useEffect(() => {
    if (swiperRef.current) {
      // GSAP animation for Swiper slides
      gsap.fromTo(
        swiperRef.current.querySelectorAll('.swiper-slide'),
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', stagger: 0.3 }
      );
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[300px]">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &#8592;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
// import { pricingData } from '@/data/pricingData';
