"use client";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function InitialAbout() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-14 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        <div data-aos="fade-right" className="items-center">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
              Quem Somos
            </span>
          </div>

          <h1 className="font-syne font-black text-4xl md:text-6xl text-white leading-tight mb-8">
            NextSolve <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-blue-300 to-white">
              Studio Vision
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-px bg-linear-to-b from-blue-500 to-transparent" />
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase italic">
              Software Engineering <br /> & Tech Solutions
            </p>
          </div>

          <p className="max-w-md text-gray-500 text-base md:text-lg leading-relaxed font-light">Especializados em transformar visões complexas em infraestruturas digitais robustas. Não apenas escrevemos código, projetamos o futuro do seu negócio.</p>
        </div>

        <div className="relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
          <div className="relative p-2 rounded-4xl border border-white/5 bg-white/2 backdrop-blur-sm group">

            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="overflow-hidden rounded-[1.8rem] relative">
              <div className="absolute inset-0  group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image
                height={500}
                width={600}
                src='/logo.jpeg'
                alt="Logo NextSolve"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-2xl shadow-2xl hidden md:block animate-bounce-slow">
              <p className="text-black font-syne font-black text-xl tracking-tighter">Criada em 2024</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Innovation Hub</p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce-slow {0%, 100% { transform: translateY(0); }50% { transform: translateY(-10px); }}
        .animate-bounce-slow {animation: bounce-slow 4s infinite ease-in-out;}`}</style>
    </section>
  );
}