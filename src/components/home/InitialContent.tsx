"use client";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FiArrowUpRight, FiZap, FiCheckCircle } from "react-icons/fi";
import "swiper/css";

export default function InitialContent() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  const start = [
    { id: 11, label: "Projetos", value: "100+", icon: <FiCheckCircle className="text-blue-500" /> },
    { id: 12, label: "Satisfação", value: "99%" }
  ];

  const images = [
    { id: 1, src: "/slide-01.png", alt: "Slide 1" },
    { id: 2, src: "/slide-02.png", alt: "Slide 2" },
    { id: 3, src: "/slide-03.png", alt: "Slide 3" },
  ];

  const content = {
    id: 1,
    title: "Impulsionar empresas para crescer e prosperar através da tecnologia.",
    description:
      "Unimos estratégia, inovação e soluções inteligentes para gerar resultados reais e transformar sua visão digital em autoridade de mercado.",
    link: "Saiba mais",
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-black">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-900/15 blur-[120px]" />

        <div className="absolute top-20 right-[20%] w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(121,196,242,0.8)] opacity-40" />
        <div className="absolute bottom-40 left-[15%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(121,196,242,0.6)] opacity-30" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full items-center relative z-10 py-20">

        <div
          data-aos="zoom-in-left"
          data-aos-delay="200"
          className="relative order-1 lg:order-2"
        >
          <div className="relative rounded-4xl p-3 bg-white/3 border border-white/10 backdrop-blur-sm shadow-2xl">

            <div className="absolute top-6 right-8 z-20 flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <div className="w-2 h-2 rounded-full bg-green-500/40" />
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                className="w-full aspect-4/3 lg:aspect-square"
              >
                {images.map((img) => (
                  <SwiperSlide key={img.id}>
                    <div className="relative w-full h-full group">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-2000 group-hover:scale-110"
                        priority
                      />
                      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div
          data-aos="fade-right"
          className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left"
        >

          <div className="inline-flex items-center gap-2 w-fit mx-auto lg:mx-0 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-md">
            <FiZap className="text-blue-400 text-sm animate-bounce" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-blue-400">
              Future Ready Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-white">
            {content.title.split("tecnologia").map((part, i) => (
              <span key={`${content.id}-${i}`}>
                {part}
                {i === 0 && (
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                    tecnologia
                  </span>
                )}
              </span>
            ))}
          </h1>

          <p className="text-base lg:text-lg leading-relaxed text-gray-400 max-w-lg font-light mx-auto lg:mx-0">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
            <button type="button" className="group relative px-8 py-4 bg-blue-500 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(121,196,242,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                {content.link}
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>

            <button type="button" className="px-8 py-4 bg-transparent text-white border border-white/10 font-medium rounded-xl hover:bg-white/5 transition-all">
              Ver Cases
            </button>
          </div>

          <div className="flex gap-10 pt-8 mt-4 border-t border-white/5 justify-center lg:justify-start">
            {start.map((stat) => (
              <div key={stat.id} className="group cursor-default text-center lg:text-left">
                <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-center lg:justify-start gap-2">
                  {stat.icon && stat.icon}
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-500">
        <div className="w-px h-12 bg-linear-to-b from-blue-500 to-transparent animate-shimmer" />
        <span className="text-[9px] text-gray-500 tracking-[0.4em] uppercase font-bold">
          Explore
        </span>
      </div>

    </section>
  );
}