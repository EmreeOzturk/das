"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  // Animation variants for social icons
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <footer className="w-full text-[#00ccff] py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-12">
        {/* Logo Cell */}
        <div className="border border-[#00ccff] p-6 col-span-3 h-full">
          <Link href="/" className="relative block h-full">
            <div className="relative w-full h-full ">
              <Image
                src="/logo2.svg"
                alt="DAS Logo Overlay"
                fill
                className="object-contain"
                priority
              />

              <div className="w-full h-full absolute top-0 left-[8px] z-10">
                <Image
                  src="/logo.svg"
                  alt="DAS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Grid */}
        <div className="grid col-span-9">
          {/* Top Row */}
          <div className="grid grid-cols-11 border-l border-[#00ccff]">
            <Link href="/about" className="px-8 py-4 border-r border-b border-t border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-2">
              ABOUT
            </Link>
            <Link href="/features" className="px-8 py-4 border-r border-b border-t border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-3">
              SERVISES
            </Link>
            <Link href="/solutions" className="px-8 py-4 border-r border-b border-t border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-3">
              CASES
            </Link>
            <Link href="/metrics" className="px-8 py-4 border-r border-b border-t border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-2">
              TEAM
            </Link>
            <div className="flex items-center justify-center w-full border-r border-b border-t border-[#00ccff] col-span-1">
              <div className="relative w-8 h-8">
                <Image
                  src="/vector.svg"
                  alt="Vector Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-12 border-l border-[#00ccff]">
            <Link href="/partners" className="px-8 py-4 border-r border-b border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-4">
              BOOST PROGRAM
            </Link>
            <Link href="/docs" className="px-8 py-4 border-r border-b border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-2">
              PRODUCTS
            </Link>
            <Link href="/contact" className="px-8 py-4 border-r border-b border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-3">
              BOOK
            </Link>
            <Link href="/contact" className="px-8 py-4 border-r border-b border-[#00ccff] text-sm tracking-wider hover:text-[#33d6ff] transition-colors text-center col-span-3">
              BLOG
            </Link>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className='flex justify-between items-center mt-10'>
        <motion.div 
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className='text-sm text-[#00ccff]'
        >
          All rights reserved by das.xyz <br />2025
        </motion.div>
        <div className='flex items-center justify-center gap-4'>
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
          >
            <Link href="https://github.com/das-bot" target="_blank" className="w-10 h-10 block hover:opacity-80 transition-opacity">
              <div className="relative w-full h-full">
                <Image 
                  src="/github.svg" 
                  alt="Github" 
                  width={40} 
                  height={40}
                  className="filter hover:brightness-125 transition-all duration-300"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
          >
            <Link href="https://twitter.com/das_bot" target="_blank" className="w-10 h-10 block hover:opacity-80 transition-opacity">
              <div className="relative w-full h-full">
                <Image 
                  src="/twitter.svg" 
                  alt="Twitter" 
                  width={40} 
                  height={40}
                  className="filter hover:brightness-125 transition-all duration-300"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
          >
            <Link href="https://discord.gg/das-bot" target="_blank" className="w-10 h-10 block hover:opacity-80 transition-opacity">
              <div className="relative w-full h-full">
                <Image 
                  src="/discord.svg" 
                  alt="Discord" 
                  width={40} 
                  height={40}
                  className="filter hover:brightness-125 transition-all duration-300"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
          >
            <Link href="https://t.me/das_bot" target="_blank" className="w-10 h-10 block hover:opacity-80 transition-opacity">
              <div className="relative w-full h-full">
                <Image 
                  src="/telegram.svg" 
                  alt="Telegram" 
                  width={40} 
                  height={40}
                  className="filter hover:brightness-125 transition-all duration-300"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}