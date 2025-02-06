"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AttackDetails from "../AttackDetails";
// color #00ccff
export default function Hero() {
  return (
    <section id="hero" className="text-white pt-32 md:pt-40">
      {/* Main content */}
      <div className="flex flex-col justify-between pb-16 md:pb-32 pt-16 md:pt-32 max-w-7xl mx-auto px-4 md:px-0">
        {/* Top section with title and status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:mt-12 relative">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-8xl font-thin text-white leading-tight">
              Next-Gen
              <span className="bg-[#00ccff] px-2 ml-2 md:ml-3 py-0">Security</span>
              <div className="pr-2 pt-6 md:pt-10 text-white">Powered by AI</div>
            </h1>
          </motion.div>

          {/* Status text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:mt-20 text-lg hidden md:block absolute"
            style={{ top: "-400px", right: "-300px" }}
          >
            <Image src="/4.png" alt="Status Image" width={750} height={750} />
          </motion.div>

          {/* Mobile Status Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden w-full"
          >
            <Image src="/4.png" alt="Status Image" width={400} height={400}  />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-full md:mt-32"
      >
        <div className="bg-[#00ccff] mt-10 md:mt-20 text-black py-2 px-4 -skew-y-2 transform origin-left text-2xl md:text-5xl tracking-wide overflow-x-auto">
          <div className="flex justify-center items-center  ">
            <AttackDetails />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
