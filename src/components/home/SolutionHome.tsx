"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ClientsHome() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const solutions = [
    {
      id: 1,
      image: "/medalbrazil.png",
      alt: "Medalhas Brasil",
      href: "https://www.medalhasbrasil.com/",
    },
    {
      id: 2,
      image: "/visiologo.png",
      alt: "Ótica VisioCorp",
      href: "https://www.visiocorp.com/",
    },
    {
      id: 3,
      image: "/bmcodelogo.png",
      alt: "BMcode",
      href: "https://www.bmcode.com.br/",
    },
    {
      id: 4,
      image: "/taskmanagerlogo.png",
      alt: "Task Manager",
      href: "https://www.taskmenager.com.br/",
    },
    {
      id: 5,
      image: "/financialcontrollogo.png",
      alt: "Financial Control",
      href: "https://www.financialcontrol.com.br/",
    },
    {
      id: 6,
      image: "/korivologo.jpeg",
      alt: "Korivo Sistema",
      href: "https://www.korivo.com.br/",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex bg-balck px-16 py-20 max-md:px-6 max-md:py-14">
   
      <div
        className="max-w-4xl mx-auto flex items-center gap-18 max-md:flex-col max-md:gap-12"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="flex-1 min-w-0">
          <span className="block font-syne text-[11px] font-bold tracking-[0.2em] uppercase text-blue opacity-80 mb-4">
            Clientes & Projetos
          </span>
          <h1 className="font-syne font-extrabold text-[36px] leading-[1.1] text-white m-0 mb-5">
            Conheça alguns de nossos clientes e sistemas.
          </h1>
          <p className="text-lg text-gray leading-[1.8] font-light m-0 max-w-sm">
            Ao lado, você encontra empresas e sistemas para os quais entregamos
            soluções tecnológicas com excelência.
          </p>
        </div>

        {/* Right: carrossel */}
        <div
          className="w-86 max-md:w-full shrink-0"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="bg-[#141414] border border-blue/10 rounded-xl overflow-hidden">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              pagination={{
                el: ".swiper-dots",
                clickable: true,
                bulletClass: "swiper-dot",
                bulletActiveClass: "swiper-dot-active",
              }}
              loop
            >
              {solutions.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col items-center justify-center gap-5 py-8 px-8 h-105">
                    <div className="w-55 h-52.5 relative flex items-center justify-center bg-white/3 border border-white/[0.07] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="w-full h-full object-contain p-3"
                        sizes="320px"
                      />
                    </div>
                    <span className="font-syne text-sm font-bold text-white">
                      {item.alt}
                    </span>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="font-syne text-[11px] font-bold tracking-[0.08em] uppercase text-blue border-b border-blue/30 pb-px"
                    >
                      Acesse →
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controls */}
            <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/5">
              <div className="swiper-dots flex gap-1.5 items-center [&_.swiper-dot]:w-1.25 [&_.swiper-dot]:h-1.25 [&_.swiper-dot]:rounded-full [&_.swiper-dot]:bg-white/15 [&_.swiper-dot]:cursor-pointer [&_.swiper-dot-active]:w-4 [&_.swiper-dot-active]:rounded-[3px] [&_.swiper-dot-active]:bg-blue" />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="swiper-prev w-10 h-10 rounded-md border border-blue/20 text-blue text-sm flex items-center justify-center hover:bg-blue/10 transition-colors"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="swiper-next w-10 h-10 rounded-md border border-blue/20 text-blue text-sm flex items-center justify-center hover:bg-blue/10 transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

         <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-blue/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue" />
        <div className="w-px h-24 bg-blue/40" />
      </div>

    </section>
  );
}
