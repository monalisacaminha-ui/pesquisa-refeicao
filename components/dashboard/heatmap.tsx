"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HeatmapRow {
  gerente: string
  meses: { valor: number; nivel: 1 | 2 | 3 | 4 | 5 }[]
  acumulado: "TOP" | "RISCO" | "CRÍTICO"
}

const heatmapData: HeatmapRow[] = [
  {
    gerente: "Natanael Oliveira",
    meses: [
      { valor: 96, nivel: 3 },
      { valor: 86, nivel: 4 },
      { valor: 111, nivel: 1 },
      { valor: 102, nivel: 1 },
      { valor: 99, nivel: 3 },
    ],
    acumulado: "TOP",
  },
  {
    gerente: "Alfredo Neto",
    meses: [
      { valor: 97, nivel: 3 },
      { valor: 97, nivel: 3 },
      { valor: 104, nivel: 1 },
      { valor: 102, nivel: 1 },
      { valor: 99, nivel: 3 },
    ],
    acumulado: "TOP",
  },
  {
    gerente: "Antonio Pereira",
    meses: [
      { valor: 98, nivel: 2 },
      { valor: 99, nivel: 2 },
      { valor: 107, nivel: 1 },
      { valor: 101, nivel: 1 },
      { valor: 100, nivel: 2 },
    ],
    acumulado: "TOP",
  },
  {
    gerente: "Josivando Lima",
    meses: [
      { valor: 95, nivel: 3 },
      { valor: 98, nivel: 2 },
      { valor: 102, nivel: 1 },
      { valor: 100, nivel: 2 },
      { valor: 97, nivel: 3 },
    ],
    acumulado: "TOP",
  },
  {
    gerente: "Livia Oliveira",
    meses: [
      { valor: 96, nivel: 3 },
      { valor: 97, nivel: 3 },
      { valor: 101, nivel: 1 },
      { valor: 99, nivel: 2 },
      { valor: 98, nivel: 2 },
    ],
    acumulado: "TOP",
  },
  {
    gerente: "Alex Pinheiro",
    meses: [
      { valor: 94, nivel: 3 },
      { valor: 96, nivel: 3 },
      { valor: 100, nivel: 2 },
      { valor: 98, nivel: 2 },
      { valor: 97, nivel: 3 },
    ],
    acumulado: "TOP",
  },
  {
    gerente: "Gabriel Dos Santos",
    meses: [
      { valor: 93, nivel: 3 },
      { valor: 95, nivel: 3 },
      { valor: 99, nivel: 2 },
      { valor: 97, nivel: 3 },
      { valor: 96, nivel: 3 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Raimundo Cleber",
    meses: [
      { valor: 92, nivel: 3 },
      { valor: 94, nivel: 3 },
      { valor: 98, nivel: 2 },
      { valor: 96, nivel: 3 },
      { valor: 95, nivel: 3 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Hilda Fernandes",
    meses: [
      { valor: 91, nivel: 3 },
      { valor: 93, nivel: 3 },
      { valor: 97, nivel: 3 },
      { valor: 95, nivel: 3 },
      { valor: 94, nivel: 3 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Marcelo De Carvalho",
    meses: [
      { valor: 90, nivel: 4 },
      { valor: 92, nivel: 3 },
      { valor: 96, nivel: 3 },
      { valor: 94, nivel: 3 },
      { valor: 93, nivel: 3 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Welves Izequiel",
    meses: [
      { valor: 89, nivel: 4 },
      { valor: 91, nivel: 3 },
      { valor: 95, nivel: 3 },
      { valor: 93, nivel: 3 },
      { valor: 92, nivel: 3 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Glicerio Rebolças",
    meses: [
      { valor: 88, nivel: 4 },
      { valor: 90, nivel: 4 },
      { valor: 94, nivel: 3 },
      { valor: 92, nivel: 3 },
      { valor: 91, nivel: 3 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Gleidson Sousa",
    meses: [
      { valor: 86, nivel: 4 },
      { valor: 88, nivel: 4 },
      { valor: 91, nivel: 3 },
      { valor: 90, nivel: 4 },
      { valor: 89, nivel: 4 },
    ],
    acumulado: "CRÍTICO",
  },
  {
    gerente: "Sidalia Fernandes",
    meses: [
      { valor: 91, nivel: 3 },
      { valor: 87, nivel: 5 },
      { valor: 91, nivel: 3 },
      { valor: 88, nivel: 5 },
      { valor: 92, nivel: 4 },
    ],
    acumulado: "RISCO",
  },
  {
    gerente: "Andrea Dutra / Janaina Pinto",
    meses: [
      { valor: 87, nivel: 4 },
      { valor: 89, nivel: 4 },
      { valor: 93, nivel: 3 },
      { valor: 91, nivel: 3 },
      { valor: 90, nivel: 4 },
    ],
    acumulado: "CRÍTICO",
  },
  {
    gerente: "Atevaldo Rodrigues",
    meses: [
      { valor: 89, nivel: 5 },
      { valor: 84, nivel: 5 },
      { valor: 89, nivel: 5 },
      { valor: 87, nivel: 5 },
      { valor: 84, nivel: 5 },
    ],
    acumulado: "CRÍTICO",
  },
]

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai"]

function HeatCell({
  valor,
  nivel,
}: {
  valor: number | string
  nivel: 1 | 2 | 3 | 4 | 5
}) {
  const bgClasses = {
    1: "bg-chart-1",
    2: "bg-chart-2",
    3: "bg-chart-3",
    4: "bg-chart-4",
    5: "bg-chart-5",
  }

  return (
    <div
      className={`p-3 rounded-xl text-center font-bold text-white ${bgClasses[nivel]}`}
    >
      {typeof valor === "number" ? `${valor}%` : valor}
    </div>
  )
}

function AccumulatedCell({ status }: { status: HeatmapRow["acumulado"] }) {
  const classes = {
    TOP: "bg-chart-1",
    RISCO: "bg-chart-4",
    CRÍTICO: "bg-chart-5",
  }

  return (
    <div
      className={`p-3 rounded-xl text-center font-bold text-white ${classes[status]}`}
    >
      {status}
    </div>
  )
}

export function Heatmap() {
  return (
    <Card className="rounded-3xl shadow-md mb-6">
      <CardHeader>
        <CardTitle className="text-primary flex items-center gap-2">
          <span>🔥</span> Heatmap Mensal de Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <div className="grid grid-cols-[minmax(150px,200px)_repeat(5,1fr)_1fr] gap-2 min-w-[600px]">
          {/* Header */}
          <div className="font-bold bg-primary text-primary-foreground p-3 rounded-xl text-center">
            Gerente
          </div>
          {meses.map((mes) => (
            <div
              key={mes}
              className="font-bold bg-primary text-primary-foreground p-3 rounded-xl text-center"
            >
              {mes}
            </div>
          ))}
          <div className="font-bold bg-primary text-primary-foreground p-3 rounded-xl text-center">
            Acumulado
          </div>

          {/* Data rows */}
          {heatmapData.map((row) => (
            <>
              <div
                key={`name-${row.gerente}`}
                className="p-3 font-semibold flex items-center"
              >
                {row.gerente}
              </div>
              {row.meses.map((mes, idx) => (
                <HeatCell key={`${row.gerente}-${idx}`} valor={mes.valor} nivel={mes.nivel} />
              ))}
              <AccumulatedCell key={`acc-${row.gerente}`} status={row.acumulado} />
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
