import LogoFooter from "./LogoFooter";
import NavFooter from "./NavFooter";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden flex items-center ">

      <div className="h-px bg-linear-to-r from-transparent via-blue/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-30 pb-8 border-b border-white/[0.07]">
          <LogoFooter />
          <NavFooter />
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray">
            © 2026 NextSolve Studio Vision. Todos os direitos reservados
          </p>
          <p className="text-xs text-gray/50">
            CNPJ: 62.004.128/0001-80
          </p>
        </div>

      </div>
    </footer>
  );
}