"use client"
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiMail, FiSend } from 'react-icons/fi'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function FormContact() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, [])

    const schema = z.object({
        nome: z.string().min(4, "Nome muito curto"),
        documento: z.string().min(11, "CPF/CNPJ Inválido"),
        telefone: z.string().min(10, "Telefone Inválido"),
        email: z.string().email("E-mail Inválido"),
        mensagem: z.string().min(10, "Mensagem muito curta")
    })

    type FormData = z.infer<typeof schema>

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    function onSubmit(data: FormData) {
        console.log(data)
    }

    return (
        <section className='w-full min-h-screen bg-[#050505] relative py-24 px-6 overflow-hidden flex items-center justify-center'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>

                <div data-aos="fade-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">Canal Direto</span>
                    </div>

                    <h1 className="font-syne font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
                        Pronto para o <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">próximo nível?</span>
                    </h1>

                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md">
                        Mande sua proposta ou dúvida. Nossa equipe de engenharia está pronta para transformar seu desafio em solução.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                                <FiMail className="text-blue-400" />
                            </div>
                            <span className="text-gray-300 font-mono text-sm hover:text-white transition-colors">
                                equipe.nextsolvesolution@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="relative bg-black border border-white/10 p-8 md:p-10 rounded-3xl space-y-6"
                    >
                        <h2 className="text-white font-syne font-bold text-xl mb-8 flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            Preencha os campos abaixo
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor='Nome' className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Nome Completo</label>
                                <div className="relative">
                                    <input
                                        id='Nome'
                                        {...register("nome")}
                                        className={`w-full bg-white/3 border ${errors.nome ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3 px-4 text-white text-sm focus:border-blue-500/50 outline-none transition-all`}
                                        placeholder="Seu nome"
                                    />
                                </div>
                                {errors.nome && <span className="text-[10px] text-red-500 font-medium ml-1">{errors.nome.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor='CPF/CNPJ' className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">CPF ou CNPJ</label>
                                <input
                                    id='CPF/CNPJ'
                                    {...register("documento")}
                                    className={`w-full bg-white/3 border ${errors.documento ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3 px-4 text-white text-sm focus:border-blue-500/50 outline-none transition-all`}
                                    placeholder="000.000.000-00"
                                />
                                {errors.documento && <span className="text-[10px] text-red-500 font-medium ml-1">{errors.documento.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor='Tell' className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Telefone</label>
                                <input
                                    id='Tell'
                                    {...register("telefone")}
                                    className={`w-full bg-white/3 border ${errors.telefone ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3 px-4 text-white text-sm focus:border-blue-500/50 outline-none transition-all`}
                                    placeholder="(00) 00000-0000"
                                />
                                {errors.telefone && <span className="text-[10px] text-red-500 font-medium ml-1">{errors.telefone.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor='Email' className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">E-mail</label>
                                <input
                                    id='Email'
                                    {...register("email")}
                                    className={`w-full bg-white/3 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3 px-4 text-white text-sm focus:border-blue-500/50 outline-none transition-all`}
                                    placeholder="exemplo@email.com"
                                />
                                {errors.email && <span className="text-[10px] text-red-500 font-medium ml-1">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor='Mensagem' className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Sua Mensagem</label>
                            <textarea
                                id='Mensagem'
                                {...register("mensagem")}
                                rows={4}
                                className={`w-full bg-white/3 border ${errors.mensagem ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-3 px-4 text-white text-sm focus:border-blue-500/50 outline-none transition-all resize-none`}
                                placeholder="Descreva brevemente seu projeto..."
                            />
                            {errors.mensagem && <span className="text-[10px] text-red-500 font-medium ml-1">{errors.mensagem.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full overflow-hidden rounded-xl bg-white py-4 font-bold text-black transition-all duration-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98]">
                            <div className="absolute inset-0 translate-y-full bg-linear-to-r from-blue-600 to-blue-500 transition-transform duration-500 ease-out group-hover:translate-y-0" />
                            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                <span className="font-syne text-xs uppercase tracking-[0.2em]">
                                    Enviar Mensagem
                                </span>
                                <FiSend className="text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-white" />
                            </div>
                            <div className="absolute inset-0 rounded-xl border border-white/20" />

                            <style jsx>{`
                            @keyframes shimmer {
                            100% {transform: translateX(100%);}}
                            .animate-shimmer {animation: shimmer 1.5s infinite;}`}</style>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}