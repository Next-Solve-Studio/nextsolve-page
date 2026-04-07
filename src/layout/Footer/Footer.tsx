import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const institutional = [
    { id: 1, label: "Corporativo", href: "/" },
    { id: 2, label: "Política de Privacidade", href: "/" },
    { id: 3, label: "Agente de IA", href: "/" },
    { id: 4, label: "Comunidade", href: "/" },
  ];

  const socialNetwork = [
    { id: 1, label: "Instagram", href: "/", icon: FaInstagram },
    { id: 2, label: "YouTube", href: "/", icon: FaYoutube },
    { id: 3, label: "LinkedIn", href: "/", icon: FaLinkedinIn },
    { id: 4, label: "Facebook", href: "/", icon: FaFacebookF },
  ];

  const contact = [
    { id: 1, label: "Trabalhe Conosco", href: "/" },
    { id: 2, label: "Suporte", href: "/" },
    { id: 3, label: "Fale Conosco", href: "/" },
  ];

  return (
    <footer
      className="w-full border-t border-white/[0.06]"
      style={{ background: "#080808" }}
    >
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-10 lg:gap-16 items-start">
          {/* Marca */}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black tracking-tight text-white">
              Next<span style={{ color: "#79C4F2" }}>Solve</span>
            </h1>
            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: "#8C8C8C" }}
            >
              Soluções inteligentes para o crescimento do seu negócio.
            </p>
          </div>

          {/* Institucional */}
          <Column title="Institucional">
            {institutional.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </Column>

          {/* Redes Sociais */}
          <Column title="Redes Sociais">
            {socialNetwork.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-blue-400"
                  style={{ color: "#8C8C8C" }}
                >
                  <Icon style={{ width: 13, height: 13, flexShrink: 0 }} />
                  {item.label}
                </a>
              );
            })}
          </Column>

          {/* Contato */}
          <Column title="Contato">
            {contact.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </Column>
        </div>

        {/* Rodapé */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p style={{ fontSize: "11.5px", color: "rgba(253,253,253,0.25)" }}>
            © 2026 NextSolve Studio Vision. Todos os direitos reservados
          </p>
          <p style={{ fontSize: "11.5px", color: "rgba(253,253,253,0.14)" }}>
            CNPJ: 62.004.128/0001-80
          </p>
        </div>
      </div>
    </footer>
  );
}

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 min-w-[140px]">
      <h3
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#79C4F2" }}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm transition-colors duration-200 hover:text-blue-400"
      style={{ color: "#8C8C8C" }}
    >
      {children}
    </a>
  );
}
