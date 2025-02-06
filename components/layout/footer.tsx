"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  // Animation variants for social icons
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <footer className="w-full text-[#00ccff] py-4 md:py-8 px-4 md:px-0 max-w-7xl mx-auto">
      <div className="flex justify-center pb-2 md:pb-4 items-center">
        {/* Logo Cell */}
        <div className="border border-[#00ccff] max-h-40 p-4 md:p-6 mb-1 col-span-6 flex justify-center items-center h-full">
          <Link href="https://datsproject.io" target="_blank" className="relative block">
            <Image
              src="/datslogo.png"
              alt="DAS Logo"
              width={150}
              height={150}
              className="w-[150px] md:w-[200px] h-auto object-contain mx-auto"
            />
          </Link>
        </div>
      </div>
      {/* Social Media Icons */}

      {/* Moved Twitter Icon Below Logo */}
      <Link href="https://x.com/datsproject" target="_blank" className="flex items-center -mr-2 md:-mr-4 justify-center mt-2">
        <motion.div 
          whileHover="hover" 
          whileTap="tap" 
          variants={iconVariants}
          className="transform transition-transform hover:scale-105"

        >
          <div className="flex items-center justify-center w-full border p-1 border-[#00ccff] col-span-1">
            <div className="relative w-6 md:w-8 h-6 md:h-8">
              <Image
                src="/icons8-twitter.svg"
                alt="Vector Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </Link>
      <div className="flex justify-center md:justify-between items-center mt-6 md:mt-10 cursor-pointer px-4">
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-xs md:text-sm text-[#00ccff] text-center md:text-left"
        >
          All rights reserved by dasagent.xyz <br />
          2025
        </motion.div>
      </div>
    </footer>
  );
}
