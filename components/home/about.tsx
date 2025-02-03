"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="w-full bg-black py-20 ">
            <div className="mx-auto  gap-4 px-4 flex items-start justify-start py-20  relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#00ccff] text-4xl"
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
                            <p className="text-5xl  leading-tight">Find Attacks.</p>
                            <div className="h-0.5 bg-zinc-500 w-[500px] mr-12" />
                        </div>
                        <p className="text-5xl  leading-tight">Find, Write & Automate.</p>
                    </motion.div>

                    <div className="flex items-center justify-start gap-2 text-2xl w-full ">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6 w-1/3 "
                        >
                            <div className="flex flex-col space-y-1">
                                <span>Universal Shield Against</span>
                                <span className="bg-[#00ccff] text-white px-2 py-0.5 w-fit ">
                                    Cyber Threats
                                </span>
                            </div>
                            <p >
                                See the invisible, detect threats <br /> and take decisive action with DAS.
                            </p>
                            <p >
                                lorem ipsum dolor sit amet
                            </p>
                            <p >
                                lorem ipsum dolor sit amet <br />
                                lorem ipsum <span className="bg-[#00ccff] text-white pl-1 pr-6">dolor.</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="relative aspect-video overflow-hidden h-[400px] w-2/3 md:mr-24"
                        >
                            <div
                                className="absolute inset-0 bg-[url('/videobg.svg')] bg-cover bg-center"

                            />

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
