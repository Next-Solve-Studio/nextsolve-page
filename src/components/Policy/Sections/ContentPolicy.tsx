"use client";
import { useEffect } from "react";
import { FiShield, FiEye, FiLock, FiUserCheck, FiCpu, FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentPolicy() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    type PolicyType = {
        id: number;
        title: string;
        description: string;
        icon: IconType;
    };

    const policies: PolicyType[] = [
        {
            id: 1,
            title: "Coleta Mínima e Protegida",
            description: "Adotamos severas medidas técnicas e organizacionais para blindar seus dados pessoais contra acessos não autorizados, perdas ou alterações. Coletamos estritamente o necessário para a viabilidade dos nossos serviços.",
            icon: FiLock,
        },
        {
            id: 2,
            title: "Transparência de Escopo",
            description: "Prezamos pela clareza absoluta em todas as etapas de processamento. Informamos precisamente quais metadados são coletados, a finalidade da requisição e os protocolos de descarte seguro.",
            icon: FiEye,
        },
        {
            id: 3,
            title: "Segurança de Infraestrutura",
            description: "Nossos ecossistemas digitais operam sob rotinas rigorosas de boas práticas, criptografia ponta a ponta e auditorias de vulnerabilidades, mitigando riscos de vazamentos e ameaças virtuais de forma preditiva.",
            icon: FiShield,
        },
        {
            id: 4,
            title: "Direitos Conquistados (LGPD)",
            description: "Asseguramos de ponta a ponta os seus direitos fundamentais de privacidade. Você pode, a qualquer momento, requisitar o acesso, a retificação, a portabilidade ou a exclusão definitiva de seus registros.",
            icon: FiUserCheck,
        },
    ];

    return (
        <section className="relative w-full py-24 bg-[#050505] overflow-hidden px-6 lg:px-16">

            <div className="absolute top-1/2 left-0 w-100 h-100 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4">
                        <FiCpu className="text-blue-500 text-xs" />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400 font-syne">
                            Diretrizes Técnicas
                        </span>
                    </div>
                    <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl text-white">
                        Tratamento e Segurança da <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-white">
                            Privacidade de Dados.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
                    {policies.map((policy, index) => {
                        const IconComponent = policy.icon;
                        return (
                            <div
                                key={policy.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group relative p-6 sm:p-8 rounded-3xl bg-white/1 border border-white/5 hover:border-blue-500/20 hover:bg-white/2 transition-all duration-500 flex flex-col sm:flex-row gap-5 items-start text-left"
                            >
                                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                    <IconComponent size={20} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="font-syne font-black text-lg text-white group-hover:text-blue-400 transition-colors">
                                        {policy.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                                        {policy.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div
                    className="p-8 md:p-12 rounded-4xl bg-white/1 border border-white/5 backdrop-blur-md relative overflow-hidden text-left"
                    data-aos="zoom-in"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                <h4 className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                                    Marco Regulatório Nacional
                                </h4>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                                A Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) garante mais segurança,
                                transparência e controle sobre o tratamento de dados pessoais. Em estrita conformidade
                                com a legislação, a <strong className="text-white font-medium">NextSolve</strong> atua como agente operadora e controladora, mitigando de forma assertiva e contínua os riscos operacionais relativos ao tratamento informacional em todos os subdomínios sob nossa chancela técnica.
                            </p>
                        </div>

                        <div className="shrink-0 w-full lg:w-auto">
                            <div className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
                                <span>Ref: LEI 13.709/18</span>
                                <FiExternalLink className="text-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}