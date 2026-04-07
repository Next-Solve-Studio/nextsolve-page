export default function LogoFooter() {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="relative">
        <div className="absolute -inset-4 bg-blue/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <h1 className="text-5xl  font-black tracking-tight relative inline-block">
          <span className=" bg-linear-to-r from-white via-blue to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            NextSolve
          </span>
        </h1>
      </div>

      <p className="text-sm text-gray leading-relaxed max-w-xs">
        Soluções inteligentes para o crescimento do seu negócio.
      </p>
    </div>
  );
}
