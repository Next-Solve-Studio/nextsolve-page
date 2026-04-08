"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiArrowRight, FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { MdOutlineCircle } from "react-icons/md";

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
      category: "E-commerce",
    },
    {
      id: 2,
      image: "/visiologo.png",
      alt: "Ótica VisioCorp",
      href: "https://www.visiocorp.com/",
      category: "Soluções Ópticas",
    },
    {
      id: 3,
      image: "/bmcodelogo.png",
      alt: "BMcode",
      href: "https://www.bmcode.com.br/",
      category: "Tecnologia",
    },
    {
      id: 4,
      image: "/taskmanagerlogo.png",
      alt: "Task Manager",
      href: "https://www.taskmenager.com.br/",
      category: "Produtividade",
    },
    {
      id: 5,
      image: "/financialcontrollogo.png",
      alt: "Financial Control",
      href: "https://www.financialcontrol.com.br/",
      category: "Finanças",
    },
    {
      id: 6,
      image: "/korivologo.jpeg",
      alt: "Korivo Sistema",
      href: "https://www.korivo.com.br/",
      category: "Gestão Empresarial",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden px-6 py-24 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.01),transparent_70%)]" />

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue rounded-full blur-[150px] opacity-[0.02]" />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="text-[11px] font-mono text-gray-600 tracking-wider rotate-90 whitespace-nowrap">
          PROJETOS RECENTES
        </div>
        <div className="w-px h-32 bg-linear-to-b from-transparent via-blue/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue/40" />
            <span className="font-syne text-[11px] font-bold tracking-[0.2em] uppercase text-blue">
              Portfólio
            </span>
            <div className="w-8 h-px bg-blue/40" />
          </div>

          <h2 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-4">
            Clientes que confiam
            <span className="block text-blue/60 text-2xl md:text-3xl mt-2 font-light">
              em nossa tecnologia
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Empresas e sistemas inovadores que escolheram a NextSolve para
            transformar suas ideias em realidade digital.
          </p>
        </div>

        <div
          className="relative"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
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
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {solutions.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative bg-linear-to-br from-white/3 to-white/1 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue/30 hover:shadow-2xl hover:shadow-blue/5">
                  <div className="absolute inset-0 bg-linear-to-r from-blue/0 via-blue/5 to-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12" />

                  <div className="relative p-6 flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-6">
                      <div className="absolute inset-0 bg-linear-to-br from-blue/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-full h-full bg-white/2 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-blue/20 group-hover:shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 160px, 200px"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-blue/60">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-syne font-bold text-lg text-white mb-4 transition-colors duration-300 group-hover:text-blue">
                      {item.alt}
                    </h3>

                    <Link
                      href={item.href}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-gray-400 hover:text-blue transition-all duration-300 group/link"
                    >
                      <span>Explorar projeto</span>
                      <FiExternalLink className="w-3 h-3 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              className="swiper-prev group w-10 h-10 rounded-full border border-white/10 bg-white/2 text-white/60 hover:text-blue hover:border-blue/30 hover:bg-blue/5 transition-all duration-300 flex items-center justify-center"
            >
              <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <div className="swiper-dots flex gap-2 items-center [&_.swiper-dot]:w-1.5 [&_.swiper-dot]:h-1.5 [&_.swiper-dot]:rounded-full [&_.swiper-dot]:bg-white/20 [&_.swiper-dot]:cursor-pointer [&_.swiper-dot]:transition-all [&_.swiper-dot]:duration-300 [&_.swiper-dot-active]:w-6 [&_.swiper-dot-active]:bg-blue [&_.swiper-dot-active]:rounded-full" />

            <button
              type="button"
              className="swiper-next group w-10 h-10 rounded-full border border-white/10 bg-white/2 text-white/60 hover:text-blue hover:border-blue/30 hover:bg-blue/5 transition-all duration-300 flex items-center justify-center"
            >
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/2 border border-white/5">
            <MdOutlineCircle className="w-1.5 h-1.5 text-blue animate-pulse" />
            <span className="text-[11px] font-mono text-gray-500 tracking-wider">
              +12 projetos entregues com sucesso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
