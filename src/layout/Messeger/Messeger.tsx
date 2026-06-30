"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { FiMessageSquare, FiX, FiCornerDownLeft, FiCpu } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

type Option = {
    text: string;
    nextNodeId: string;
};

type ChatNode = {
    id: string;
    text: string;
    options: Option[];
};

type Message = {
    id: string;
    sender: "bot" | "user";
    text: string;
};

const createMessage = (sender: Message["sender"], text: string): Message => ({
    id: crypto.randomUUID(),
    sender,
    text,
});

const WHATSAPP_NUMBER = "5585997276499";

const chatScript: Record<string, ChatNode> = {
    start: {
        id: "start",
        text: "Olá! Seja muito bem-vindo ao ecossistema digital da NextSolve. Sou o assistente virtual Core-AI. Como podemos escalar o seu negócio hoje?",
        options: [
            { text: "🚀 Iniciar um Projeto / Sistema Web", nextNodeId: "novo_projeto" },
            { text: "💼 Conhecer os Nossos Serviços", nextNodeId: "servicos" },
            { text: "⚙️ Suporte Técnico / Contratos Ativos", nextNodeId: "suporte" },
        ],
    },

    novo_projeto: {
        id: "novo_projeto",
        text: "Excelente escolha! Criamos soluções sob medida (Landing Pages Premium, e-Commerces Robustos e Plataformas SaaS). Que tipo de arquitetura você busca?",
        options: [
            { text: "SaaS / Sistema de Gestão Interna", nextNodeId: "whatsapp_saas" },
            { text: "E-commerce de Alta Performance", nextNodeId: "whatsapp_ecommerce" },
            { text: "Site Institucional / Landing Page", nextNodeId: "whatsapp_landing" },
            { text: "⬅️ Voltar ao painel inicial", nextNodeId: "start" },
        ],
    },

    servicos: {
        id: "servicos",
        text: "Na NextSolve desenvolvemos código limpo utilizando Next.js, Tailwind CSS e TypeScript para garantir máxima conversão, SEO impecável e carregamento ultra-rápido. Deseja solicitar uma análise de viabilidade técnica?",
        options: [
            { text: "Falar com Arquiteto de Software", nextNodeId: "whatsapp_analise" },
            { text: "⬅️ Voltar", nextNodeId: "start" },
        ],
    },

    suporte: {
        id: "suporte",
        text: "Área de monitoramento técnico de infraestrutura ativa. Para aberturas de chamados urgentes ou manutenções modulares, estabelecemos conexão direta criptografada via WhatsApp.",
        options: [
            { text: "Acionar Suporte no WhatsApp", nextNodeId: "whatsapp_suporte" },
            { text: "⬅️ Voltar", nextNodeId: "start" },
        ],
    },

    final_whatsapp: {
        id: "final_whatsapp",
        text: "Entendido. Estabelecendo uma ponte de comunicação com o nosso Gestor de Tecnologia no WhatsApp. Caso a nova janela não abra de forma automatizada, por favor utilize o botão abaixo.",
        options: [
            { text: "🔄 Reiniciar Sistema de Chat", nextNodeId: "start" },
        ],
    },
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        createMessage("bot", chatScript.start.text),
    ]);
    const [currentNode, setCurrentNode] = useState<ChatNode>(chatScript.start);
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [isOpen, scrollToBottom]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleOptionClick = (option: Option) => {
        if (isTyping) return;

        setMessages((prev) => [...prev, createMessage("user", option.text)]);
        setIsTyping(true);

        timeoutRef.current = setTimeout(() => {
            let nextNodeKey = option.nextNodeId;
            let shouldOpenWhatsapp = false;
            let whatsappMessage = "";

            if (nextNodeKey.startsWith("whatsapp_")) {
                shouldOpenWhatsapp = true;

                if (nextNodeKey === "whatsapp_saas")
                    whatsappMessage = "Olá! Gostaria de conversar com o gestor sobre o desenvolvimento de um Sistema SaaS/Plataforma corporativa sob medida.";
                if (nextNodeKey === "whatsapp_ecommerce")
                    whatsappMessage = "Olá! Gostaria de um orçamento para a criação de um e-Commerce de alta performance com padrão NextSolve.";
                if (nextNodeKey === "whatsapp_landing")
                    whatsappMessage = "Olá! Tenho interesse no desenvolvimento de um Site Institucional/Landing Page Premium de alta conversão.";
                if (nextNodeKey === "whatsapp_analise")
                    whatsappMessage = "Olá! Estava verificando a sessão de serviços da NextSolve e gostaria de solicitar uma análise técnica para o meu ecossistema.";
                if (nextNodeKey === "whatsapp_suporte")
                    whatsappMessage = "Olá! Preciso de suporte para um produto ou sistema contratado junto à NextSolve.";

                nextNodeKey = "final_whatsapp";
            }

            const nextNode = chatScript[nextNodeKey] ?? chatScript.start;
            setCurrentNode(nextNode);
            setMessages((prev) => [...prev, createMessage("bot", nextNode.text)]);
            setIsTyping(false);

            if (shouldOpenWhatsapp) {
                const encodedText = encodeURIComponent(whatsappMessage);
                window.open(
                    `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`,
                    "_blank"
                );
            }
        }, 850);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {!isOpen && (
                <button type="button" onClick={() => setIsOpen(true)} className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <FiMessageSquare size={24} />
                </button>
            )}

            {isOpen && (
                <div className="w-80 sm:w-96 h-125 bg-[#0d0d11]/95 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,05">

                    <div className="p-4 bg-white/2 border-b border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </div>
                            <div className="flex flex-col text-left">
                                <h3 className="text-white font-bold text-xs tracking-wider uppercase font-syne">
                                    Core-AI / Assistente
                                </h3>
                                <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                                    NextSolve Tech
                                </span>
                            </div>
                        </div>

                        <button type="button" onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-1">
                            <FiX size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-[#0a0a0d] to-[#050505]">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[85%] rounded-2xl p-3 text-xs md:text-sm leading-relaxed border ${msg.sender === "user"
                                        ? "bg-blue-600 border-blue-500 text-white font-medium rounded-tr-none shadow-[0_4px_15px_rgba(37,99,235,0.2)]"
                                        : "bg-white/2 text-gray-300 border-white/5 font-light rounded-tl-none"
                                        }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/1 border border-white/5 rounded-2xl p-3 text-xs text-blue-400/70 font-mono tracking-wider animate-pulse flex items-center gap-1.5">
                                    <FiCpu className="animate-spin text-blue-500" />
                                    Sincronizando resposta...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-white/5 bg-[#0a0a0d]">
                        {!isTyping && (
                            <div className="flex flex-col gap-2">
                                {currentNode.options.map((option) => {
                                    const isWhatsAppAction = option.nextNodeId.startsWith("whatsapp_");
                                    return (
                                        <button
                                            type="button"
                                            key={option.text}
                                            onClick={() => handleOptionClick(option)}
                                            className={`w-full flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs text-left font-semibold tracking-wide transition-all duration-300 border ${isWhatsAppAction
                                                ? "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                                                : "bg-white/2 border-white/5 text-gray-400 hover:border-blue-500/50 hover:text-blue-400"
                                                }`}>
                                            {isWhatsAppAction ? (
                                                <FaWhatsapp size={14} className="shrink-0 text-green-400 group-hover:text-white" />
                                            ) : (
                                                <FiCornerDownLeft size={14} className="text-blue-500/50 shrink-0" />
                                            )}
                                            <span className="truncate">{option.text}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}