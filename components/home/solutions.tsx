"use client";

import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
    {
      number: "01",
      highlight: "ThreatShield IP",
      text: "Quickly verify your IP's security, detect any botnet links, and explore past cyberattack involvement.",
    },
    {
      number: "02",
      highlight: "IntelliGrid",
      text: "Analyze 150 million cyber threats monthly, leverage global intelligence via DePIN and discover actionable Web3 insights.",
    },
    {
      number: "03",
      highlight: "CyberPulse Map",
      text: "Mapping millions of daily attacks, real-time threat detection worldwide and a detailed view of the cyber landscape.",
    },
    {
      number: "04",
      highlight: "DomainTrust Scanner",
      text: "Pre-wallet security scan for Web3 projects, checking 42 parameters and ensuring trusted online experiences.",
    },
  ];

  return (
    <section className="w-full pb-10 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div
          id="solutions"
          className="flex flex-col items-center md:items-end mb-10 md:mb-20 w-full md:pr-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#9f01ff] text-5xl md:text-9xl"
          >
            Solutions
          </motion.h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-20 md:gap-y-32">
          {solutions.map((solution) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex gap-4 relative z-0 p-4 md:p-0`}
            >
              <div className="absolute inset-0 z-[-1]">
                {/* Görsel buraya yerleştirilecek */}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-[3rem] md:text-[5rem] leading-none">
                  {solution.number}
                </span>
                {solution.highlight && (
                  <p className="text-xl md:text-2xl pt-4 pb-2 leading-tight">
                    <span className="bg-[#9f01ff] text-white px-1">
                      {solution.highlight}
                    </span>
                  </p>
                )}
                <p className="text-white text-base md:text-lg leading-tight">
                  {solution.text}
                </p>
                {solution && (
                  <p className="text-white text-lg md:text-xl leading-tight"></p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
