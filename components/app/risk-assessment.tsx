import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle } from "lucide-react"

export function RiskAssessment() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Risk Assessment</CardTitle>
          <CardDescription>Overall risk profile of your investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Risk Level</span>
                <span className="text-sm font-medium text-yellow-600">Medium</span>
              </div>
              <Progress value={55} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Your portfolio has a balanced risk profile with a mix of low, medium, and high-risk investments.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Market Risk</span>
                  <span className="text-sm font-medium text-yellow-600">Medium</span>
                </div>
                <Progress value={60} className="h-1.5" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Liquidity Risk</span>
                  <span className="text-sm font-medium text-green-600">Low</span>
                </div>
                <Progress value={30} className="h-1.5" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Volatility Risk</span>
                  <span className="text-sm font-medium text-yellow-600">Medium</span>
                </div>
                <Progress value={55} className="h-1.5" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Default Risk</span>
                  <span className="text-sm font-medium text-red-600">High</span>
                </div>
                <Progress value={75} className="h-1.5" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Risk Factors</CardTitle>
          <CardDescription>Key factors affecting your portfolio risk</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-800">High Concentration</h4>
                <p className="text-sm text-yellow-700">
                  45% of your portfolio is in Mezzanine Tranches, which may increase overall risk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800">Market Volatility</h4>
                <p className="text-sm text-red-700">
                  Recent market conditions show increased volatility in DeFi assets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <AlertTriangle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-800">Diversification Benefit</h4>
                <p className="text-sm text-green-700">
                  Your portfolio includes assets with low correlation, providing diversification benefits.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

