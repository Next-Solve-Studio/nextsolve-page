"use client";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function InitialInformation() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6 py-30">

            <div className="absolute top-0 left-1/4 w-0.5 h-full bg-linear-to-b from-transparent via-blue-500/20 to-transparent rotate-35 transform-gpu" />
            <div className="absolute bottom-0 right-1/4 w-0.5 h-full bg-linear-to-b from-transparent via-blue-500/10 to-transparent -rotate-35 transform-gpu" />
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,transparent)] bg-size-[100px_100px] opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_50px_80px,#79C4F2,transparent)] bg-size-[150px_150px] opacity-10" />
                <div className="absolute top-[20%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-blue-900/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">
                <div data-aos="fade-down" className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-blue-400">Next Generation Business</p>
                </div>

                <div
                    data-aos="zoom-out"
                    data-aos-delay="200"
                    className="flex flex-col gap-2 md:gap-4 mb-10"
                >
                    <h1 className="font-syne font-black text-4xl md:text-4xl lg:text-6xl text-white tracking-tight leading-tight">
                        Soluções <span className="text-white/90">tecnológicas</span>
                    </h1>

                    <h2 className="font-syne font-black text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight italic">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-600 to-white animate-gradient-x">
                            estratégicas.
                        </span>
                    </h2>
                </div>

                <p data-aos="fade-up" data-aos-delay="400" className="w-150 max-w-1xl text-gray-400 text-base md:text-xl font-light leading-relaxed mb-14">
                    Ajudamos empresas a evoluírem com tecnologia sob medida,
                    automatizando processos e potencializando resultados de forma
                    <span className="text-white"> inteligente e escalável.</span>
                </p>

                <div data-aos="fade-up" data-aos-delay="600">

                    <Link
                        href='/contact'
                        className="group relative inline-flex items-center gap-6 px-12 py-5 bg-transparent text-white font-bold rounded-full transition-all duration-500 overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-white/3 backdrop-blur-md" />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        </div>

                        <span className="relative z-10 text-sm md:text-base uppercase tracking-[0.2em] font-syne group-hover:text-blue-400 transition-colors">
                            Entre em contato
                        </span>

                        <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                            <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent group-hover:w-1/2 transition-all duration-500" />
                    </Link>
                </div>
            </div>

            <style jsx>{`
            @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }}
            .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 8s ease infinite;}`}</style>
        </section>
    );
}