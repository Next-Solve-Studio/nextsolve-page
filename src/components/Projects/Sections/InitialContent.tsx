"use client";
import { FiCode, FiLayers } from "react-icons/fi";

export default function InitialContent() {

    return (
        <section className="relative w-full min-h-screen py-20 md:py-28 lg:py-32 bg-[#050505] overflow-hidden px-6 border-b border-white/5 flex flex-col items-center justify-center text-center">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-162.5 h-75 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[35px_35px] sm:bg-size-[40px_40px]" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center justify-center gap-10 md:gap-12">

                <div className="flex flex-col items-center justify-center">

                    <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                        <FiCode className="text-blue-500 text-xs md:text-sm animate-pulse" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-blue-400 font-syne">
                            Showcase & Portfólio
                        </span>
                    </div>

                    <h1 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                        Conheça nossos <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-200 to-white">
                            Projetos & Ecossistemas
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl inline-flex items-center justify-center gap-2">
                        <FiLayers className="text-blue-500/50 shrink-0 text-base hidden sm:inline-block" />
                        <span>
                            Soluções disruptivas desenvolvidas com engenharia de ponta, foco absoluto em conversão e arquitetura de alta performance.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}