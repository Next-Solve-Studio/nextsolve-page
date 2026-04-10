"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { BiSolidMessageRounded } from "react-icons/bi"
import { IoClose } from "react-icons/io5"

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

        if (open) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [open])

    return (
        <div className="fixed bottom-6 right-6 z-50" ref={boxRef}>
            {open && (
                <div className="mb-4 w-72 rounded-2xl bg-darkGray text-white shadow-2xl p-5 border border-gray/20">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg">Contato para Orçamentos</h3>
                        <button type='button' onClick={() => setOpen(false)}>
                            <IoClose size={22} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-3">
                        {contacts.map((contact) => (
                            <Link
                                key={contact.id}
                                href={`https://wa.me/${contact.phone}`}
                                target="_blank"
                                className="bg-black hover:bg-green transition p-3 rounded-lg flex flex-col"
                            >
                                <span>{contact.name}</span>
                                <span className="text-sm text-gray">{contact.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <button type='button' onClick={() => setOpen(!open)}>
                <BiSolidMessageRounded size={40} className='text-blue' />
            </button>
        </div>
    )
}