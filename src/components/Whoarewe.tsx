import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/siteData";

export default function WhoAreWe() {
    return (
        <section className="relative mx-auto overflow-hidden bg-white">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40  lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-10 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="leading-none">
                            <span className="block text-7xl font-black text-[#013D69] sm:text-8xl lg:text-9xl">
                                BEYOND
                            </span>

                            <span className="block text-5xl  text-[#013D69] uppercase mb-4">
                                ports.limits.
                            </span>
                        </h1>

                        <div>
                            <p className="text-slate-600 leading-7 mb-4">
                            Founded in {SITE.founded}, Astra Titan Arabia is a Saudi
                            Arabia-based supplier specializing in general trading, ship
                            supplies, and vessel inspection services within the marine
                            sector.
                        </p>
                        <p className="text-slate-600 leading-7">
                            As your comprehensive partner for operational requirements, we
                            source, procure, and deliver efficiently &mdash; giving you the
                            freedom to focus on your core business. We respond promptly,
                            adapt to evolving technologies, and provide dependable technical
                            support so you operate with confidence.
                        </p> 
                        </div>
                       
                    </div>

                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        {/* Column 1 */}
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    src="/images/ports/img1.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>

                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/ports/img2.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Column 2 */}
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/ports/img4.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>

                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/ports/img3.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>

                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/ports/img6.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Column 3 */}
                                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/ports/img5.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>

                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    src="/images/ports/img7.jpg"
                                                    alt=""
                                                    width={176}
                                                    height={256}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}