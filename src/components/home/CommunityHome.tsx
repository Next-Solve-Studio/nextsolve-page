"use client";
import { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiCode, FiArrowRight } from "react-icons/fi";

export default function CommunityHome() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-out-quart", once: true });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#050505] px-6 md:px-12">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className=" max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        <div
          className="lg:col-span-5 space-y-8 text-center lg:text-left"
          data-aos="fade-right"
        >
          <div>
            <span className="inline-block font-syne text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500 mb-4 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Ecossistema Dev
            </span>

            <h1 className="font-syne font-extrabold text-4xl md:text-5xl leading-tight text-white">
              Conexões que <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                geram código.
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {["Front-end", "Back-end", "Game Dev", "Networking"].map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-medium hover:border-blue-500/40 hover:text-white transition-all"
              >
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-7 text-center lg:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative pl-0 lg:pl-12 border-l-0 lg:border-l border-white/10 group">

            <div className="absolute hidden lg:block left-px top-0 w-0.5 h-20 bg-linear-to-b from-blue-500 to-transparent group-hover:h-full transition-all duration-700" />

            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                Se você atua na área de tecnologia ou no universo dos jogos,
                temos um ambiente colaborativo esperando por você.
                <span className="text-white font-medium">
                  {" "}Promovemos trocas reais
                </span>,
                networking estratégico e oportunidades em projetos conjuntos.
              </p>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                Nosso objetivo é reunir mentes inquietas em um ecossistema
                enriquecedor, transformando o isolamento do código em
                potencial de mercado.
              </p>

              <div className="pt-4 flex justify-center lg:justify-start">
                <Link
                  href="/community"
                  className="group inline-flex items-center gap-3 text-white font-syne text-sm font-bold tracking-wider"
                >
                  <span className="relative">
                    ENTRAR NA COMUNIDADE
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </span>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <FiArrowRight />
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-2 text-[10px] font-mono text-gray-600 opacity-50 uppercase tracking-widest">
              <FiCode />
              <span>root / community / active_members.json</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}