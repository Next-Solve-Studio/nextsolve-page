"use client";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function InitialContent() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const images = [
    { id: 1, src: "/slide-01.png", alt: "Slide 1" },
    { id: 2, src: "/slide-02.png", alt: "Slide 2" },
    { id: 3, src: "/slide-03.png", alt: "Slide 3" },
  ];

  const content = {
    title:
      "Impulsionar empresas para crescer e prosperar através da tecnologia.",
    description:
      "Impulsionamos o crescimento e a prosperidade dos negócios por meio da tecnologia, unindo estratégia, inovação e soluções inteligentes para gerar resultados reais.",
    link: "Saiba mais →",
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,100,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,100,255,0.02)_50%,transparent_60%)]" />
      
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[60px_60px]" />
      
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue rounded-full blur-[150px] opacity-[0.03]" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-white rounded-full blur-[150px] opacity-[0.02]" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue/20 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl w-full items-center relative z-10 max-[748px]:py-30">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="relative group"
        >
          <div className="absolute -inset-4 bg-blue/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white/5 shadow-2xl shadow-black/50">
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl p-px bg-linear-to-r from-white/10 via-blue/20 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-black" />
            </div>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              loop
              className="relative"
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  <div className="relative aspect-4/3">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 contrast-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="flex flex-col gap-6 lg:gap-8"
        >
          <div className="inline-flex w-fit group/badge">
            <span className="text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-blue/5 text-blue border border-blue/15 backdrop-blur-sm group-hover/badge:bg-blue/10 group-hover/badge:border-blue/25 transition-all duration-300">
              Inovação & Tecnologia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
            {content.title}
          </h1>

          <p className="text-base lg:text-lg leading-relaxed text-gray-400 max-w-lg">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="group relative w-fit px-8 py-3.5 rounded-full bg-blue text-black font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.link}
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              type="button"
              className="group w-fit px-8 py-3.5 rounded-full bg-white/5 text-white border border-white/10 font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/15 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Cases
              </span>
            </button>
          </div>

          <div className="flex gap-8 pt-8 border-t border-white/5">
            <div className="group/stat">
              <div className="text-2xl font-bold text-white/90 group-hover/stat:text-blue transition-colors duration-300">100+</div>
              <div className="text-xs text-gray-500">Projetos entregues</div>
            </div>
            <div className="group/stat">
              <div className="text-2xl font-bold text-white/90 group-hover/stat:text-blue transition-colors duration-300">99%</div>
              <div className="text-xs text-gray-500">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <span className="text-[10px] text-gray-600 tracking-[0.2em]">SCROLL</span>
        <div className="w-5 h-8 border border-white/10 rounded-full flex justify-center">
          <div className="w-px h-2 bg-blue rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}