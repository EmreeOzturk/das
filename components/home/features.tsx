"use client";

import { motion } from "framer-motion";

const Features = () => {
    const solutions = [
        { name: "ThreatShield IP", link: "#" },
        { name: "IntelliGrid AI", link: "#" },
        { name: "CyberPulse Map", link: "#" },
        { name: "DomainTrust Scanner", link: "#" }
    ];

    const domains = [
        {
            title: "ThreatShield IP",
            items: [
                "Instantly check the security status of your IP address",
                "Find out if you are involved in botnet networks ",
                "Identify your position in past cyberattacks"
            ]
        },
        {
            title: "IntelliGrid AI",
            items: [
                "150 million monthly <br /> cyber threat analysis",
                "Global threat intelligence powered by <br /> DePIN infrastructure",
                "Actionable insights for Web3 users"
            ]
        },
        {
            title: "CyberPulse Map",
            items: [
                "Mapping of millions of attacks <br /> daily",
                "Live visualization of cyber threats detected worldwide",
                "Comprehensive view of the <br /> global cyber landscape"
            ]
        },
        {
            title: "DomainTrust Scanner",
            items: [
                "Pre-wallet connection security <br /> check on Web3 projects",
                "Checking 42 different security parameters",
                "Validating trusted online experience"
            ]
        }
    ];

    return (
        <section className="w-full py-20 relative overflow-hidden">
            {/* Header */}
            <div className="absolute top-0 right-20 text-right z-10 flex flex-col gap-2 items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#00ccff] text-9xl font-light mb-2"
                >
                    Features
                </motion.h2>
                <div className="bg-[#00ccff] text-black text-xl px-12 py-1 w-fit text-center leading-5">
                    Discover Future <br /> Security
                </div>
            </div>

            {/* Offer Section */}
            <div className="flex flex-col gap-4 px-12 pt-20" >
                <div className="flex items-center gap-4 text-5xl mb-4">
                    <span>offre</span>
                    <span className="bg-[#00ccff]  px-2 pb-[3px] pt-0.5">wrap</span>
                </div>
                <p className=" text-sm mb-12">Next Generation Cyber Security Solutions</p>

                {/* Solutions Links */}
                <div className="flex gap-8 ">
                    {solutions.map((solution) => (
                        <motion.a
                            key={solution.name}
                            href={solution.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[#00ccff] text-sm underline-offset-4 underline"
                        >
                            {solution.name}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Line Bar and NOUS SOMMES */}
            <div className="relative h-screen w-screen flex justify-start items-start bg-[url('/line-bar.svg')] bg-cover bg-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute bottom-1/3 right-28 text-right"
                >
                    <p className="text-[#9f01ff] text-center text-xl tracking-wider -translate-x-6 ">Notre agence</p>
                    <h3 className="text-[#9f01ff] tracking-wider text-5xl font-bold">
                        NOUS SOMMES
                        <br />
                        HYPRLST
                    </h3>
                    <span className="inline-block bg-[#9f01ff] text-xl tracking-wider text-black px-1 py-1 translate-x-2">
                        NOUS VOULONS
                    </span>
                </motion.div>
            </div>

            {/* Domains Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20 -mt-48 px-12"
            >
                <h3 className="text-[#9f01ff] text-4xl  border border-[#9f01ff] inline-block pl-4 pr-48 py-2">DOMAINES D&apos;INTERVENTION</h3>
                <div className="grid grid-cols-1">
                    {domains.map((domain, idx) => (
                        <div key={domain.title} className="border border-[#9f01ff] w-fit">
                            <div className="flex  gap-0">
                                <div className={`border border-white underline-offset-4 underline p-4 w-fit text-base flex items-end justify-start text-nowrap  ${idx === 0 && "w-52"} ${idx === 1 && "w-80"} ${idx === 2 && "w-80"} ${idx === 3 && "w-64"}`}>
                                    <h4>{domain.title}</h4>
                                </div>
                                {domain.items.map((item, idx) => (
                                    <div key={idx} className="p-2 border-r border-[#9f01ff] last:border-r-0 pr-12  text-base">
                                        <p className="text-[#9f01ff]  leading-tight text-nowrap" dangerouslySetInnerHTML={{ __html: item }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Video Section */}
            <div className="flex justify-center items-center px-12 rounded-xl overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" h-[500px] w-full bg-[url('/videobg2.svg')] bg-cover bg-center"
                >
                </motion.div>
            </div>

        </section>
    );
};

export default Features;
