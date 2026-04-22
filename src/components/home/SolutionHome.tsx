"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

export default function ClientsHome() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const solutions = [
    { id: 1, image: "/medalbrazil.png", alt: "Medalhas Brasil", href: "https://www.medalhasbrasil.com/", category: "E-commerce" },
    { id: 2, image: "/visiologo.png", alt: "Ótica VisioCorp", href: "https://visiocorp.com.br/", category: "Soluções Ópticas" },
    /* { id: 4, image: "/taskmanagerlogo.png", alt: "Task Manager", href: "https://www.taskmenager.com.br/", category: "Produtividade" }, */
    { id: 5, image: "/financialcontrollogo.png", alt: "Financial Control", href: "https://meu-controle-financeiro-web.vercel.app/", category: "Finanças" },
    { id: 6, image: "/korivologo.jpeg", alt: "Korivo Sistema", href: "https://korivo.vercel.app/", category: "Gestão Empresarial" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden px-4 md:px-6 py-20 md:py-28 lg:px-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-14 md:mb-20 sm:hover" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-10 md:w-12 h-px bg-blue-500" />
              <span className="font-syne text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-blue-400">
                Cases de Sucesso
              </span>
            </div>

            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
              Projetos que definem o <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
                padrão NextSolve.
              </span>
            </h2>
          </div>

          <p className="text-gray-500 text-xs md:text-base max-w-xs font-light border-l border-white/10 pl-4 md:pl-6">
            Não apenas clientes, mas parceiros na construção de ecossistemas digitais de alta performance.
          </p>
        </div>

        <div className="sm:hover" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
            loop
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-visible"
          >
            {solutions.map((item) => (
              <SwiperSlide key={item.id} className="pb-10 md:pb-16">
                <div className="group relative">
                  <div className="relative bg-linear-to-b from-white/5 to-transparent border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 transition-all duration-700 group-hover:border-blue-500/40 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-40 h-40 md:w-48 md:h-48 bg-blue-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="mb-4 md:mb-6">
                      <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-blue-500/60 bg-blue-500/5 px-2 py-1 md:px-3 rounded-md border border-blue-500/10">
                        {item.category}
                      </span>
                    </div>

                    <div className="relative w-full flex items-center justify-center mb-6 md:mb-10">
                      <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-3">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="font-syne font-bold text-lg md:text-xl lg:text-2xl text-white mb-4 md:mb-6">
                        {item.alt}
                      </h3>

                      <Link
                        href={item.href}
                        target="_blank"
                        className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold tracking-tight uppercase text-gray-400 group-hover:text-blue-400 transition-colors"
                      >
                        Visitar Website
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-all">
                          <FiArrowUpRight className="text-xs md:text-sm" />
                        </div>
                      </Link>
                    </div>

                    <div className="absolute top-0 right-0 p-3 md:p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-3 md:gap-4">
              <button type="button" className="btn-prev w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 hover:text-black transition-all duration-500">
                <FiArrowLeft size={18} />
              </button>

              <button type="button" className="btn-next w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 hover:text-black transition-all duration-500">
                <FiArrowRight size={18} />
              </button>
            </div>

            <div className="hidden md:block text-right">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em]">
                Explore a galeria completa →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}