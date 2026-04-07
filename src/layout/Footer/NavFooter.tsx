import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function NavFooter() {
  const institutional = [
    { id: 1, label: "Corporativo", href: "/" },
    { id: 2, label: "Politica de Privacidade", href: "/" },
    { id: 3, label: "Agente de IA", href: "/" },
    { id: 4, label: "Comunidade", href: "/" },
  ];

  const socialnetwork = [
    { id: 1, label: "Instagram", href: "/", icon: FaInstagram },
    { id: 2, label: "Youtube", href: "/", icon: FaYoutube },
    { id: 3, label: "LinkedIn", href: "/", icon: FaLinkedinIn },
    { id: 4, label: "Facebook", href: "/", icon: FaFacebookF },
  ];

  const contacto = [
    { id: 1, label: "Trabalhe Conosco", href: "/" },
    { id: 2, label: "Suporte", href: "/" },
    { id: 3, label: "Fale Conosco", href: "/" },
  ];

  return (
    <div className="flex flex-wrap items-start justify-center gap-12 lg:gap-16 px-6 py-8 flex-wrap">
 
      <div className="flex flex-col gap-3 min-w-[140px]">
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue relative inline-block pb-2">
          Institucional
          <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue rounded-full"></span>
        </h3>
        <nav className="flex flex-col gap-2.5">
          {institutional.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm text-gray hover:text-blue transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
            >
              <span className="w-0 group-hover:w-2 h-0.5 bg-blue rounded-full transition-all duration-300"></span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-3 min-w-[140px] ">
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue relative inline-block pb-2">
          Redes Sociais
          <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue rounded-full"></span>
        </h3>
        <nav className="flex flex-col gap-2.5">
          {socialnetwork.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center gap-3 text-sm text-gray hover:text-blue transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue/10 transition-all duration-300">
                  <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-3 min-w-[140px]">
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue relative inline-block pb-2">
          Contato
          <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue rounded-full"></span>
        </h3>
        <nav className="flex flex-col gap-2.5">
          {contacto.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm text-gray hover:text-blue transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
            >
              <span className="w-0 group-hover:w-2 h-0.5 bg-blue rounded-full transition-all duration-300"></span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
