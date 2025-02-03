"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Metrics = () => {
    return (
        <section className="w-full py-20 relative ">
            <div className="absolute top-[50%] right-0 translate-y-[-50%] w-[500px] h-[500px]">
                <Image
                    src="/globe.svg"
                    alt="Globe"
                    fill
                    className=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff]/20 to-transparent rounded-full blur-xl" />
            </div>
            <div className="px-12 mt-[336px]">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#00ccff] text-9xl mb-10 pl-24"
                >
                    METRICS
                </motion.h2>
                {/* Stats Grid */}
                <div className="flex gap-4 mb-20 w-1/2 relative ">
                    <div className="absolute top-20 w-full -z-10 h-[3px] bg-[#00ccff] shadow-2xl" />
                    {/* Cyber Attack Statistics */}
                    <div className="w-full text-center">
                        <h3 className="text-[#00ccff] text-2xl">Cyber Attack Statistics</h3>
                        <div className="text-[#00ccff] text-2xl mb-4 font-light">200.000</div>
                        <div className="relative h-[200px] w-full">
                            <Image
                                src="/cyber-attack-statistics.svg"
                                alt="Cyber Attack Statistics"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* Detected Attacks Today */}
                    <div className=" w-full text-center">
                        <h3 className="text-[#00ccff] text-2xl">Detected Attacks Today</h3>
                        <div className="text-[#00ccff] text-2xl mb-4 font-light">200.000</div>
                        <div className="relative h-[200px] w-full">
                            <Image
                                src="/detected-attacks-today.svg"
                                alt="Detected Attacks Today"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>

                {/* Total Victims Section */}
                <div className="flex w-full justify-start px-12 items-center">
                    <div className="space-y-4 flex flex-col w-full">
                        <div className="text-[#00ccff] text-7xl relative">
                            Total Victims
                            <div className="absolute -bottom-32 left-[220px] w-[1500px] h-[1500px]">
                                <Image
                                    src="/line-bar-2.svg"
                                    alt="Line Bar"
                                    className="object-contain z-50"
                                    fill
                                />
                            </div>

                        </div>
                        <Image
                            src="/chart.svg"
                            alt="Total Victims Chart"
                            className="object-contain"
                            width={550}
                            height={200}
                        />
                    </div>
                    <div className="text-[#00ccff] text-9xl font-light  w-full flex items-center justify-start">
                        1.200.000
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
