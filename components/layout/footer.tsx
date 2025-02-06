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
    <footer className="w-full text-[#00ccff]  py-8 max-w-7xl mx-auto">
      <div className="flex justify-center pb-4 items-center">
        {/* Logo Cell */}
        <div className="border border-[#00ccff] max-h-40 p-6 mb-1 col-span-6 flex justify-center items-center h-full">
          <Link href="/" className="relative block">
            <Image
              src="/logo.svg"
              alt="DAS Logo"
              width={200}
              height={200}
              className="object-contain mx-auto"
            />
          </Link>
        </div>
      </div>
      {/* Social Media Icons */}

      {/* Moved Twitter Icon Below Logo */}
      <div className="flex items-center -mr-4 justify-center mt-2">
        <motion.div whileHover="hover" whileTap="tap" variants={iconVariants}>
          <div className="flex items-center justify-center w-full  border p-1 border-[#00ccff] col-span-1">
            <div className="relative  w-8 h-8">
              <Image
                src="/icons8-twitter.svg"
                alt="Vector Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-sm text-[#00ccff]"
        >
          All rights reserved by das.xyz <br />
          2025
        </motion.div>
      </div>
    </footer>
  );
}
