import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Alerts() {
  return (
    <Card className="rounded-3xl shadow-md mb-6">
      <CardHeader>
        <CardTitle className="text-primary flex items-center gap-2">
          <span>🚨</span> Alertas Executivos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Alerta Crítico */}
          <div className="bg-gradient-to-br from-destructive to-[#ff6b6b] rounded-2xl p-6 text-destructive-foreground">
            <h3 className="font-bold text-lg mb-4">Gerentes Críticos</h3>
            <p className="mb-3">
              <strong>Atevaldo Rodrigues (018-LAG)</strong> apresenta 5 meses consecutivos
              abaixo da meta com EBITDA negativo de -58,63%.
            </p>
            <p className="mb-3">
              <strong>Andrea Dutra / Janaina Pinto (009-LUC)</strong> mantém queda recorrente
              com EBITDA de -48,63% e crescimento negativo.
            </p>
            <p>
              <strong>Gleidson Sousa (001-PAR)</strong> apresenta o pior EBITDA
              da rede com -162,99%.
            </p>
          </div>

          {/* Alerta Positivo */}
          <div className="bg-gradient-to-br from-success to-[#4ade80] rounded-2xl p-6 text-success-foreground">
            <h3 className="font-bold text-lg mb-4">Destaques Positivos</h3>
            <p className="mb-3">
              <strong>Natanael Oliveira (012-IGU)</strong> lidera o ranking com 111,67%
              de venda e EBITDA de 127,51%.
            </p>
            <p className="mb-3">
              <strong>Alfredo Neto (005-SOB)</strong> apresenta excelente consistência
              com EBITDA de 106,11%.
            </p>
            <p>
              <strong>Antonio Pereira (015-DRB)</strong> destaque em crescimento
              de 14,31% e EBITDA de 112,39%.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
