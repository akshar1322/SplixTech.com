"use client";
import { useEffect, useRef } from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaCookieBite } from "react-icons/fa";

import Link from "next/link";
import gsap from "gsap";

const Footer: React.FC = () => {
  const footerContentRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerContentRef.current) {
      footerContentRef.current.style.opacity = "1";
      footerContentRef.current.style.transform = "translateY(0)";
    } else {
      console.error("Footer content ref is not defined.");
    }
  }, []);

  useEffect(() => {
    if (scaleRef.current) {
      gsap.to(scaleRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.inOut",
        paused: true,
        repeat: -1,
        yoyo: true,
      });

      scaleRef.current.addEventListener("mouseenter", () => {
        gsap.to(scaleRef.current, { scale: 1.1, duration: 0.3 });
      });

      scaleRef.current.addEventListener("mouseleave", () => {
        gsap.to(scaleRef.current, { scale: 1, duration: 0.3 });
      });
    }
  }, []);

  const footerLinks = [
    {
      title: "FOLLOW US",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/splixtech?igsh=MTZyZmxjeml4MG0yYg==" },
        { name: "X", href: "https://x.com/SplixTech?t=em9kASWMdz5KpmlCggxkxg&s=08" },
        { name: "Bēhance", href: "https://www.behance.net/aksharpatel24" },
        { name: "Dribbble", href: "https://dribbble.com/Akshar_09" },
        { name: "GitHub", href: "https://github.com/akshar1322" }
      ]
    },
    {
      title: "NAVIGATION",
      links: [
        { name: "Services", href: "/services" },
        { name: "About", href: "/about-us" },
        { name: "UpdateHub", href: "/UpdateHub" },
        { name: "Tea Time with Us", href: "/enquiry" }
      ]
    }
  ];

  return (
    <div className="bg-black text-white p-10 md:p-16 lg:p-24">
      <div
        ref={footerContentRef}
        className="footer-content flex flex-col md:flex-row justify-between items-start opacity-0 transform translate-y-10 duration-1000"
      >
        {/* Left Links Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 mb-8 md:mb-0 w-full md:w-auto">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lime-500 font-semibold text-2xl uppercase mb-4">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mb-2 cursor-pointer hover:translate-x-1 transition-transform duration-300">
                    <Link className="hover:text-lime-500 text-xl" href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-left md:text-right mb-8 md:mb-0">
          <h3 className="text-lime-500 font-semibold text-2xl uppercase mb-4">
            LET&apos;S CONNECT
          </h3>
          <p
            className="text-2xl md:text-5xl font-light mb-5 cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => window.location.href = "mailto:aksharpatel528@gmail.com"}
          >
            aksharpatel528@gmail.com
          </p>
          <p
            className="text-2xl md:text-5xl font-light cursor-pointer hover:text-lime-500 transition-colors"
            onClick={() => window.location.href = "https://wa.me/6352191174"}
          >
            +91 6352 191 174
          </p>
        </div>
      </div>

      {/* Bottom Line with Hover Effect */}
      <div className="w-full h-1 mt-4 bg-black group relative">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-orange-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
      </div>

      {/* Bottom Copyright and Info */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500 space-y-4 md:space-y-0">
        <p>Splitx Tech</p>
        <p>All rights reserved | 2024</p>
        <div className="flex items-center space-x-3">
          <span className="transform rotate-180 transition-transform duration-300">🌐</span>
          <p className="text-lg md:text-2xl">Based in India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
