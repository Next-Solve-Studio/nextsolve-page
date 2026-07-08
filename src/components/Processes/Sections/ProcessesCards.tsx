import { IconType } from "react-icons";
import { FiSearch, FiCompass, FiCpu, FiTrendingUp } from "react-icons/fi";
import { HiMiniRocketLaunch } from "react-icons/hi2";

export default function ProcessesCards() {
    type CardsItem = {
        id: number;
        step: string;
        title: string;
        description: string;
        icon: IconType;
    };

    const cards: CardsItem[] = [
        {
            id: 1,
            step: "01",
            title: "Diagnóstico",
            description: "Imersão completa no seu modelo de negócio, mapeando objetivos estratégicos e oportunidades técnicas para estruturar um produto focado em resultados.",
            icon: FiSearch
        },
        {
            id: 2,
            step: "02",
            title: "Estratégia & Design",
            description: "Modelagem da arquitetura de informação, fluxos de usabilidade (UI/UX) e identidade visual premium pensados milimetricamente para conversão.",
            icon: FiCompass
        },
        {
            id: 3,
            step: "03",
            title: "Desenvolvimento",
            description: "Engenharia de software utilizando stacks modernas, otimização severa de performance, segurança de ponta e escalabilidade desde o primeiro commit.",
            icon: FiCpu
        },
        {
            id: 4,
            step: "04",
            title: "Lançamento",
            description: "Deploy automatizado em nuvem, integração fina com ferramentas de análise e auditoria de produção para um go-live com risco zero.",
            icon: HiMiniRocketLaunch
        },
        {
            id: 5,
            step: "05",
            title: "Evolução Contínua",
            description: "Suporte consultivo pós-entrega, monitoramento preditivo e iterações contínuas de funcionalidades para acompanhar a tração do seu ecossistema.",
            icon: FiTrendingUp
        },
    ];

    return (
        <section className="relative w-full py-20 md:py-28 bg-[#050505] overflow-hidden px-6 lg:px-12 border-b border-white/5">

            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <div className="relative z-10 max-w-360 mx-auto">

                <div className="text-center mb-16 md:mb-24 flex flex-col items-center justify-center" >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-500/5 mb-4 font-mono text-[10px] uppercase tracking-widest text-blue-400">
                        Pipeline de Engenharia
                    </div>
                    <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                        Entenda o Nosso <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">Processo.</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-light max-w-md mt-4 leading-relaxed">
                        Nossa esteira técnica é sequencial, transparente e moldada para garantir previsibilidade em cada etapa do projeto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {cards.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.id} className="group relative bg-white/1 border border-white/5 rounded-3xl p-6 flex flex-col justify-between items-start text-left hover:border-blue-500/20 hover:bg-white/2 transition-all duration-500 min-h-80 overflow-hidden">

                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="w-full flex items-center justify-between mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-500 text-lg transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 shadow-inner">
                                        <IconComponent size={18} />
                                    </div>
                                    <span className="font-mono text-xs font-bold tracking-widest text-gray-700 group-hover:text-blue-500/50 transition-colors duration-300">
                                        / {item.step}
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="font-syne font-black text-lg text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}