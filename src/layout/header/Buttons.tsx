import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Buttons() {
  const btnLinks = [
    { id: 1, text: "Contato", href: "/contact", primary: true },
    { id: 2, text: "English", href: "/", icon: AiOutlineGlobal },
  ];

  return (
    <section>
      <ul className="flex items-center gap-3">
        {btnLinks.map((item) => {
          const Icon = item.icon;
          if (Icon) {
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="
                    group flex items-center gap-1.5
                    rounded-full px-3 py-1.5
                    text-sm font-medium text-white/70
                    border border-white/10
                    transition-all duration-300
                    hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10
                  "
                >
                  <Icon
                    size={14}
                    className="text-blue-400/60 transition-all duration-300 group-hover:text-blue-400 group-hover:rotate-12"
                  />
                  {item.text}
                </Link>
              </li>
            );
          }
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="
                  relative inline-flex items-center overflow-hidden
                  rounded-full px-5 py-1.5
                  text-sm font-semibold tracking-wide text-white
                  border border-blue-500/60
                  bg-blue-500/10
                  transition-all duration-300
                  hover:bg-blue-500/20 hover:border-blue-400
                  hover:shadow-[0_0_16px_rgba(59,130,246,0.35)]
                  group
                "
              >
                <span
                  className="
                    pointer-events-none absolute inset-0 -translate-x-full
                    bg-linear-to-r from-transparent via-white/10 to-transparent
                    transition-transform duration-500
                    group-hover:translate-x-full
                  "
                />
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
