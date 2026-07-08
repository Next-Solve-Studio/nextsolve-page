"use client";
import { FiCheckCircle, FiClock, FiCpu, FiArrowRight, FiMessageCircle, FiMail, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function InitialContact() {
    const [hoveredStat, setHoveredStat] = useState<number | null>(null);

    const stats = [
        {
            id: 1,
            label: "Projetos",
            value: "100+",
            icon: <FiCpu className="text-blue-400" />,
            description: "Entregues com excelência",
            gradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 2,
            label: "Satisfação",
            value: "100%",
            icon: <FiCheckCircle className="text-blue-400" />,
            description: "Clientes recomendam",
            gradient: "from-blue-500/20 to-indigo-500/20"
        },
        {
            id: 3,
            label: "Suporte",
            value: "24/7",
            icon: <FiClock className="text-blue-400" />,
            description: "Atendimento contínuo",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
    ];

    const contactChannels = [
        { icon: <FiMessageCircle />, label: "WhatsApp", action: "Clique para chamar" },
        { icon: <FiMail />, label: "E-mail", action: "Envie uma mensagem" },
        { icon: <FiSend />, label: "AI Agent", action: "Atendimento 24/7" },
    ];

    return (
        <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-4 py-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-150 h-150 bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />

                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 rounded-full px-4 py-2">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </div>
                        <span className="font-syne text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">
                            Disponível agora
                        </span>
                    </div>

                    <h1 className="font-syne font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1]">
                        Vamos
                        <span className="relative inline-block mx-3">
                            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-white to-blue-400 bg-size-[200%_auto] animate-gradient">
                                conversar?
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-500/50 to-transparent rounded-full" />
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                        Oferecemos múltiplos canais de atendimento para você escolher o que preferir.
                        Conecte-se conosco e descubra como podemos transformar suas ideias em realidade.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 rounded-xl font-syne font-bold text-sm tracking-wider text-white uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Enviar Proposta
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button className="px-8 py-4 border border-white/10 rounded-xl font-syne font-bold text-sm tracking-wider text-gray-400 uppercase hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300">
                            Ver Projetos
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                        {contactChannels.map((channel, index) => (
                            <div key={index}
                                className="group flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/5 rounded-full hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                                <span className="text-blue-400 text-sm">{channel.icon}</span>
                                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {channel.label}
                                </span>
                                <span className="text-[8px] font-bold tracking-widest uppercase text-gray-600 group-hover:text-blue-400 transition-colors">
                                    {channel.action}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            onMouseEnter={() => setHoveredStat(stat.id)}
                            onMouseLeave={() => setHoveredStat(null)}
                            className="group relative overflow-hidden bg-linear-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                        >
                            <div className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="absolute -inset-1 bg-linear-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0 rounded-2xl blur-xl transition-all duration-500" />

                            <div className="relative flex items-center gap-6">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-blue-500/50">
                                        {stat.icon}
                                    </div>
                                    {hoveredStat === stat.id && (
                                        <div className="absolute inset-0 rounded-2xl border border-blue-500/30 animate-pulse-ring" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-end gap-3">
                                        <h3 className="font-syne font-black text-3xl text-white leading-none">
                                            {stat.value}
                                        </h3>
                                        <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400/60">
                                            {stat.label}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1.5 group-hover:text-gray-400 transition-colors">
                                        {stat.description}
                                    </p>
                                </div>

                                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                                    <div className="w-1 h-8 rounded-full bg-white/5 overflow-hidden">
                                        <div className={`w-full h-full bg-linear-to-t from-blue-500 to-blue-400 rounded-full transition-all duration-700 ${hoveredStat === stat.id ? 'h-full' : 'h-0'
                                            }`} />
                                    </div>
                                </div>
                            </div>

                            <div className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-500 to-transparent transition-all duration-700 ${hoveredStat === stat.id ? 'w-full' : 'w-0'
                                }`} />
                        </div>
                    ))}

                    <div className="relative overflow-hidden bg-linear-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-2xl p-6 transition-all duration-500 hover:border-blue-500/40 group">
                        <div className="relative flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-white">Precisa de ajuda agora?</p>
                                <p className="text-xs text-gray-400 mt-1">Nossa equipe está pronta para atender</p>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                                <span className="text-xs font-bold tracking-wider uppercase">Chat</span>
                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}