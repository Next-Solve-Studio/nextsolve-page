"use client"
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiMail } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const schema = z.object({
    nome: z.string().min(4, "Nome muito curto"),
    documento: z.string().min(11, "CPF/CNPJ Inválido"),
    telefone: z.string().min(10, "Telefone Inválido"),
    email: z.string().email("E-mail Inválido"),
    mensagem: z.string().min(10, "Mensagem muito curta")
})

type FormData = z.infer<typeof schema>

export default function FormContact() {

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
            alert('Mensagem enviada com sucesso!')
            reset()
        } catch (error) {
            console.error(error)
            alert('Erro ao enviar mensagem.')
        }
    }

    return (
        <section className='w-full min-h-screen bg-[#050505] relative py-24 px-6 overflow-hidden flex items-center justify-center'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10'>
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400">Canal Direto</span>
                    </div>

                    <h1 className="font-syne font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
                        Pronto para o <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">próximo nível?</span>
                    </h1>

                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md">Mande sua proposta ou dúvida. Nossa equipe está pronta para transformar seu desafio em solução.</p>

                    <div className="flex items-center gap-4">
                        <FiMail className="text-blue-400" />
                        <span className="text-gray-300 font-mono text-sm">equipe.nextsolvesolution@gmail.com</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur opacity-30"></div>

                    <form onSubmit={handleSubmit(onSubmit)} className="relative bg-black border border-white/10 p-8 md:p-10 rounded-3xl space-y-6">
                        <h2 className="text-white font-syne font-bold text-xl mb-8"> Preencha os campos abaixo</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    {...register("nome")}
                                    placeholder="Seu nome"
                                    className="input"
                                />
                                {errors.nome && <span className="error">{errors.nome.message}</span>}
                            </div>

                            <div>
                                <input
                                    {...register("documento")}
                                    placeholder="CPF/CNPJ"
                                    className="input"
                                />
                                {errors.documento && <span className="error">{errors.documento.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    {...register("telefone")}
                                    placeholder="Telefone"
                                    className="input"
                                />
                                {errors.telefone && <span className="error">{errors.telefone.message}</span>}
                            </div>

                            <div>
                                <input
                                    {...register("email")}
                                    placeholder="E-mail"
                                    className="input"
                                />
                                {errors.email && <span className="error">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div>
                            <textarea
                                {...register("mensagem")}
                                placeholder="Sua mensagem..."
                                className="input"
                            />
                            {errors.mensagem && <span className="error">{errors.mensagem.message}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition"
                        >
                            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .input {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 12px;
                    color: white;
                    font-size: 14px;
                    outline: none;
                }
                .error {
                    font-size: 10px;
                    color: #ef4444;
                }
            `}</style>
        </section>
    )
}