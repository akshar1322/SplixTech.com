"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.location.href = '/'; // Redirect to the main page
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <Image
        src="/Images/Art/colors-waiting-for-upload-or-download.gif" alt="Loading"
        width={500}
        height={500}
        className="w-64 h-64"
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
