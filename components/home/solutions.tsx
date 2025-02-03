"use client";

import { motion } from "framer-motion";

const Solutions = () => {
    const solutions = [
        {
            number: "01",
            text: "Progetta contenuti come",
            text2: "se lavorassi per la",
            highlight: "Fisher Price."
        },
        {
            number: "02",
            text: "Rispetta le",
            highlight: "emozioni",
            text2: "di chi legge e fruisce del tuo contenuto."
        },
        {
            number: "03",
            prefix: "voc",
            text: "e umana con un",
            highlight: "tone of voice."
        },
        {
            number: "04",
            text: "Trasmetti",
            highlight: "etica",
            text2: "e valori."
        },
        {
            number: "05",
            text: "Guida le azioni delle persone, ",
            highlight: "risolvi i loro problemi e",
            text2: "cambia in meglio la loro vita."
        }
    ];

    return (
        <section className="w-full bg-black relative overflow-hidden">
            <div className="container mx-auto px-12">
                {/* Header */}
                <div className="flex flex-col items-end mb-20 w-full md:pr-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#9f01ff] text-9xl"
                    >
                        Solutions
                    </motion.h2>
                    <p className="text-left max-w-lg text-lg leading-tight w-full">
                        Nei momenti caotici il linguaggio e la <br /> comunicazione possono fare piccole <br /> grandi cose, tipo e{" "}
                        <span className="bg-[#9f01ff] text-white px-1">messaggi</span>
                        {" "}nella <br /> capsula del tempo.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-3 gap-x-20 gap-y-32">
                    {solutions.map((solution) => (
                        <motion.div
                            key={solution.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`flex  gap-4 ${solution.number === "05" ? "col-span-2" : ""}`}
                        >
                            <span className="text-white text-[5rem] leading-none">
                                {solution.number}
                            </span>
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-xl leading-tight">
                                    {solution.prefix && (
                                        <span className="bg-[#9f01ff] text-white px-1 mr-1">
                                            {solution.prefix}
                                        </span>
                                    )}
                                    {solution.text}
                                </p>
                                {solution.text2 && (
                                    <p className="text-white text-xl leading-tight">
                                        {solution.text2}
                                    </p>
                                )}
                                {solution.highlight && (
                                    <p className="text-xl leading-tight">
                                        <span className="bg-[#9f01ff] text-white px-1">
                                            {solution.highlight}
                                        </span>
                                    </p>
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
