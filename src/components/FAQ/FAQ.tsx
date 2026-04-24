"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlus, FiMinus, FiHelpCircle, FiTerminal } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function FAQSession() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const faqs = [
        {
            id: 1,
            question: "Quanto tempo leva para desenvolver um software ou site?",
            answer: "O prazo varia conforme a complexidade. Uma Landing Page estratégica pode ser entregue em 7 a 10 dias, enquanto sistemas complexos (ERP ou SaaS) levam de 4 a 12 semanas. Priorizamos a qualidade e a escalabilidade do código."
        },
        {
            id: 2,
            question: "A NextSolve oferece manutenção após a entrega?",
            answer: "Sim. Operamos com protocolos de suporte pós-lançamento, garantindo que sua infraestrutura permaneça atualizada, segura e performática diante das constantes atualizações de navegadores e sistemas."
        },
        {
            id: 3,
            question: "Como funciona a integração de IA nos processos?",
            answer: "Analisamos seus gargalos operacionais e desenvolvemos agentes inteligentes customizados que podem atuar desde o atendimento ao cliente 24/7 até a automação de relatórios financeiros complexos."
        },
        {
            id: 4,
            question: "Os sites e apps são otimizados para SEO e Mobile?",
            answer: "Absolutamente. Todo código NextSolve é 'Mobile-First' e segue as melhores práticas de Core Web Vitals, garantindo velocidade máxima e posicionamento orgânico nos motores de busca."
        },
        {
            id: 5,
            question: "Como iniciar um projeto com o Studio?",
            answer: "O processo inicia com uma reunião de diagnóstico. Após entendermos seus desafios, desenhamos o escopo técnico e iniciamos o desenvolvimento com transparência total via relatórios de progresso."
        }
    ];

    return (
        <section className="relative w-full py-24 bg-[#050505] px-6 overflow-hidden">

            <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                        <FiHelpCircle className="text-blue-500 text-xs" />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400 font-syne">
                            Central de Dúvidas
                        </span>
                    </div>
                    <h2 className="font-syne font-black text-4xl md:text-5xl text-white mb-6">
                        FAQ<span className="text-blue-600">.</span>
                    </h2>
                    <p className="text-gray-500 font-light text-base md:text-lg max-w-xl mx-auto">
                        Respostas diretas sobre como transformamos sua visão em código de alta performance.
                    </p>
                </div>

                <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className={`border rounded-2xl transition-all duration-500 ${openIndex === index ? "border-blue-500/40 bg-white/4" : "border-white/5 bg-white/1 hover:border-white/20"}`}>
                            <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                                <div className="flex items-center gap-4">
                                    <FiTerminal
                                        className={`transition-colors ${openIndex === index ? "text-blue-500" : "text-gray-600"
                                            }`}
                                    />
                                    <span className={`font-syne font-bold text-sm md:text-base uppercase tracking-tight transition-colors ${openIndex === index ? "text-white" : "text-gray-400"}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`transition-transform duration-500 ${openIndex === index ? "rotate-180 text-blue-500" : "text-gray-600"}`}>
                                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="px-6 pb-6 pt-0 flex gap-4">
                                    <div className="w-0.5 bg-blue-500/30 ml-1.75" />
                                    <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center" data-aos="zoom-in">
                    <p className="text-gray-600 text-xs font-mono mb-6 uppercase tracking-widest">Ainda tem perguntas?_</p>
                    <Link href="/Contact" className="text-blue-500 font-syne font-black text-sm uppercase tracking-[0.2em] hover:text-white transition-colors">
                        Consulte nossa equipe técnica →
                    </Link>
                </div>
            </div>
        </section>
    );
}