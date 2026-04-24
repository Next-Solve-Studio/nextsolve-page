"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FiShoppingCart, FiLayout, FiCpu, FiSmartphone, FiDatabase, FiArrowRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CardsService() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const services = [
        { id: 1, title: 'E-commerce', icon: <FiShoppingCart /> },
        { id: 2, title: 'Landing Page', icon: <FiLayout /> },
        { id: 3, title: 'Automação IA', icon: <FiCpu /> },
        { id: 4, title: 'App Android/iOS', icon: <FiSmartphone /> },
        { id: 5, title: 'Sistemas ERP', icon: <FiDatabase /> },
    ];

    return (
        <section className="relative w-full py-20 bg-[#050505] px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-right">
                    {services.map((item) => (
                        <div key={item.id} className="group relative p-6 bg-white/2 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-500 hover:bg-white/4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl text-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="font-syne font-bold text-white text-sm uppercase tracking-widest leading-tight">{item.title}</h3>
                            </div>

                            <span className="absolute top-4 right-6 font-mono text-[9px] text-gray-700 group-hover:text-blue-900 transition-colors">MOD_0{item.id}</span>
                        </div>
                    ))}
                    <div className="p-6 rounded-2xl border border-dashed border-blue-500/20 flex items-center justify-center bg-blue-500/1">
                        <p className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em]">Ready for Deployment_</p>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col" data-aos="fade-left" data-aos-delay="200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-px bg-blue-500/50" />
                        <span className="font-syne text-[11px] font-black tracking-[0.4em] uppercase text-blue-400">Operação e Entrega</span>
                    </div>

                    <h2 className="font-syne font-black text-3xl md:text-4xl text-white mb-8 leading-tight">
                        Entenda como <br />
                        <span className="italic text-gray-500 text-2xl md:text-3xl">nossa tecnologia funciona:</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 font-light leading-relaxed text-base md:text-lg">
                        <p>
                            Desenvolvemos soluções tecnológicas sob medida para a sua empresa — desde uma
                            <span className="text-white font-medium"> Landing Page estratégica</span> até uma loja online completa,
                            pronta para converter e escalar suas vendas.
                        </p>

                        <p>
                            Integramos <span className="text-blue-400">Inteligência Artificial</span> para eliminar processos repetitivos
                            através de agentes inteligentes capazes de atuar no seu negócio 24 horas por dia.
                        </p>

                        <p>
                            Para quem busca robustez, criamos aplicativos nativos e <span className="text-white font-medium">Sistemas ERP</span> personalizados,
                            focados em inovação, eficiência e segurança de dados.
                        </p>
                    </div>
                    <Link href='/contact' className="group mt-10 inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-syne font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl">
                        Falar com um Especialista
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}