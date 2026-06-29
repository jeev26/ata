import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg"

export default function Mission() {
    return (

        // Mission component
        <section className="relative overflow-hidden bg-gradient-to-b from-[white] to-[#013D69] py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-white">
                        <h2 className="mb-12 text-4xl font-bold tracking-tight text-[#013D69] sm:text-5xl" >
                            VISION & MISSION
                        </h2>

                        <div className="mt-8 space-y-8">

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Vision
                                </h3>

                                <p className="mt-3 text-lg text-slate-200 leading-8">
                                    To become a trusted leader in marine and industrial
                                    procurement by delivering innovative, reliable,
                                    and sustainable solutions that support global
                                    maritime operations.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Mission
                                </h3>

                                <p className="mt-3 text-lg text-slate-200 leading-8">
                                    To provide high-quality marine supplies and
                                    procurement services through operational excellence,
                                    timely delivery, and long-term partnerships built
                                    on trust and integrity.
                                </p>
                            </div>

                        </div>

                        <div className="mt-10 flex gap-8">
                            <div>
                                <h4 className="text-3xl font-bold">
                                    8+
                                </h4>
                                <p className="text-slate-300">
                                    Years of Service
                                </p>
                            </div>

                            <div>
                                <h4 className="text-3xl font-bold">
                                    24/7
                                </h4>
                                <p className="text-slate-300">
                                    Operational Support
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative flex justify-center">

                        <div className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

                        <div className="relative w-80 h-80 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center">

                            <div className="text-center text-white">
                                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
                                    <Image
                                        src={logo}
                                        alt="Astra Titan Arabia Logo"
                                        width={250}
                                        height={150}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Decorative Elements */}

            <div className="absolute top-16 right-20 w-4 h-4 border border-white/30 rotate-45"></div>

            <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-white/30"></div>

            <div className="absolute top-1/2 right-32 w-12 h-[1px] bg-white/20"></div>

            <div className="absolute bottom-32 right-1/4 w-20 h-20 rounded-full border border-white/10"></div>
        </section>

    )
}