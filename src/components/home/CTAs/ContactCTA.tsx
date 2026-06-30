"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FiMessageSquare, FiMail, FiArrowRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactCTA() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const contactNumber = "5585997276499";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${contactNumber}&text=Olá! Acessei o site da NextSolve e gostaria de solicitar um orçamento para meu projeto.`;

    const actions = [
        {
            id: 1,
            label: "Falar com Gestor no WhatsApp",
            href: whatsappUrl,
            target: "_blank",
            icon: FiMessageSquare,
        },
        {
            id: 2,
            label: "Enviar proposta por E-mail",
            href: "/contact",
            target: "_self",
            icon: FiMail,
        },
    ];

    return (
        <section className="relative w-full py-20 sm:py-24 md:py-28 lg:py-32 bg-[#050505] overflow-hidden px-6 text-center border-t border-white/5">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-75 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[30px_30px] sm:bg-size-[40px_40px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10" data-aos="zoom-in" data-aos-duration="1200">
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
                    <FiMessageSquare className="text-blue-500 text-xs md:text-sm animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-blue-400 font-syne">
                        Inicie seu projeto
                    </span>
                </div>

                <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6 md:mb-8">
                    Transforme sua visão em um <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-200 to-white">
                        projeto de alto nível.
                    </span>
                </h2>

                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-20">
                    Desenvolvemos ecossistemas digitais sob medida, unindo sofisticação
                    estética, engenharia limpa e otimização voltada a resultados reais para
                    sua empresa.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-lg md:max-w-none mx-auto">
                    {actions.map((action) => {
                        const IconComponent = action.icon;
                        return (
                            <Link
                                key={action.id}
                                href={action.href}
                                target={action.target}
                                rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
                                className="group relative flex flex-col md:flex-row items-center md:items-start md:text-left gap-5 p-6 sm:p-8 rounded-3xl md:rounded-4xl bg-white/1 hover:bg-white/3 border border-white/5 hover:border-blue-500/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="shrink-0 w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                                    <IconComponent className="text-2xl" />
                                </div>

                                <div className="flex flex-col items-center md:items-start gap-3 grow">
                                    <h3 className="font-syne font-black text-lg text-white group-hover:text-blue-200 transition-colors duration-300">
                                        {action.label}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-500 group-hover:text-white transition-colors duration-300">
                                        <span>Protocolo {action.target === "_blank" ? "Sinc_" : "E_"}MOD_0{action.id}</span>
                                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center opacity-0 -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    <FiArrowRight size={16} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}