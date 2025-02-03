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
        <section className="w-full bg-black relative">
            <div className="container mx-auto px-12">
                <div className="flex flex-col items-end mb-6">
                    <h2 className="text-9xl font-bold text-[#9f01ff] tracking-wide">
                        PARTNERS
                    </h2>
                </div>

                <div className="flex flex-col items-start mb-4">
                    <p className="text-[#9f01ff] text-4xl font-light underline underline-offset-4">
                        Our clients are backed by:
                    </p>
                </div>

                {/* Partner Logos */}
                <div className="flex justify-between items-center gap-20 mb-24">
                    <Image
                        src="/partners/y-combinator.svg"
                        alt="Y Combinator"
                        width={140}
                        height={40}
                        className="object-contain brightness-0 invert"
                    />
                    <Image
                        src="/partners/y-combinator.svg"
                        alt="Y Combinator"
                        width={140}
                        height={40}
                        className="object-contain brightness-0 invert"
                    />
                    <Image
                        src="/partners/y-combinator.svg"
                        alt="Y Combinator"
                        width={140}
                        height={40}
                        className="object-contain brightness-0 invert"
                    />
                    <Image
                        src="/partners/y-combinator.svg"
                        alt="Y Combinator"
                        width={140}
                        height={40}
                        className="object-contain brightness-0 invert"
                    />
                </div>

                {/* Team Grid */}
                <div className="flex items-center justify-between gap-24">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-[250px]"
                        >
                            <div className="bg-black border border-[#00ffff] rounded-none flex flex-col items-center h-[420px]">
                                <div className="flex flex-col items-center w-full h-full">
                                    {/* Name at the top */}
                                    <div className="w-full border-b border-[#00ffff] py-4">
                                        <h3 className="text-[#00ffff] text-base font-normal text-center">
                                            {member.name}
                                        </h3>
                                    </div>

                                    {/* Avatar in the middle */}
                                    <div className="flex-1 flex items-center justify-center w-full px-8">
                                        <div className="w-full aspect-square relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Role at the bottom */}
                                    <div className="w-full border-t border-[#00ffff] py-4">
                                        <p className="text-[#00ffff] text-base font-normal text-center">
                                            {member.role}
                                        </p>
                                    </div>
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
