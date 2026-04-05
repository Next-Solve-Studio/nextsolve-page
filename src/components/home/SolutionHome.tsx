import Image from "next/image";
import Link from "next/link";

const dtcards = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "Crie sua loja virtual e comece agora mesmo a vender seus produtos online, com segurança e praticidade.",
  },
  {
    id: 2,
    title: "Landing Page",
    description:
      "Crie agora sua landing page e apresente sua empresa ao mundo, conquistando mais visibilidade e credibilidade online.",
  },
  {
    id: 3,
    title: "Automação com IA",
    description:
      "Cansado(a) de responder clientes o tempo todo ou de lidar com tarefas repetitivas? Nós automatizamos esses processos para você.",
  },
  {
    id: 4,
    title: "Aplicativos Android/iOS",
    description:
      "Desenvolvemos aplicativos com design moderno, dinâmico e funcional, feitos sob medida para impulsionar sua empresa.",
  },
  {
    id: 5,
    title: "Sistemas",
    description:
      "Sistemas completos para gerenciar, automatizar e escalar as operações do seu negócio com total eficiência.",
  },
];

export default function SolutionHome() {
  return (
    <section className="w-full min-h-screen flex bg-black px-12 py-20">
      <div
        className="max-w-6xl mx-auto flex  gap-5 flex-wrap-reverse items-center justify-center
      "
      >
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl">
            <p className="text-blue text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 font-syne text-center md:text-left">
              Nossas soluções
            </p>

            <h2 className="text-white font-syne font-extrabold text-5xl leading-tight mb-4 text-center md:text-left">
              O que podemos
              <br />
              fazer por <span className="text-blue">você</span>
            </h2>

            <p className="text-gray text-sm leading-relaxed mb-10 max-w-md text-center md:text-left">
              Tecnologia sob medida para impulsionar seu negócio. Escolha a
              solução ideal e dê o próximo passo.
            </p>

            <ul className="flex flex-col gap-2 items-center md:items-start">
              {dtcards.map((item, i) => (
                <div key={item.id} className="w-full max-w-md">
                  <li className="w-200 group rounded-xl border border-transparent px-5 py-4.5 hover:bg-blue/5 hover:border-blue/20 transition-all duration-200 cursor-pointer">
                    <Link href="" className="flex items-center gap-3">
                      <span className="font-syne text-[15px] font-bold text-white group-hover:text-blue transition-colors">
                        {item.title}
                      </span>
                    </Link>

                    <p className="text-gray text-[13.5px] leading-relaxed ml-7.5 mt-2">
                      {item.description}
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="shrink-0 w-340px">
          <div className="inline-flex items-center gap-2 bg-blue/8 border border-blue/20 rounded-full px-3 py-1 mb-7">
            <span className="w-1.25 h-1.25 rounded-full bg-blue animate-pulse" />
            <span className="text-blue font-syne text-[11px] font-semibold tracking-wide">
              disponível agora
            </span>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-blue/12 bg-[#141414]">
            <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-blue/40" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-blue/40" />
            <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-blue/40" />
            <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-blue/40" />

            <Image
              width={490}
              height={600}
              alt="solution"
              src="/solutionserv.png"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-blue/7 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
