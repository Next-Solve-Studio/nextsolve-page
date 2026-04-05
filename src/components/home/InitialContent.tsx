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
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 overflow-hidden bg-black ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl w-full items-center relative z-10 max-[748px]:py-30">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="relative group"
        >
          <div className="absolute -inset-4 bg-linear-to-r from-blue/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden backdrop-blur-sm bg-white/5">
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl p-1px bg-linear-to-r from-blue via-transparent to-blue opacity-50 group-hover:opacity-100 transition-opacity duration-700">
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
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="flex flex-col gap-6 lg:gap-8"
        >
          <div className="inline-flex w-fit">
            <span className="text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-blue/10 text-blue border border-blue/20 backdrop-blur-sm">
              Inovação & Tecnologia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
            {content.title}
          </h1>

          <p className="text-base lg:text-lg leading-relaxed text-gray max-w-lg">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="group relative w-fit px-8 py-3.5 rounded-full bg-blue text-black font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.link}
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              type="button"
              className="group w-fit px-8 py-3.5 rounded-full bg-white/5 text-white border border-white/10 font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
            >
              Ver Cases
            </button>
          </div>

          <div className="flex gap-8 pt-8 border-t border-white/10">
            <div></div>
            <div>
              <div className="text-2xl font-bold text-blue">100+</div>
              <div className="text-xs text-gray">Projetos entregues</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue">99%</div>
              <div className="text-xs text-gray">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
