"use client"
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { BiSolidMessageRounded } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { FaWhatsapp } from "react-icons/fa"

type Contact = {
    id: number;
    name: string;
    phone: string;
    label: string;
}

export default function Messenger() {
    const [open, setOpen] = useState(false)
    const boxRef = useRef<HTMLDivElement | null>(null);

    const contacts: Contact[] = [
        { id: 1, name: "Wendell", phone: "5585997276499", label: "85 99727-6499" },
        { id: 2, name: "Guilherme", phone: "5585997407364", label: "85 99740-7364" },
        { id: 3, name: "Davi", phone: "5585988651542", label: "85 98865-1542" }
    ]

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [open])

    return (
        <div className="fixed bottom-6 right-6 z-9996 flex flex-col items-end" ref={boxRef}>
            {open && (
                <div className="mb-4 w-72 rounded-3xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-300 origin-bottom-right">
                    <div className="bg-blue-600 p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-white">
                            <FaWhatsapp size={20} />
                            <span className="font-syne font-bold text-sm tracking-tighter">Orçamentos</span>
                        </div>
                        <button type='button' onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                            <IoClose size={20} />
                        </button>
                    </div>

                    <div className="p-4 flex flex-col gap-2">
                        {contacts.map((contact) => (
                            <Link
                                key={contact.id}
                                href={`https://wa.me/${contact.phone}`}
                                target="_blank"
                                className="group flex items-center justify-between p-3 rounded-2xl bg-white/3 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-sm">{contact.name}</span>
                                    <span className="text-gray-500 text-[11px] font-mono group-hover:text-blue-400/80 transition-colors">{contact.label}</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                    <FaWhatsapp size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="p-3 bg-white/2 text-center">
                        <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">NextSolve Tech Support</p>
                    </div>
                </div>
            )}
            <button
                type='button'
                onClick={() => setOpen(!open)}
                className="relative group">
                <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
                <div className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-500 ${open ? 'bg-white rotate-90' : 'bg-blue-600 hover:scale-110'}`}>
                    {open ? (
                        <IoClose size={30} className="text-black" />
                    ) : (
                        <BiSolidMessageRounded size={30} className="text-white" />
                    )}
                </div>
                {!open && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-[#050505] rounded-full" />
                )}
            </button>
        </div>
    )
}