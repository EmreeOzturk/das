"use client"

import { motion } from "framer-motion";
// color #00ccff
export default function Hero() {
  return (
    <section id="hero" className="text-white">
      {/* Main content */}
      <div className=" flex flex-col justify-between  max-w-7xl mx-auto">
        {/* Top section with title and status */}
        <div className="flex justify-between items-start md:mt-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-thin text-white leading-tight">
              AI agent for
              <div className="flex items-center gap-4 md:mt-24">
                <div className="bg-[#00ccff] px-4 py-6 text-white">security</div>
                <span className="tracking-widest ml-4">experiences</span>
              </div>
            </h1>
          </motion.div>

          {/* Status text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:mt-12"
          >
            DAS | Born in an RTX 5090, raised <br /> in cybersecurity. | The brave <br /> protector of the blockchain world! | <br /> Ready to test my speed?
          </motion.div>
        </div>

        {/* Bottom banner */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full"
        >
          <div 
            className="absolute bottom-0 left-0 right-0 bg-[#00ffff] text-black py-2 px-4 -skew-y-2 transform origin-left font-mono"
            style={{ width: "120%" }}
          >
            Looky here, Israel just got socked by 2610 cyber punch lines. N
          </div>
        </motion.div> */}
      </div>
    </section>
  );
} 