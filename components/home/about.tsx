"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-black py-10 md:py-20">
      <div
        id="about"
        className="mx-auto gap-4 px-4 flex flex-col md:flex-row items-start justify-start py-10 md:py-20 relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#00ccff] text-3xl md:text-5xl"
        >
          [ABOUT]
        </motion.h2>
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 flex flex-col items-start justify-start h-full -mt-2"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0">
              <p className="text-3xl md:text-5xl leading-tight">
                <span className="text-3xl md:text-5xl leading-tight">I&apos;m DE-GENT!</span>
              </p>

              <div className="hidden md:block h-0.5 bg-zinc-500 w-[500px] mr-12" />
            </div>
            <p className="text-base md:text-lg w-full md:w-2/3 text-left">
              Thanks to the computing power we&apos;ve
              obtained with DePIN, we can detect live attacks on the web3
              ecosystem in real time!
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative overflow-hidden h-[300px] md:h-[600px] w-full md:-ml-52 transform scale-100"
            >
              <iframe
                src="https://map.datsproject.io/#2/42.3/-17.7"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Map"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-4 md:left-10 w-10/12 h-[1px] bg-zinc-500" />
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
