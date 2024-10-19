"use client";
import { useEffect, useRef } from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaCookieBite } from 'react-icons/fa';
import Link from 'next/link';
import gsap from 'gsap';



const Footer: React.FC = () => {
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footerContent = footerContentRef.current;

    if (footerContent) {
      footerContent.style.opacity = '1';
      footerContent.style.transform = 'translateY(0)';
    } else {
      console.error("Footer content ref is not defined.");
    }
  }, []);

  const scaleRef = useRef<HTMLDivElement>(null);

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
      title: 'PRODUCT',
      links: [
        { name: 'Ecommerce store', href: '/ecommerce-store' },
        { name: 'Blog', href: '/blog' },
        { name: 'AI/Ml', href: '/ai-ml' },
        { name: 'Wobble Ai', href: '/wobble-ai' },
        { name: 'Wobble Chat', href: '/wobble-chat' }
      ]
    },
    {
      title: 'ABOUT',
      links: [
        { name: 'About us', href: '/about-us' },
        { name: 'Contact us', href: '/contact-us' }
      ]
    },
    {
      title: 'OTHER',
      links: [
        { name: 'Update Hub', href: '/update-hub' },
        { name: 'Privacy Hub', href: '/privacy-hub' },
        { name: 'Cookie', href: '/cookie-hub' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' }
      ]
    }
  ];

  return (
    <div className="bg-light-beige text-charcoal p-10">
      <div
        ref={footerContentRef}
        className="footer-content flex flex-col md:flex-row justify-between items-start opacity-0 transform translate-y-10  duration-1000 "
      >
          <div className="mb-8 text-black md:mb-0" ref={scaleRef}>
        <h2 className="font-bold font-neopixelregular text-5xl mb-4">
          <Link
            href="/"
            className="cursor-pointer hover:translate-x-2 transition-transform duration-300"
          >
            SpliXTech
          </Link>
        </h2>
      </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="font-semibold text-sm text-charcoal uppercase mb-3">
              {section.title}
            </h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.name} className="mb-1 text-dark-blue-1 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex space-x-4 text-black mt-8 md:mt-0">
          {[
            { icon: <FaTwitter />, href: "https://x.com/Akshar_patel_13?t=TsN5oGBu9VDVy1J3tAASPQ&s=09" },
            { icon: <FaInstagram />, href: "https://www.instagram.com/_akshar.x?igsh=emp1cWo4aW5zZTZo" },
            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/akshar-patel-4a78b0217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaCookieBite />, href: "/cookie-hub" }
          ].map(({ icon, href }, index) => (
            <div
              key={index}
              className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[#333333] text-sm mt-10">Copyright © SpliXTech</p>
    </div>
  );
};

export default Footer;
