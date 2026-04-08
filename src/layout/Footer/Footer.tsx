"use client";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa6";

type LinkItem = {
  id: number;
  label: string;
  href: string;
};

type SocialItem = LinkItem & {
  icon: React.ElementType;
};

export default function Footer() {
  const institutional: LinkItem[] = [
    { id: 1, label: "Corporativo", href: "/" },
    { id: 2, label: "Política de Privacidade", href: "/" },
    { id: 3, label: "Agente de IA", href: "/" },
    { id: 4, label: "Comunidade", href: "/" },
  ];

  const contact: LinkItem[] = [
    { id: 1, label: "Trabalhe Conosco", href: "/" },
    { id: 2, label: "Suporte", href: "/" },
    { id: 3, label: "Fale Conosco", href: "/" },
  ];

  const socialNetwork: SocialItem[] = [
    { id: 1, label: "Instagram", href: "/", icon: FaInstagram },
    { id: 2, label: "YouTube", href: "/", icon: FaYoutube },
    { id: 3, label: "LinkedIn", href: "/", icon: FaLinkedinIn },
    { id: 4, label: "Facebook", href: "/", icon: FaFacebookF },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-10 lg:gap-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black tracking-tight text-white">Next<span className="text-blue">Solve</span></h1>
            <p className="text-sm text-gray max-w-55 leading-relaxed">Soluções inteligentes para o crescimento do seu negócio.</p>
          </div>

          <FooterColumn title="Institucional">
            {institutional.map((item) => (
              <FooterLink key={item.id} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Redes Sociais">
            {socialNetwork.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-gray hover:text-blue-400 transition-colors"
                >
                  <Icon size={13} />
                  {item.label}
                </Link>
              );
            })}
          </FooterColumn>

          <FooterColumn title="Contato">
            {contact.map((item) => (
              <FooterLink key={item.id} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-white/5">
          <p className="text-[11.5px] text-white/25">© 2026 NextSolve Studio Vision. Todos os direitos reservados</p>
          <p className="text-[11.5px] text-white/15">CNPJ: 62.004.128/0001-80</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 min-w-35">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-blue">
        {title}
      </h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-sm text-gray hover:text-blue-400 transition-colors">
      {children}
    </Link>
  );
}
