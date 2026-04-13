"use client";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiCpu, FiGlobe, FiLayers } from "react-icons/fi"; 
import { FcStatistics } from "react-icons/fc";
import { MdAssessment } from "react-icons/md";


export default function AboutHome() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white px-6 md:px-16 py-24 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[2%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">

        <div className="w-full text-center mb-16 sm:hover" data-aos="fade-down">
          <span className="inline-block font-syne text-blue-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-blue-500/20 rounded-full bg-blue-500/5">
            Inovação Digital
          </span>

          <h1 className="font-syne font-extrabold text-4xl md:text-6xl leading-tight text-transparent bg-linear-to-b from-white to-gray-500 bg-clip-text">
            NextSolve Studio <span className="text-blue-500">Vision</span>
          </h1>

          <div className="mt-6 flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-blue-500/50" />
            <p className="text-gray-500 font-light tracking-wide text-sm md:text-base">
              Transformando ideias em arquitetura de alta performance
            </p>
            <div className="h-px w-12 bg-blue-500/50" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">

          <div className="w-full lg:w-1/2 space-y-8 sm:hover" data-aos="fade-right" data-aos-delay="200">
            <div className="relative p-6 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500">
              <FiCpu className="text-blue-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light italic">
                "Criada para oferecer atendimento de excelência e soluções digitais estratégicas,
                atuamos no fortalecimento da sua presença online."
              </p>
            </div>
            <div className="relative p-6 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500">
              <FcStatistics className="text-blue-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light italic">
                "Com o objetivo de oferecer soluções de alta qualidade que impulsionem resultados e fortaleçam o posicionamento da sua empresa e dos seus produtos no ambiente digital."
              </p>
            </div>
            <div className="relative p-6 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-500">
              <MdAssessment className="text-blue-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light italic">
                "Com uma média de 99,9% de avaliações positivas por parte de nossos clientes e colaboradores, especialmente em projetos tecnológicos específicos."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-blue-400 font-bold flex items-center gap-2">
                  <FiGlobe /> Performance
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lojas virtuais eficientes e automação de processos para máxima produtividade.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-blue-400 font-bold flex items-center gap-2">
                  <FiLayers /> Suporte Humano
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Acompanhamento personalizado do início ao fim com 45 dias de suporte gratuito.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center sm:hover" data-aos="fade-left" data-aos-delay="300">
            <div className="relative group">

              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20" />

                <Image
                  width={500}
                  height={700}
                  alt="NextSolve Solutions"
                  src="/solutionserv.png"
                  className="w-full h-auto object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Status do Projeto</span>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-gray-300 mt-1">Otimizado para Conversão & UX</p>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}