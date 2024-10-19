"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import contentList from '@/data/InfiniteScroll_Image.js';

const InfiniteImageScroll = () => {
    const [content, setContent] = useState<{ type: string; src: string; alt: string; }[]>([]);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Fetch content from data file
        setContent(contentList);

        if (!sliderRef.current || !contentRef.current) return;

        // Setup GSAP timeline
        tl.current = gsap.timeline({
            repeat: -10,
            defaults: { ease: 'none', duration: 30 },
        });

        // Animate scrolling
        const contentWidth = contentRef.current.scrollWidth;
        tl.current.fromTo(contentRef.current, { x: 0 }, { x: -contentWidth, duration: 30 });

        // Slow scroll on hover
        const handleMouseEnter = () => {
            tl.current?.timeScale(0.5); // Slow down to half speed on hover
        };

        const handleMouseLeave = () => {
            tl.current?.timeScale(1); // Resume normal speed
        };

        const sliderElement = sliderRef.current;
        sliderElement?.addEventListener('mouseenter', handleMouseEnter);
        sliderElement?.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners on unmount
        return () => {
            sliderElement?.removeEventListener('mouseenter', handleMouseEnter);
            sliderElement?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [content]);

    return (
        <div className="w-full font-neopixelregular bg-[#f0f4f8] py-10">
            <h2 className="text-4xl ml-5 font-bold text-start text-[#333333] mb-6">
              Trusted By
            </h2>
            <div ref={sliderRef} className="relative w-full h-20 overflow-hidden">
                <div ref={contentRef} className="absolute flex w-max h-full">
                    {/* Duplicate the content for seamless looping */}
                    {[...content, ...content].map((item, index) => (
                        <div key={index} className="flex-shrink-0 mx-4 md:mx-8">
                            {item.type === 'image' && (
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  width={200}
                                  height={200}
                                  className="object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteImageScroll;
