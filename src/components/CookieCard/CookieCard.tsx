"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Utility function to get a cookie value by name
const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

const CookieCard: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [glassColor, setGlassColor] = useState('rgba(255, 255, 255, 0.5)');

  useEffect(() => {
    // Check if the cookie exists
    const cookieAccepted = getCookie('cookieAccepted');
    if (!cookieAccepted) {
      // Show the card after 5 seconds if cookie is not set
      const timer = setTimeout(() => {
        setVisible(true);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, []);

  useEffect(() => {
    if (visible) {
      // GSAP animation for the card appearance
      gsap.from('.cookie-card', {
        y: 50,
        duration: 1,
        ease: "power4.out",
      });

      // GSAP animation for buttons
      gsap.from('.cookie-card button', {
        y: 20,
        stagger: 0.2,
        duration: 0.5,
        ease: "power4.out",
      });
    }

    // Adjust styles based on the background color
    const bodyElement = document.querySelector('body');
    const backgroundColor = bodyElement ? getComputedStyle(bodyElement).backgroundColor : '';

    // Change text and glass colors based on background color
    if (backgroundColor === 'rgb(255, 255, 255)') { // White background
      setTextColor('black');
      setGlassColor('rgba(255, 255, 255, 0.8)');
    } else { // Non-white background
      setTextColor('white');
      setGlassColor('rgba(0, 0, 0, 0.5)');
    }
  }, [visible]);

  const handleAccept = () => {
    // Set a cookie to remember user’s choice
    document.cookie = "cookieAccepted=true; path=/; max-age=31536000"; // 1 year expiration
    setVisible(false); // Hide the cookie card
  };

  const handleCancel = () => {
    setVisible(false); // Hide the cookie card
  };

  return (
    visible && (
      <div
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-50 p-5 md:p-6 lg:p-8 rounded-lg backdrop-blur-sm cookie-card max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ml-4 mr-0"
        style={{ backgroundColor: glassColor }}
      >
        <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>Cookie Notice</h2>
        <p className="text-sm mb-4" style={{ color: textColor }}>
          We use cookies to ensure you get the best experience on our website. By continuing to use our site, you agree to our cookie policy.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAccept}
          >
            Accept
          </motion.button>
          <motion.button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCancel}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    )
  );
};

export default CookieCard;
