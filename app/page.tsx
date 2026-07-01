import { Header } from "@/components/dashboard/header"
import { SummaryCards } from "@/components/dashboard/summary-cards"
import { RankingTable } from "@/components/dashboard/ranking-table"
import { Heatmap } from "@/components/dashboard/heatmap"
import { Alerts } from "@/components/dashboard/alerts"
import { StrategicIndicators } from "@/components/dashboard/strategic-indicators"
import { Footer } from "@/components/dashboard/footer"

export default function PainelExecutivo() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <SummaryCards />
        <RankingTable />
        <Heatmap />
        <Alerts />
        <StrategicIndicators />
        <Footer />
      </div>
    </main>
  )
}
