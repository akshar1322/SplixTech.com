"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { FaTimes, FaBars } from "react-icons/fa";

const Menulinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about-us" },
  { title: "Services", link: "/services" },
  { title: "Make Enquiry", link: "/enquiry" },

];

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const container = useRef(null);
  const tl = useRef<GSAPTimeline>();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // GSAP animations
    gsap.set(".menu-link-item-holder", { opacity: 0, y: 50 });
    gsap.set(".menu-overlay", { autoAlpha: 0 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 0.5,
        autoAlpha: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to(".menu-link-item-holder", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.5
      });
  }, []);

  useEffect(() => {
    // Play or reverse the menu animation based on `isMenuOpen`
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Intersection Observer to toggle logo/menu color based on section background
    const observer = new IntersectionObserver(
      ([entry]) => setIsDarkSection(!entry.isIntersecting),
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    if (container.current) observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" ref={container}>
      <div className="fixed top-0 left-0 w-full p-2 flex justify-between items-center z-40">
        {/* Logo */}
        <div className="font-array">
          <Link href="/" className="text-5xl">
            <Image
              src={
                isDarkSection
                  ? " /Images/Logos/SplitXlogo-Main-black.svg"
                  : "/Images/Logos/SplitXlogo-Main-black.svg"
              }
              alt="SpliXtech"
              width={100}
              height={60}
              className="transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Menu Icon with 'Menu' Text */}
        <div className="flex items-center cursor-pointer" onClick={handleMenuClick}>
          <FaBars size={35} className={`${isDarkSection ? 'text-lime-500' : 'text-lime-500'}`} />
          <span
            className={`ml-2 text-lg font-semibold transition-transform duration-300 ${
              isDarkSection ? 'text-lime-500' : 'text-lime-500'
            } hover:scale-110`}
          >
            Menu
          </span>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`menu-overlay fixed top-0 left-0 w-full h-full p-8 glass-background-blue-violet z-50  flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Menu Links */}
          <div className="flex-grow flex flex-col space-y-6 text-left">
            {Menulinks.map((Menulink, index) => (
              <div key={index} className="menu-link-item-holder relative">
                <Link
                  href={Menulink.link}
                  className="text-lime-500 text-3xl md:text-5xl font-normal leading-none hover:text-white transition-colors duration-300"
                  onClick={handleMenuClick}
                >
                  {Menulink.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Social Links & Close Button */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full mt-8">
            <div className="flex flex-col text-lg md:text-2xl space-y-2 tracking-wider text-lime-500">
              <Link href="https://x.com/Akshar_patel_13" className="group">
                X <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.instagram.com/_akshar.x" className="group">
                Instagram <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.behance.net/aksharpatel24" className="group">
                Behance <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.linkedin.com/in/akshar-patel-4a78b0217" className="group">
                LinkedIn <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
            </div>
            <div className="flex flex-col text-xl font-neopixelregular tracking-wider md:text-3xl space-y-2 text-lime-500">
              <Link href="https://wa.me/916352191174" className="group">
                WhatsApp <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
            </div>
            <div className="cursor-pointer top-0 bottom-9 text-lime-500" onClick={handleMenuClick}>
              <FaTimes size={35} color="#7CFC00"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
