"use client";
import Image from "next/image";
import { FiShield, FiLock } from "react-icons/fi";

export default function ContentInitial() {

    return (
        <section className="flex items-center justify-center relative w-full min-h-screen py-20 md:py-28 bg-[#050505] overflow-hidden px-6 border-b border-white/5">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 right-0 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 items-center">

                <div className="text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                        <FiShield className="text-blue-500 text-xs animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400 font-syne">
                            Privacidade & Segurança
                        </span>
                    </div>

                    <h1 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                        Política de <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-300 to-white">
                            Privacidade de Dados.
                        </span>
                    </h1>

                    <div className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                        <p>
                            Segurança, transparência e engenharia de conformidade.
                            Saiba como a
                        </p>

                        <p className="text-white font-medium font-mono text-sm my-2">NextSolve /</p>

                        <p>  protege, processa e respeita os seus ativos digitais e informações.</p>
                    </div>

                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                        <FiLock className="text-blue-500/40" />
                        <span>Atualizado em conformidade com a LGPD</span>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-center relative order-1 lg:order-2">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/1 border border-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/10 transition-all duration-500 group">
                        <Image
                            width={280}
                            height={280}
                            alt="NextSolve Logo"
                            src="/Ilustrative/policy.png"
                            className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 filter drop-shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}