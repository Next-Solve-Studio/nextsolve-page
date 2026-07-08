"use client";
import { FiCheckCircle, FiClock, FiCpu } from "react-icons/fi";

export default function InitialContact() {

    const stats = [
        { id: 1, label: "Projetos", value: "100+", icon: <FiCpu className="text-blue-500" /> },
        { id: 2, label: "Satisfação", value: "100%", icon: <FiCheckCircle className="text-blue-500" /> },
        { id: 3, label: "Suporte", value: "24/7", icon: <FiClock className="text-blue-500" /> },
    ];

    return (
        <section className="relative w-full min-h-[80vh] bg-[#050505] flex items-center justify-center overflow-hidden px-6 py-20">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-100 h-100 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-px bg-blue-500/50" />
                        <span className="font-syne text-[11px] font-bold tracking-[0.4em] uppercase text-blue-400">
                            Conecte-se conosco
                        </span>
                    </div>

                    <h1 className="font-syne font-black text-5xl md:text-7xl text-white leading-[1.1] mb-8">
                        Entre em <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-white to-white">Contato.</span>
                    </h1>

                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl mb-10"> Oferecemos múltiplos canais de atendimento, incluindo WhatsApp, e-mail e nosso<span className="text-blue-400"> Agente Virtual AI</span> treinado para resolver suas demandas instantaneamente.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.id}
                            className="group relative flex items-center gap-6 p-6 bg-white/2 border border-white/5 rounded-2xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl transition-transform duration-500 group-hover:scale-110">
                                {stat.icon}
                            </div>

                            <div>
                                <h3 className="font-syne font-black text-2xl text-white leading-none mb-1">{stat.value}</h3>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 group-hover:text-blue-400 transition-colors">{stat.label}</p>
                            </div>

                            <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}