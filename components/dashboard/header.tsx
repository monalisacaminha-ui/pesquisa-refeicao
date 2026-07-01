import Image from "next/image"

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-6 md:px-10 text-primary-foreground mb-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/images/super-lagoa.png"
            alt="Super Lagoa"
            width={100}
            height={50}
            className="h-12 md:h-16 w-auto object-contain"
          />
          <Image
            src="/images/lag-atacadao.png"
            alt="Lag Atacadão"
            width={120}
            height={50}
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>
        <div className="flex-1 md:text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-balance">
            Painel Executivo - Ranking Gerentes 2026
          </h1>
          <p className="mt-2 opacity-90">
            Monitoramento mensal de performance operacional e financeira das lojas
          </p>
        </div>
      </div>
    </header>
  )
}
