"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { FaTimes, FaBars } from "react-icons/fa";

const Menulinks = [
  { title: "Home", link: "/" },
  { title: "Pricing", link: "/pricing" },
  { title: "About", link: "/about-us" },
  { title: "Services", link: "/services" },
  { title: "Contact Us", link: "/contact-us" },
  { title: "Update Hub", link: "/update-hub" },

];

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
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
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="relative  " ref={container}>
      <div className="fixed glass-background rounded-full font-telegraphic top-2 left-0 w-full p-4 flex justify-between items-center z-10  ">
        <div className="text-gray-200 font-array">
          <Link className="text-5xl" href="/">Spli
            <span className="text-lime-100  ">X</span>Tech
          </Link>
        </div>
        <div className="cursor-pointer text-gray-600" onClick={handleMenuClick}>
          <FaBars size={35} />
        </div>
      </div>
      <div
        className={`menu-overlay fixed top-0 left-0 w-full h-full p-8 glass-background-blue-violet z-20 flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow flex flex-col space-y-6 text-left">
            {Menulinks.map((Menulink, index) => (
              <div key={index} className="menu-link-item-holder relative">
                <Link href={Menulink.link} className="text-white  text-3xl md:text-5xl font-normal leading-none" onClick={handleMenuClick}>
                  {Menulink.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full mt-8">
            <div className="flex flex-col text-lg md:text-2xl space-y-2
            tracking-wider text-white">
              <Link href="https://x.com/Akshar_patel_13?t=TsN5oGBu9VDVy1J3tAASPQ&s=09" className="group">
                X <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.instagram.com/_akshar.x" className="group">
                Instagram <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.behance.net/aksharpatel24" className="group">
                Behance <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
              <Link href="https://www.linkedin.com/in/akshar-patel-4a78b0217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group">
                LinkedIn <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
            </div>
            <div className="flex flex-col text-xl font-neopixelregular tracking-wider md:text-3xl space-y-2 text-white">
              <Link href="https://wa.me/916352191174" className="group">
                WhatsApp <span className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45">&#8599;</span>
              </Link>
            </div>
            <div className="cursor-pointer text-gray-600" onClick={handleMenuClick}>
              <FaTimes size={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
