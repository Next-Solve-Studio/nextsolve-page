"use client";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

export default function ContentServiceInitial() {

    return (
        <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6 pt-28 pb-16 md:py-40">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

                <div className="relative group w-full max-w-xl lg:max-w-none mx-auto order-1 lg:order-2 mt-4 lg:mt-0">
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

                    <div className="relative p-2 md:p-3 rounded-3xl md:rounded-[2.5rem] border border-white/5 bg-white/2 backdrop-blur-sm shadow-2xl">
                        <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-[1.4rem] md:rounded-tl-4xl" />
                        <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-[1.4rem] md:rounded-br-4xl" />

                        <div className="overflow-hidden rounded-[1.3rem] md:rounded-4xl border border-white/10 relative">
                            <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 to-transparent h-1/2 w-full z-10 animate-scanline pointer-events-none" />
                            <Image
                                src="/Ilustrative/solution3.png"
                                alt="NextSolve Solutions"
                                width={650}
                                height={450}
                                sizes="(max-width: 768px) 100vw, 650px"
                                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="order-2 lg:order-1 mt-10 lg:mt-0">

                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6 md:mb-8">
                        <FiSettings className="text-blue-500 animate-spin-slow text-sm" />
                        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-blue-400 font-syne">Serviços - NextSolve</span>
                    </div>

                    <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] mb-6 md:mb-8">
                        Soluções que{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-300 to-white">
                            Escalam.
                        </span>
                    </h1>

                    <div className="flex items-start gap-4 mb-8">
                        <div className="mt-1 h-12 w-0.5 bg-linear-to-b from-blue-500 to-transparent" />
                        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-lg">
                            Na NextSolve, projetamos{" "}
                            <span className="text-white font-medium">
                                5 soluções estratégicas
                            </span>{" "}
                            fundamentais, desenhadas para automatizar sua operação e dominar o mercado digital.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-blue-500 font-syne font-black text-2xl md:text-3xl">05</span>
                            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">Pilares Core</span>
                        </div>

                        <div className="w-px h-8 bg-white/10" />

                        <div className="flex flex-col">
                            <span className="text-white font-syne font-black text-2xl md:text-3xl">100%</span>
                            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-500 font-bold">Customizável</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}