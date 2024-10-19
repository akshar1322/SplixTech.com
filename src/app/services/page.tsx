"use client";
import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navigationbar from '@/components/Navigationbar/Navigationbar';
import Headerimage from '@/components/ui/Headerimage';
import Footer from '@/components/Footer/footer';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications using the latest technologies.',
    icon: '/Images/SVG/icons8-web-development (1).svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing visually appealing and user-friendly interfaces.',
    icon: '/Images/SVG/icons8-design.svg',
  },
  {
    title: 'Mobile App Development',
    description: 'Building mobile apps for both Android and iOS platforms.',
    icon: '/Images/SVG/icons8-mobile-app-development-384.svg',
  },
  {
    title: '3D Modeling & Animation',
    description: 'Creating stunning 3D models and animations for various needs.',
    icon: '/Images/SVG/icons8-3d-modeling-512.svg',
  },
];

const ServicesPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <>
            <Navigationbar />
        <br />
        <main className='mt-24'>
            <Headerimage
            backgroundImageUrl='https://images.unsplash.com/photo-1589154831836-71fa41c229ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            text="Our Services" />
            <br />

            <div className=" bg-[#F1F0EB] font-neopixelregular rounded-t-xl text-black">
            <h1 className="text-5xl p-8 font-bold text-start mb-12">Our Services</h1>
            <div ref={containerRef} className="grid mr-1 ml-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="bg-glass p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                     src={service.icon}
                     alt={service.title}
                     width={64}
                     height={64}
                     className="mx-auto mb-4"

                     />

                    <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                    <p className="text-gray-700">{service.description}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </main>
        <Footer />
    </>
  );
};

export default ServicesPage;
