"use client"
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiMail, FiUser, FiFileText, FiPhone, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const schema = z.object({
    nome: z.string().min(4, "Nome muito curto"),
    documento: z.string().min(11, "CPF/CNPJ Inválido"),
    telefone: z.string().min(10, "Telefone Inválido"),
    email: z.string().email("E-mail Inválido"),
    mensagem: z.string().min(10, "Mensagem muito curta")
})

type FormData = z.infer<typeof schema>

export default function FormContact() {
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    async function onSubmit(data: FormData) {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        if (!serviceId || !templateId || !publicKey) {
            throw new Error("Variáveis de ambiente do EmailJS não definidas!!")
        }

        const templateParams = {
            nome: data.nome,
            documento: data.documento,
            telefone: data.telefone,
            email: data.email,
            mensagem: data.mensagem,
            time: new Date().toLocaleString('pt-BR')
        }

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey)
            setIsSuccess(true)
            setTimeout(() => {
                setIsSuccess(false)
                reset()
            }, 3000)
        } catch (error) {
            console.error(error)
            alert('Erro ao enviar mensagem.')
        }
    }

    const inputFields = [
        {
            name: 'nome',
            placeholder: 'Seu nome completo',
            icon: <FiUser />,
            type: 'text'
        },
        {
            name: 'documento',
            placeholder: 'CPF ou CNPJ',
            icon: <FiFileText />,
            type: 'text'
        },
        {
            name: 'telefone',
            placeholder: '(00) 00000-0000',
            icon: <FiPhone />,
            type: 'tel'
        },
        {
            name: 'email',
            placeholder: 'seu@email.com',
            icon: <FiMail />,
            type: 'email'
        },
    ]

    return (
        <section className='w-full min-h-screen bg-[#050505] relative py-24 px-4 overflow-hidden flex items-center justify-center'>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />

                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10'>
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 bg-blue-500/5 border border-blue-500/10 rounded-full px-4 py-2">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </div>
                        <span className="font-syne text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">
                            Canal Direto
                        </span>
                    </div>

                    <h1 className="font-syne font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1]">
                        Pronto para o
                        <div className="relative block mt-2">
                            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-size-[200%_auto] animate-gradient">
                                próximo nível?
                            </span>
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full" />
                        </div>
                    </h1>

                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                        Mande sua proposta ou dúvida. Nossa equipe está pronta para transformar seu desafio em solução.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="group flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/30 transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                <FiMail className="text-sm" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500">E-mail</p>
                                <p className="text-xs text-gray-300 font-mono group-hover:text-blue-400 transition-colors">
                                    equipe.nextsolvesolution@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/30 transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                <FiSend className="text-sm" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Resposta</p>
                                <p className="text-xs text-gray-300 group-hover:text-blue-400 transition-colors">
                                    Em até 24h úteis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-30" />

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="relative bg-linear-to-br from-black to-[#0a0a0a] border border-white/10 p-6 md:p-8 lg:p-10 rounded-3xl space-y-6 shadow-2xl transition-all duration-300 hover:border-white/20">

                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                            <div>
                                <h2 className="text-white font-syne font-bold text-xl">
                                    Fale Conosco
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    Preencha os campos abaixo
                                </p>
                            </div>
                            {isSuccess && (
                                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20 animate-fade-in">
                                    <FiCheckCircle className="text-sm" />
                                    <span className="text-xs font-medium">Enviado!</span>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {inputFields.map((field) => (
                                <div key={field.name} className="relative group">
                                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === field.name ? 'text-blue-400' : 'text-gray-600'
                                        }`}>
                                        {field.icon}
                                    </div>
                                    <input
                                        {...register(field.name as keyof FormData)}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        onFocus={() => setFocusedField(field.name)}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full bg-white/5 border rounded-xl py-3.5 pl-10 pr-4 text-white text-sm placeholder:text-gray-600 outline-none transition-all duration-300 ${errors[field.name as keyof FormData]
                                            ? 'border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                                            : 'border-white/10 focus:border-blue-500/50 focus:shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                                            } group-hover:border-white/20`}
                                    />
                                    {errors[field.name as keyof FormData] && (
                                        <div className="flex items-center gap-1 mt-1.5 text-red-400 text-[10px] font-medium animate-slide-down">
                                            <FiAlertCircle className="text-[10px]" />
                                            <span>{errors[field.name as keyof FormData]?.message}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="relative group">
                            <div className={`absolute left-3 top-4 transition-colors duration-300 ${focusedField === 'mensagem' ? 'text-blue-400' : 'text-gray-600'
                                }`}>
                                <FiMessageSquare />
                            </div>
                            <textarea
                                {...register("mensagem")}
                                placeholder="Sua mensagem..."
                                rows={4}
                                onFocus={() => setFocusedField('mensagem')}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full bg-white/5 border rounded-xl py-3.5 pl-10 pr-4 text-white text-sm placeholder:text-gray-600 outline-none transition-all duration-300 resize-none ${errors.mensagem
                                    ? 'border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                                    : 'border-white/10 focus:border-blue-500/50 focus:shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                                    } group-hover:border-white/20`}
                            />
                            {errors.mensagem && (
                                <div className="flex items-center gap-1 mt-1.5 text-red-400 text-[10px] font-medium animate-slide-down">
                                    <FiAlertCircle className="text-[10px]" />
                                    <span>{errors.mensagem.message}</span>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full overflow-hidden bg-linear-to-r from-blue-600 to-blue-500 py-4 rounded-xl font-syne font-bold text-sm tracking-wider text-white uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] disabled:opacity-70 disabled:cursor-not-allowed">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensagem
                                        <FiSend className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </>
                                )}
                            </span>
                            <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <p className="text-center text-[10px] text-gray-600 font-medium tracking-wider uppercase">
                            * Todos os dados são protegidos e seguros
                        </p>
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes slide-down {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                .animate-slide-down {
                    animation: slide-down 0.2s ease-out;
                }
                
                .animate-gradient {
                    animation: gradient 4s ease infinite;
                    background-size: 200% 200%;
                }
            `}</style>
        </section>
    )
}