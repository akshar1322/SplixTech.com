import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Updated slides with new image and data
  const slides = [
    {
      image: '/Images/BG/hero_img.jpg',
      title: 'Web Development Services',
      description: 'We provide top-notch web development services to bring your business online.',
      buttonText: 'Learn More',
      buttonUrl: 'https://wa.me/916352191174',
      bgColor: '#FF6347', // Tomato color
    },
    {
      image: '/Images/BG/milad-fakurian-Ln-NOJdhpZA-.jpg',
      title: 'UI/UX Design',
      description: 'Crafting beautiful and functional designs to enhance user experience.',
      buttonText: 'Read More',
      buttonUrl: 'https://wa.me/916352191174',
      bgColor: '#4682B4', // Steel Blue color
    },
    {
      image: '/Images/BG/Contact-US.jpg',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      buttonText: 'Try Now',
      buttonUrl: 'https://wa.me/916352191174',
      bgColor: '#32CD32', // Lime Green color
    },
  ];

  const autoSlideRef = useRef<number | null>(null);

  // Automatically slide every 5 seconds
  useEffect(() => {
    autoSlideRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, []);

  // Scroll event to track Y-axis scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-between overflow-hidden">
      {/* Main Banner Section */}
      <motion.div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        initial={{ y: 0 }}
        animate={{ y: scrollY * -0.1 }} // Parallax scroll effect
      >
        {/* Info Box with dynamic background color and z-index */}
        <div
          className="absolute bottom-32 rounded-md left-12 p-6"
          style={{ backgroundColor: slides[currentSlide].bgColor, zIndex: 5 }}
        >
          <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
          <p className="text-lg mb-4">{slides[currentSlide].description}</p>
        </div>

        {/* Gray Button with dynamic height and z-index */}
        <div className="absolute bottom-20 left-56">
          <Link href={slides[currentSlide].buttonUrl}>
            <button
              className="text-black rounded-md bg-slate-300 w-32 h-14"

              onClick={() => window.open(slides[currentSlide].buttonUrl, "_blank")}
            >
              {slides[currentSlide].buttonText}
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Slider;
