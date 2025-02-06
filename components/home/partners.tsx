"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Partners = () => {
  // const teamMembers = [
  //   {
  //     name: "Cevdet Babacan",
  //     role: "CEO",
  //     image: "/avatar.svg",
  //   },
  //   {
  //     name: "Serkan Bilen",
  //     role: "CEO",
  //     image: "/avatar.svg",
  //   },
  //   {
  //     name: "Cevdet Babacan",
  //     role: "CEO",
  //     image: "/avatar.svg",
  //   },
  //   {
  //     name: "Cevdet Babacan",
  //     role: "CEO",
  //     image: "/avatar.svg",
  //   },
  // ];

  return (
    <section className="w-full -mt-[200px] md:-mt-[450px] relative">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Title */}
        <div className="z-50 pb-6 md:pb-10">
          <div
            id="grants"
            className="flex items-center md:items-start justify-center md:justify-start pt-6 md:pt-10 mt-8 md:mt-12"
          >
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-9xl text-[#9f01ff] text-center md:text-left"
            >
              Grants
            </motion.h2>
          </div>
     
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-2 md:px-4 mb-16 md:mb-32 gap-8 md:gap-4">
          {[
            {
              src: "/partners/microsoft.webp",
              alt: "Microsoft",
              href: "https://x.com/DATSProject/status/1710346702035554784",
            },
            {
              src: "/partners/nvidia.webp",
              alt: "NVIDIA",
              href: "https://x.com/DATSProject/status/1674097419955445760",
            },
            {
              src: "/partners/Google-Cloud.png",
              alt: "Google Cloud",
              href: "https://x.com/DATSProject/status/1771249330088735022",
            },
            {
              src: "/partners/wormhole-new.png",
              alt: "Wormhole",
              href: "https://x.com/SuperteamTR/status/1777059869788434446",
            },
          ].map((partner, index) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-[200px] md:w-[280px] h-[60px] md:h-[80px] border-zinc-800 z-50"
            >
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain brightness-0 invert cursor-pointer"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center mb-8 md:mb-12"
        >
          <div className="w-full md:w-2/3 px-4 md:px-0">
            <h1 className="text-2xl md:text-5xl text-center mb-4 md:mb-6">
              Certified by{" "}
              <span className="bg-[#00ccff] text-white px-1">GlobalSign</span>
            </h1>
            <p className="text-base md:text-xl text-center">
              *The largest audit firm in Web2, providing digital certificates,
              secure connections and identity authentication services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
