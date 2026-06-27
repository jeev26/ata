"use client";


import { clients } from "@/lib/siteData";
import Image from "next/image";
// animation
import { motion, type Variants } from "framer-motion";



const container = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};


export default function ClientShowcase() {
    return (
        <div className="mt-24 ">

            {clients.map((client, index) => (

                <section key={client.name}>

                    <div
                        className={`grid items-center p-10 gap-16 lg:grid-cols-12 ${index % 2 === 0 ? "" : ""
                            }`}>

                        {/* LEFT IMAGE */}

                        <div
                            className={`${index % 2 === 0
                                ? "lg:col-span-4"
                                : "lg:col-span-4 lg:order-2"
                                }`}
                        >
                            <div className="flex h-[320px] items-center justify-center">

                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={250}
                                    height={250}
                                    className="object-contain transition duration-500 hover:scale-105"
                                />

                            </div>
                        </div>

                        {/* RIGHT CONTENT */}

                        <div
                            className={`${index % 2 === 0
                                ? "lg:col-span-8"
                                : "lg:col-span-8 lg:order-1"
                                }`}
                        >

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#013D69]">
                                Trusted Marine Partner
                            </span>

                            <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
                                {client.name}
                            </h2>

                            <div className="mt-8 h-[2px] w-24 bg-[#013D69]" />
                            {/* animated text line-by-line */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: false,
                                    amount: 0.4,
                                }}
                                variants={container}
                                className="mt-8 max-w-3xl space-y-4 text-lg leading-9 text-slate-600"
                            >
                                {client.description.split(". ").map((sentence, i) => (
                                    <motion.p key={i} variants={item}>
                                        {sentence.trim()}.
                                    </motion.p>
                                ))}
                            </motion.div>

                        </div>

                    </div>

                    {index !== clients.length - 1 && (
                        <div className="mx-auto mt-24 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                    )}

                </section>

            ))}

        </div>
    )
}