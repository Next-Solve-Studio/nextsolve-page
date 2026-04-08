"use client";
import { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutHome() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black px-16 py-24 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,100,255,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.01),transparent_70%)]" />
    
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue rounded-full blur-[150px] opacity-[0.02]" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-white rounded-full blur-[150px] opacity-[0.01]" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10">
        <div data-aos="fade-right" data-aos-duration="800" className="mb-12">
          <span className="relative inline-block font-syne text-[11px] font-bold tracking-[0.2em] uppercase text-blue opacity-80 mb-4">
            Quem somos
            <span className="absolute -bottom-1 left-0 w-8 h-px bg-blue/30" />
          </span>
          <h1 className="font-syne font-extrabold text-[52px] leading-[1.05] text-white m-0 bg-linear-to-r from-white via-white to-gray-500 bg-clip-text  q">
            NextSolve Studio Vision
          </h1>
        </div>

        <div  
          data-aos="fade-right"
          data-aos-duration="800"
          className="max-w-2xl flex flex-col gap-5 mb-10"
        >
          <p className="text-[15px] text-gray-400 leading-[1.8] font-light m-0 hover:text-gray-300 transition-colors duration-300">
            Empresa de tecnologia e desenvolvimento criada para oferecer
            atendimento de excelência e soluções digitais estratégicas para o
            crescimento do seu negócio. Atuamos no fortalecimento da sua presença
            online, com a criação de lojas virtuais eficientes e de alta
            performance, e na automação de processos, tornando as operações mais
            ágeis, organizadas e produtivas.
          </p>
          <p className="text-[15px] text-gray-400 leading-[1.8] font-light m-0 hover:text-gray-300 transition-colors duration-300">
            O diferencial da nossa empresa é que, além do suporte por agentes,
            trazemos contato humano e personalizado para nossos clientes,
            acompanhando cada detalhe do início ao fim do projeto. Com suporte
            gratuito de 45 dias, nossa meta é trazer o melhor produto com o melhor
            preço.
          </p>
        </div>

        <Link
          data-aos="fade-right"
          data-aos-duration="800"
          href=""
          className="group inline-flex items-center gap-2 text-blue font-syne text-[13px] font-bold tracking-[0.06em] border-b border-blue/30 pb-0.5 transition-all duration-300 hover:border-blue/60 hover:gap-3"
        >
          <span>Saiba mais sobre nós</span>
        </Link>
      </div>
    </section>
  );
}