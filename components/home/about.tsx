"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-black py-20 ">
      <div
        id="about"
        className="mx-auto  gap-4 px-4 flex items-start justify-start py-20  relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#00ccff] text-5xl"
        >
          [ABOUT]
        </motion.h2>
        <div className="flex flex-col gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 flex flex-col items-start justify-start h-full -mt-2"
          >
            <div className="flex items-center justify-between w-full">
              <p className="text-5xl  leading-tight">
                <span className="text-5xl  leading-tight">I&apos;m DE-GENT!</span>
              </p>

              <div className="h-0.5 bg-zinc-500 w-[500px] mr-12" />
            </div>
            <p className="text-lg w-2/3 text-left">
              Thanks to the computing power and honeypots that we&apos;ve
              obtained with DePIN, we can detect live attacks on the web3
              ecosystem in real time!
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-2xl w-full ">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative overflow-hidden h-[600px] w-full -ml-52 transform scale-100 "
            >
              <div className="absolute inset-0 bg-[url('/videobg.svg')] bg-cover bg-center">
                <iframe
                  src="https://map.dasagent.xyz/#3/42.30/-17.70"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Map"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-10 w-10/12 h-[1px] bg-zinc-500" />
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
