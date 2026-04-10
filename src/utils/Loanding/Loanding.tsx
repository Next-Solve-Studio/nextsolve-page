"use client";
import { useState, useEffect } from "react";
import { BsRocketFill } from "react-icons/bs";

export default function Loading() {
    const [isVisible, setIsVisible] = useState(true);
    const [isLaunching, setIsLaunching] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLaunching(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 800);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-9999 transition-opacity duration-500 ${isLaunching ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-px h-px bg-white rounded-full shadow-[0_0_10px_white] opacity-30 animate-pulse" />
                <div className="absolute top-1/2 left-2/3 w-px h-px bg-white rounded-full shadow-[0_0_10px_white] opacity-20" />
            </div>

            <div className="relative flex flex-col items-center gap-8">
                <div className={`relative transition-all duration-700 ease-in-expo ${isLaunching ? "-translate-y-[120vh] scale-110" : "animate-bounce-slow"}`}>

                    <BsRocketFill className="text-blue-500 text-6xl md:text-7xl drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] -rotate-45" />

                    <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-12 bg-linear-to-t from-transparent via-blue-500 to-blue-300 rounded-full blur-sm transition-opacity duration-300 ${isLaunching ? "opacity-100 scale-y-150" : "opacity-0"}`} />

                    {isLaunching && (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500/40 rounded-full blur-2xl animate-pulse" />
                    )}
                </div>

                <div className={`flex flex-col items-center gap-2 transition-all duration-300 ${isLaunching ? "opacity-0 translate-y-4" : "opacity-100"}`}>
                    <p className="text-white font-syne text-xs font-bold tracking-[0.4em] uppercase">Carregando Site</p>
                    <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-blue-500 origin-left animate-loading-bar" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                0%, 100% { transform: translateY(0) rotate(-45deg); }
                50% { transform: translateY(-10px) rotate(-45deg); }}
                @keyframes loading-bar {
                0% { transform: scaleX(0); }
                100% { transform: scaleX(1); }}
        
                .animate-bounce-slow {animation: bounce-slow 2s infinite ease-in-out;}
                .animate-loading-bar {animation: loading-bar 2.5s ease-in-out forwards;}
                .ease-in-expo {transition-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);}`}
            </style>
        </div>
    );
}