import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CallCTA() {
    return (
        <section className="relative w-full py-20 bg-[#050505] px-6 overflow-hidden">

            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-100 h-37.5 bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-6xl mx-auto bg-white/1 border border-white/5 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">

                <h2 className="font-syne font-black text-3xl sm:text-4xl text-white mb-4 tracking-tight">
                    Pronto para transformar sua <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
                        presença digital?
                    </span>
                </h2>

                <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
                    Construa um ecossistema de alta performance, estruturado sob medida para encantar seus clientes e maximizar suas conversões.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-syne text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                        <span>Solicitar Orçamento</span>
                        <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}