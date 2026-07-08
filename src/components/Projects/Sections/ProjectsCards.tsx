"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

export default function ProjectsCards() {
    const [activeFilter, setActiveFilter] = useState<string>("Todos");

    type SolutionsCards = {
        id: number;
        image: string;
        alt: string;
        href: string;
        category: "Páginas Web" | "Sistemas" | "E-commerce"; 
        title: string;
        description: string;
    };

    const solutions: SolutionsCards[] = [
        {
            id: 1,
            image: "/projects/medalBrazil.png",
            alt: "Medalhas-Brasil",
            href: "https://www.medalhasbrasil.com/",
            category: "Páginas Web",
            title: "Site Medalhas Brasil",
            description: "Site institucional desenvolvido para apresentar os serviços, a história, os valores e a forma de atuação da Medalhas Brasil.",
        },
        {
            id: 2,
            image: "/projects/visioCorp.png",
            alt: "Ótica-VisioCorp",
            href: "https://visiocorp.com.br/",
            category: "Páginas Web",
            title: "Visio Corp",
            description: "Site institucional desenvolvido para uma ótica, apresentando seus serviços, forma de atendimento e canais de comunicação.",
        },
        {
            id: 3,
            image: "/projects/taskManager.png",
            alt: "Task-Manager",
            href: "https://taskmanager-page.vercel.app/",
            category: "Sistemas",
            title: "Sistema Task Manager",
            description: "Sistema SaaS desenvolvido para auxiliar empresas no gerenciamento de projetos, atividades e equipes, maximizando a produtividade.",
        },
        {
            id: 4,
            image: "/projects/financeControl.png",
            alt: "Financial-Control",
            href: "https://meu-controle-financeiro-web.vercel.app/",
            category: "Sistemas",
            title: "Financial Control",
            description: "Sistema de controle financeiro desenvolvido para gerenciar receitas, despesas e fluxo de caixa com dashboards interativos.",
        },
        {
            id: 5,
            image: "/projects/korivo.png",
            alt: "Korivo-Sistema",
            href: "https://korivo.vercel.app/",
            category: "Sistemas",
            title: "Sistema Korivo",
            description: "SaaS voltado para a gestão empresarial, reunindo módulos de vendas, financeiro e controle de estoque em uma plataforma única.",
        },
        {
            id: 6,
            image: "/projects/cheivaCakes.png",
            alt: "Cheiva-Cakes",
            href: "https://cheiva-cake-s.vercel.app/",
            category: "E-commerce",
            title: "Cheiva Cakes",
            description: "E-commerce desenvolvido para o segmento de confeitaria, oferecendo uma experiência fluida e intuitiva de ponta a ponta.",
        },
    ];

    const filterOptions = ["Todos", "Páginas Web", "Sistemas", "E-commerce"];

    const filteredSolutions = activeFilter === "Todos"
        ? solutions
        : solutions.filter((item) => item.category === activeFilter);

    return (
        <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden px-4 md:px-6 py-20 md:py-28 lg:px-16">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-size-[30px_30px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16" >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                            <span className="w-10 md:w-12 h-px bg-blue-500" />
                            <span className="font-syne text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-blue-400" id="Solutions">
                                Cases de Sucesso
                            </span>
                        </div>

                        <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
                            Projetos que definem o <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-200 to-white">
                                padrão NextSolve.
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base max-w-xs font-light border-l border-white/10 pl-4 md:pl-6 leading-relaxed">
                        Não apenas clientes, mas parceiros na construção de ecossistemas digitais de alta performance.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-12 border-b border-white/5 pb-6">
                    {filterOptions.map((filter) => (
                        <button
                            type="button"
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-full font-syne text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${activeFilter === filter
                                ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                : "bg-white/2 text-gray-400 border-white/5 hover:border-blue-500/30 hover:text-white hover:bg-white/4"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredSolutions.map((item, index) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            className="group relative flex flex-col bg-white/1 border border-white/5 rounded-4xl overflow-hidden hover:border-blue-500/30 hover:bg-white/2 transition-all duration-500"
                        >
                            <div className="relative h-56 w-full overflow-hidden bg-white/2 border-b border-white/5">
                                <div className="absolute inset-0 bg-blue-950/10 z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-500" />

                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#050505]/70 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-1.5">
                                    <FiLayers className="text-blue-500 text-[10px]" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-300">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="absolute bottom-4 right-4 z-20 w-9 h-9 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    <FiArrowUpRight size={18} />
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col grow">
                                <h3 className="font-syne font-black text-lg md:text-xl text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm font-light leading-relaxed grow line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="mt-6 pt-4 border-t border-white/3 flex items-center justify-between text-gray-600 group-hover:text-blue-500/80 transition-colors">
                                    <span className="font-mono text-[9px] tracking-widest uppercase">
                                        DEPLOYED / 0{item.id}
                                    </span>
                                    <span className="text-xs group-hover:translate-x-1 transition-transform duration-300">
                                        →
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}