"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FiShoppingCart,
  FiLayout,
  FiCpu,
  FiSmartphone,
  FiDatabase,
  FiServer,
} from "react-icons/fi";

export default function Service() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const dtcards = [
    {
      id: 1,
      title: "E-commerce",
      icon: <FiShoppingCart />,
      description: "Lojas virtuais seguras e otimizadas para converter visitantes em clientes reais.",
    },
    {
      id: 2,
      title: "Landing Page",
      icon: <FiLayout />,
      description: "Páginas de alta conversão com design focado em autoridade e resultados rápidos.",
    },
    {
      id: 3,
      title: "Automação com IA",
      icon: <FiCpu />,
      description: "Integração de inteligência artificial para otimizar o atendimento e tarefas repetitivas.",
    },
    {
      id: 4,
      title: "Apps Android/iOS",
      icon: <FiSmartphone />,
      description: "Desenvolvimento mobile nativo ou híbrido com foco na experiência do usuário.",
    },
    {
      id: 5,
      title: "Sistemas Web",
      icon: <FiDatabase />,
      description: "Plataformas web robustas e escaláveis feitas sob medida para sua operação.",
    },
    {
      id: 6,
      title: "ERPs de Gestão",
      icon: <FiServer />,
      description: "Gestão completa de processos e dados para escalar seu negócio com eficiência.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#050505] px-6 md:px-16 py-24 overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col items-center text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 font-syne text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Expertise & Soluções
            </span>
          </div>

          <h2 className="text-white font-syne font-extrabold text-4xl md:text-6xl leading-tight mb-6">
            O que podemos fazer por <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">você</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl font-light">
            Tecnologia estratégica para quem busca escala e autoridade digital.
            Escolha o caminho para o próximo nível do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dtcards.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-linear-to-br from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative h-full bg-[#141414] border border-white/5 rounded-2xl p-8 hover:-translate-y-1.25 transition-all duration-300 flex flex-col justify-between overflow-hidden">

                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-white font-syne font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center" data-aos="zoom-in">
          <div className="p-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent w-full max-w-4xl" />
          <p className="absolute mt-8 text-gray-600 text-xs tracking-widest uppercase">
            Transformando o futuro, um código por vez.
          </p>
        </div>

      </div>
    </section>
  );
}