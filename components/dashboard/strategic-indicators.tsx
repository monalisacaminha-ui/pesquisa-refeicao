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

interface Indicator {
  indicador: string
  status: string
  statusType: "success" | "destructive"
  tendencia: string
  tendenciaIcon: "up" | "down"
}

const indicators: Indicator[] = [
  {
    indicador: "Real x Meta (Venda)",
    status: "98,3%",
    statusType: "success",
    tendencia: "Melhorando",
    tendenciaIcon: "up",
  },
  {
    indicador: "Crescimento Venda YoY",
    status: "+4,25%",
    statusType: "success",
    tendencia: "Positivo",
    tendenciaIcon: "up",
  },
  {
    indicador: "EBITDA Rede",
    status: "68,6%",
    statusType: "destructive",
    tendencia: "Atenção",
    tendenciaIcon: "down",
  },
  {
    indicador: "Lojas EBITDA Positivo",
    status: "10 de 16",
    statusType: "success",
    tendencia: "Estável",
    tendenciaIcon: "up",
  },
  {
    indicador: "Lojas Críticas (Venda)",
    status: "4",
    statusType: "destructive",
    tendencia: "Atenção",
    tendenciaIcon: "down",
  },
  {
    indicador: "Quebra Média Rede",
    status: "0,54%",
    statusType: "success",
    tendencia: "Controlada",
    tendenciaIcon: "up",
  },
]

export function StrategicIndicators() {
  return (
    <Card className="rounded-3xl shadow-md mb-6">
      <CardHeader>
        <CardTitle className="text-primary flex items-center gap-2">
          <span>📊</span> Indicadores Estratégicos
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-semibold">
                Indicador
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Status
              </TableHead>
              <TableHead className="text-primary-foreground font-semibold">
                Tendência
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {indicators.map((item) => (
              <TableRow key={item.indicador}>
                <TableCell>{item.indicador}</TableCell>
                <TableCell
                  className={
                    item.statusType === "success"
                      ? "text-success"
                      : "text-destructive"
                  }
                >
                  {item.status}
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1">
                    {item.tendenciaIcon === "up" ? "▲" : "▼"} {item.tendencia}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
