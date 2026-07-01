import { Card, CardContent } from "@/components/ui/card"

interface SummaryCardProps {
  title: string
  value: string
  variant: "success" | "primary" | "destructive" | "warning"
}

function SummaryCard({ title, value, variant }: SummaryCardProps) {
  const colorClasses = {
    success: "text-success",
    primary: "text-primary",
    destructive: "text-destructive",
    warning: "text-warning",
  }

  return (
    <Card className="rounded-3xl shadow-md hover:-translate-y-1 transition-transform">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{title}</p>
        <p className={`text-2xl md:text-3xl font-bold ${colorClasses[variant]}`}>
          {value}
        </p>
      </CardContent>
    </Card>
  )
}

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      <SummaryCard
        title="Melhor Gerente (Venda)"
        value="Natanael Oliveira"
        variant="success"
      />
      <SummaryCard
        title="Melhor EBITDA"
        value="127,51% (IGU)"
        variant="primary"
      />
      <SummaryCard
        title="Gerente Mais Crítico"
        value="Atevaldo Rodrigues"
        variant="destructive"
      />
      <SummaryCard
        title="Lojas Acima Meta Venda"
        value="6 de 16"
        variant="warning"
      />
    </div>
  )
}
