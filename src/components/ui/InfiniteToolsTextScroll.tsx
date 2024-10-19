"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import contentList from '@/data/InfiniteToolsTextScroll.js';

const InfiniteToolsTextScroll = () => {
    const [content, setContent] = useState<{ type: string; content: string; }[]>([]);

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Fetch content from data file
        setContent(contentList);

        if (!sliderRef.current || !contentRef.current) return;

        // Setup GSAP timeline
        tl.current = gsap.timeline({
            repeat: -1, // Use -1 for infinite repeat
            defaults: { ease: 'none', duration: 15 },
        });

        tl.current.fromTo(contentRef.current, { x: '0%' }, { x: '-100%' });

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
    }, []);

    return (
        <div className="w-full bg-black font-neopixelregular  py-10">
            <h2 className="text-4xl mr-5 font-bold text-end mb-6 text-contrast">
                Tools
            </h2>
            <div ref={sliderRef} className="relative w-full h-20 overflow-hidden">
                <div ref={contentRef} className="absolute flex w-full h-full">
                    {[...content, ...content].map((item, index) => (
                        <div key={index} className="flex-shrink-0 mx-20 md:mx-10 flex items-center justify-center">
                            {item.type === 'text' && (
                                <span className="text-2xl font-semibold text-contrast text-shadow text-hover">
                                    {item.content}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteToolsTextScroll;
