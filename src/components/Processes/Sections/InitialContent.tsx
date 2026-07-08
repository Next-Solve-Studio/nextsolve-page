"use client";
import Image from "next/image";
import { FiTerminal, FiPlay, FiSettings } from "react-icons/fi";

export default function InitialContent() {

    return (
        <section className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden px-6 lg:px-16 border-b border-white/5 flex items-center justify-center">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 right-1/4 w-150 h-75 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-size-[30px_30px]" />
            </div>

            <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="lg:col-span-7 text-left">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-blue-500/10 bg-blue-500/5 mb-6 font-mono text-[10px] uppercase tracking-widest text-blue-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                        <span>NextSolve_Core / Workflow</span>
                    </div>

                    <h1 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                        A engenharia por trás da sua <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-300 to-gray-400">
                            Próxima Solução.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl border-l-2 border-blue-500/30 pl-4">
                        Desenvolvemos software através de uma esteira ágil previsível, segura e orientada a dados. Da concepção do escopo técnico à entrega em nuvem, cada etapa é milimetricamente documentada.
                    </p>
                </div>

                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="w-full max-w-95 bg-[#09090b] border border-white/5 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative group hover:border-blue-500/20 transition-all duration-500">

                        <div className="w-full bg-[#121214] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
                            </div>
                            <div className="font-mono text-[10px] text-gray-500 flex items-center gap-1">
                                <FiTerminal size={12} className="text-blue-500/70" />
                                pipeline_status.tsx
                            </div>
                            <FiSettings size={12} className="text-gray-600 animate-spin-slow" />
                        </div>

                        <div className="p-8 flex flex-col items-center justify-center bg-radial from-blue-600/2 to-transparent min-h-65 relative">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none" />

                            <div className="relative z-10 w-74 h-74 flex items-center justify-center">
                                <Image
                                    width={150}
                                    height={150}
                                    alt="NextSolve Labs"
                                    src="/Ilustrative/processImage.png"
                                    className="object-contain opacity-90 group-hover:opacity-100 transition-transform duration-500 filter drop-shadow-[0_0_25px_rgba(37,99,235,0.2)] group-hover:scale-105 w-full h-full"
                                    priority
                                />
                            </div>

                            <div className="w-full mt-4 border-t border-white/5 pt-3 flex items-center justify-between font-mono text-[9px] text-gray-600">
                                <span className="flex items-center gap-1">
                                    <FiPlay size={9} className="text-blue-500 animate-pulse" />
                                    COMPILE_SUCCESS
                                </span>
                                <span>v1.0.4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}