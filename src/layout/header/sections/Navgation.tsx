import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

export default function Navigation() {
  const navLinks = [
    { id: 1, text: "Quem somos", href: "/About" },
    {
      id: 2,
      text: "Serviços",
      href: "/Service",
      drop: [
        { id: 1, text: "E-commerce", href: "/Service" },
        { id: 2, text: "Landing Page - Empresarial", href: "/Service" },
        { id: 3, text: "Automação com IA", href: "/Service" },
        { id: 4, text: "Aplicativos - Android/IOs", href: "/Service" },
        { id: 5, text: "Sistemas Empresariais", href: "/Service" },
      ],
      icon: SlArrowDown,
    },
    { id: 3, text: "Projetos", href: "/Projects" },
    { id: 4, text: "Blog", href: "/Blog" },
  ];

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navLinks.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.id} className="relative group">
              <Link
                href={item.href}
                className="
                  relative flex items-center gap-1.5
                  text-sm font-medium tracking-wide text-white/90
                  transition-colors duration-300 hover:text-white
                  after:absolute after:bottom-0 after:left-0
                  after:h-[1.5px] after:w-0 after:rounded-full
                  after:bg-linear-to-r after:from-blue-500 after:to-cyan-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.text}
                {Icon && (
                  <Icon
                    size={10}
                    className="mt-1px transition-transform duration-300 group-hover:rotate-180 text-blue-400/70"
                  />
                )}
              </Link>

              {item.drop && (
                <ul
                  className="
                    absolute left-0 top-full mt-3
                    opacity-0 invisible translate-y-1
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-250 ease-out
                    min-w-56 rounded-lg p-1.5
                    border border-white/10
                    bg-black backdrop-blur-md
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                  "
                >
                  {item.drop.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        className="
                          group/sub flex items-center gap-2
                          rounded-md px-3 py-2
                          text-sm text-white/75
                          transition-all duration-200
                          hover:bg-blue-500/10 hover:text-white
                        "
                      >
                        {/* Bolinha indicadora */}
                        <span className="h-1 w-1 rounded-full bg-blue-500/40 transition-all duration-200 group-hover/sub:bg-blue-400 group-hover/sub:scale-125" />
                        {subItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
