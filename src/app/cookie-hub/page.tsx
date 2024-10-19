"use client";
import { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import { cookies } from '@/data/cookielist.js';
import Navigationbar from '@/components/Navigationbar/Navigationbar';
import Headerimage from '@/components/ui/Headerimage';
import Footer from '@/components/Footer/footer';



const CookiePage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    gsap.fromTo(".cookie-header", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(".cookie-section", { x: -200 }, { x: 0, duration: 1 });
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };


  return (
    <>
    <div className='mt-16'>
        {/* Cookie Header */}
          <Navigationbar />
        <br />

     <Headerimage backgroundImageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" text="Cookie Hub" />
    </div>




    <div className="min-h-screen bg-transparent p-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="cookie-header font-neopixelregular text-5xl font-bold mb-8"
      >
        Cookie List
      </motion.div>

      {/* Cookie Description Section */}
      <motion.div
        className="cookie-section text-gray-100 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Replace this with your actual cookie description */}
        <p className="mb-4">
            This section can be used to list all the cookies used on your website, categorized into different types such as Necessary, Analytics, Functionality, etc.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 text-gray-900 py-2 px-4 rounded-lg"
          onClick={togglePopup}
        >
          Open Cookie Settings
        </motion.button>
      </motion.div>

      {/* Strictly Necessary Cookies Section */}
      <div className="mt-12">
        <motion.h2
          className="text-xl text-gray-100 font-semibold mb-4"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Strictly Necessary Cookies
        </motion.h2>


        <motion.div
          className="text-gray-100 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>

            These cookies are essential for the website to function properly. Without these cookies, the website cannot provide the services you request.
          </p>
        </motion.div>

        {/* Dynamically Render Cookies */}
        <div className="mt-6">
          {cookies.map((cookie, index) => (
            <div key={index} className="border-t border-gray-300 py-4">
              <p className="text-lg font-bold mb-2">{cookie.title}</p> {/* Title added here */}
              <p className="font-semibold">{cookie.name}</p>
              <Link
                href={cookie.domain}
                className="text-blue-500 hover:underline"
              >
                SpliXTech
              </Link>

              <p className="text-sm text-gray-100">{cookie.description}</p>
              <p className="text-sm text-gray-100">{cookie.lifetime}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Section */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[rgba(0, 0, 0, 0.5)] border border-opacity-10 backdrop-blur-sm cookie-card p-6 rounded-lg max-w-lg w-full"
          >
            <h2 className="text-xl font-semibold mb-4">Cookie Settings</h2>
            <p className="text-gray-100 mb-4">
              Here you can manage your cookie preferences. Adjust your settings to control the cookies used on this site.
            </p>
            <a href="#" className="text-blue-500 hover:underline mb-4 block">
              Learn more about cookies
            </a>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-lg mr-2"
                onClick={togglePopup}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={togglePopup}
              >
                Save Settings
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>


      <Footer />

    </>
  );
};

export default CookiePage;
