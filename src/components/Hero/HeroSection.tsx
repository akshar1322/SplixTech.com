"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const HeroSection = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (taglineRef.current) {
      // Set initial opacity of text to 0
      gsap.set(taglineRef.current, { opacity: 0 });

      // Box slide and expand animation
      const tl = gsap.timeline();
      tl.fromTo(
        boxRef.current,
        { xPercent: 100, yPercent: -50, width: "250px", height: "200px", backgroundColor: "#333333" },
        {
          xPercent: 0,
          yPercent: -50,
          width: "100vw",
          height: "100vh",
          duration: 1.5,
          ease: "power4.inOut",
        }
      )
      // Reveal image after box animation
      .to(imageRef.current, { autoAlpha: 1, duration: 0.5, ease: "power4.out", delay: 0.5 })
      // Reveal text container after image is visible
      .to(taglineRef.current, { opacity: 1, duration: 0.5, ease: "power4.out" })
      // Animate each character individually with blend mode
      .to(
        taglineRef.current.querySelectorAll(".pix-sliding-letter"),
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power4.out",
          blendMode: "exclusion",
        },
        "-=0.5" // Start character animation slightly before text opacity finishes
      );
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Box */}
      <div
        ref={boxRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 z-10"
      ></div>

      {/* Image in front of the Box */}
      <div
        ref={imageRef}
        className="absolute inset-0 opacity-0 z-20 transition-opacity duration-500"
      >
        <Image
          src="/Images/BG/Studio_Girl.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Tagline Text with Individual Characters */}
      <div
        ref={taglineRef}
        className="pix-sliding-item absolute left-5 sm:left-10 top-1/4 sm:top-1/3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white flex flex-col space-y-2 sm:space-y-4 z-30 opacity-0"
      >
        {["We", "Innovating", "Tomorrow", "Today!"].map((word, i) => (
          <div key={i} className="flex space-x-1">
            {Array.from(word).map((char, j) => (
              <span key={j} className="pix-sliding-letter opacity-0 translate-y-8">
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
