"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Partners = () => {
    const teamMembers = [
        {
            name: "Cevdet Babacan",
            role: "CEO",
            image: "/avatar.svg",
        },
        {
            name: "Serkan Bilen",
            role: "CEO",
            image: "/avatar.svg",
        },
        {
            name: "Cevdet Babacan",
            role: "CEO",
            image: "/avatar.svg",
        },
        {
            name: "Cevdet Babacan",
            role: "CEO",
            image: "/avatar.svg",
        },
    ];

    return (
        <section className="w-full bg-black relative ">
            <div className="container mx-auto px-12">
                {/* Section Title */}
                <div className="flex items-start justify-end my-12">
                    <motion.h2 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-9xl text-[#9f01ff]"
                    >
                        Granted
                    </motion.h2>
                </div>

                {/* GlobalSign Certification */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex justify-end mb-12"
                >
                    <div className="max-w-md">
                        <h3 className=" text-2xl mb-2">
                            Certified by GlobalSign
                        </h3>
                        <p className=" text-base">
                            The largest audit firm in Web2, providing digital certificates,
                            secure connections and identity authentication services.
                        </p>
                    </div>
                </motion.div>

                {/* Backed By Text */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-32"
                >
                    <h3 className="text-6xl font-light tracking-wide">
                        Our clients are <span className="bg-[#00ccff] px-4 py-1">backed by</span>
                    </h3>
                </motion.div>

                {/* Partner Logos */}
                <div className="flex justify-between items-center px-4 mb-32">
                    {[
                        { src: "/partners/microsoft2.png", alt: "Microsoft" },
                        { src: "/partners/nvidia.webp", alt: "NVIDIA" },
                        { src: "/partners/cloud.png", alt: "Google Cloud" },
                    ].map((partner, index) => (
                        <motion.div
                            key={partner.alt}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-[280px] h-[80px] border-b border-zinc-800"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-black border border-[#00ccff] flex flex-col h-[420px]">
                                <div className="w-full border-b border-[#00ccff] p-4">
                                    <h3 className="text-[#00ccff] text-base">
                                        {member.name}
                                    </h3>
                                </div>
                                <div className="flex-1 flex items-center justify-center p-8">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="w-full border-t border-[#00ccff] p-4">
                                    <p className="text-[#00ccff] text-base">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
