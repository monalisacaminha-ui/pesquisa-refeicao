"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface RankingData {
  rank: number
  gerente: string
  loja: string
  performance: number
  ebitda: number
  metaMedia: number
  crescimento: number
  quebra: number
  status: "Excelente" | "Atenção" | "Crítico" | "Muito Crítico"
}

const rankingData: RankingData[] = [
  {
    rank: 1,
    gerente: "Natanael Oliveira",
    loja: "012-IGU",
    performance: 111.67,
    ebitda: 127.51,
    metaMedia: 103.4,
    crescimento: 23.37,
    quebra: 0.18,
    status: "Excelente",
  },
  {
    rank: 2,
    gerente: "Alfredo Neto",
    loja: "005-SOB",
    performance: 104.36,
    ebitda: 106.11,
    metaMedia: 101.2,
    crescimento: 13.61,
    quebra: 0.22,
    status: "Excelente",
  },
  {
    rank: 3,
    gerente: "Antonio Pereira",
    loja: "015-DRB",
    performance: 107.08,
    ebitda: 112.39,
    metaMedia: 100.9,
    crescimento: 14.31,
    quebra: 0.25,
    status: "Excelente",
  },
  {
    rank: 4,
    gerente: "Josivando Lima",
    loja: "019-CBO",
    performance: 102.45,
    ebitda: 116.63,
    metaMedia: 99.8,
    crescimento: 11.25,
    quebra: 0.28,
    status: "Excelente",
  },
  {
    rank: 5,
    gerente: "Livia Oliveira",
    loja: "010-CID",
    performance: 101.89,
    ebitda: 72.11,
    metaMedia: 99.5,
    crescimento: 9.87,
    quebra: 0.31,
    status: "Atenção",
  },
  {
    rank: 6,
    gerente: "Alex Pinheiro",
    loja: "007-NSH",
    performance: 100.75,
    ebitda: 82.14,
    metaMedia: 99.2,
    crescimento: 8.43,
    quebra: 0.35,
    status: "Atenção",
  },
  {
    rank: 7,
    gerente: "Gabriel Dos Santos",
    loja: "002-CEN",
    performance: 99.32,
    ebitda: 71.07,
    metaMedia: 98.7,
    crescimento: 6.21,
    quebra: 0.42,
    status: "Atenção",
  },
  {
    rank: 8,
    gerente: "Raimundo Cleber",
    loja: "004-BAR",
    performance: 98.56,
    ebitda: 75.73,
    metaMedia: 98.1,
    crescimento: 5.14,
    quebra: 0.48,
    status: "Atenção",
  },
  {
    rank: 9,
    gerente: "Hilda Fernandes",
    loja: "003-JUA",
    performance: 97.89,
    ebitda: 51.74,
    metaMedia: 97.5,
    crescimento: 4.32,
    quebra: 0.52,
    status: "Atenção",
  },
  {
    rank: 10,
    gerente: "Marcelo De Carvalho",
    loja: "016-JAC",
    performance: 96.74,
    ebitda: 48.56,
    metaMedia: 96.8,
    crescimento: 2.15,
    quebra: 0.58,
    status: "Atenção",
  },
  {
    rank: 11,
    gerente: "Welves Izequiel",
    loja: "014-ROD",
    performance: 95.43,
    ebitda: 51.62,
    metaMedia: 95.9,
    crescimento: 0.87,
    quebra: 0.65,
    status: "Atenção",
  },
  {
    rank: 12,
    gerente: "Glicerio Rebolças",
    loja: "017-SDO",
    performance: 94.21,
    ebitda: 58.03,
    metaMedia: 94.8,
    crescimento: -0.54,
    quebra: 0.72,
    status: "Atenção",
  },
  {
    rank: 13,
    gerente: "Gleidson Sousa",
    loja: "001-PAR",
    performance: 91.87,
    ebitda: -162.99,
    metaMedia: 93.2,
    crescimento: -1.89,
    quebra: 0.85,
    status: "Crítico",
  },
  {
    rank: 14,
    gerente: "Sidalia Fernandes",
    loja: "008-MES",
    performance: 87.6,
    ebitda: -72.94,
    metaMedia: 92.0,
    crescimento: -2.53,
    quebra: 0.91,
    status: "Crítico",
  },
  {
    rank: 15,
    gerente: "Andrea Dutra / Janaina Pinto",
    loja: "009-LUC",
    performance: 84.04,
    ebitda: -48.63,
    metaMedia: 89.6,
    crescimento: -4.57,
    quebra: 0.78,
    status: "Crítico",
  },
  {
    rank: 16,
    gerente: "Atevaldo Rodrigues",
    loja: "018-LAG",
    performance: 82.04,
    ebitda: -58.63,
    metaMedia: 88.6,
    crescimento: -8.07,
    quebra: 1.12,
    status: "Muito Crítico",
  },
]

function StatusBadge({ status }: { status: RankingData["status"] }) {
  const badgeClasses = {
    Excelente: "bg-success text-success-foreground",
    Atenção: "bg-warning text-warning-foreground",
    Crítico: "bg-secondary text-secondary-foreground",
    "Muito Crítico": "bg-destructive text-destructive-foreground",
  }

  return (
    <span
      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${badgeClasses[status]}`}
    >
      {status}
    </span>
  )
}

export function RankingTable() {
  return (
    <Card className="rounded-3xl shadow-md mb-6">
      <CardHeader>
        <CardTitle className="text-primary flex items-center gap-2">
          <span>🏆</span> Ranking Geral Anual
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-semibold">
                Rank
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Gerente
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Loja
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                <div className="flex flex-col">
                  <span>Venda %</span>
                  <span className="text-xs font-normal opacity-80">Peso 1,5</span>
                </div>
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                <div className="flex flex-col">
                  <span>EBITDA %</span>
                  <span className="text-xs font-normal opacity-80">Peso 2,0</span>
                </div>
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Meta Média
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Crescimento
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Quebra %
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankingData.map((item) => (
              <TableRow key={item.rank}>
                <TableCell className="font-bold text-lg">{item.rank}</TableCell>
                <TableCell>{item.gerente}</TableCell>
                <TableCell>{item.loja}</TableCell>
                <TableCell
                  className={
                    item.performance >= 100 ? "text-success" : "text-warning"
                  }
                >
                  {item.performance.toFixed(2)}%
                </TableCell>
                <TableCell
                  className={
                    item.ebitda >= 100 ? "text-success" : item.ebitda >= 50 ? "text-warning" : "text-destructive"
                  }
                >
                  {item.ebitda.toFixed(2)}%
                </TableCell>
                <TableCell>{item.metaMedia.toFixed(1)}%</TableCell>
                <TableCell
                  className={
                    item.crescimento >= 0 ? "text-success" : "text-destructive"
                  }
                >
                  {item.crescimento >= 0 ? "+" : ""}
                  {item.crescimento.toFixed(2)}%
                </TableCell>
                <TableCell
                  className={
                    item.quebra <= 0.35 ? "text-success" : item.quebra <= 0.70 ? "text-warning" : "text-destructive"
                  }
                >
                  {item.quebra.toFixed(2)}%
                </TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
