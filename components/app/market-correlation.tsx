import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function MarketCorrelation() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Market Correlation</CardTitle>
          <CardDescription>How your portfolio correlates with market movements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">Correlation Matrix</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Correlation Analysis</CardTitle>
          <CardDescription>Key insights from correlation analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-1">Low Correlation with BTC</h4>
              <p className="text-sm text-blue-700">
                Your portfolio has a correlation coefficient of 0.35 with Bitcoin, providing good diversification.
              </p>
            </div>

            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">Medium Correlation with ETH</h4>
              <p className="text-sm text-yellow-700">
                Your portfolio has a correlation coefficient of 0.65 with Ethereum, indicating moderate exposure.
              </p>
            </div>

            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-1">Negative Correlation with Gold</h4>
              <p className="text-sm text-green-700">
                Your portfolio has a correlation coefficient of -0.25 with Gold, providing a hedge against traditional
                assets.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Beta Analysis</CardTitle>
          <CardDescription>Portfolio sensitivity to market movements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Beta to Crypto Market</span>
                <span className="text-sm font-medium">0.85</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: "85%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Your portfolio is slightly less volatile than the overall crypto market.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Beta to DeFi Index</span>
                <span className="text-sm font-medium">1.2</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Your portfolio is more volatile than the DeFi index, indicating higher exposure to DeFi assets.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Beta to S&P 500</span>
                <span className="text-sm font-medium">0.15</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="bg-green-500 h-full rounded-full" style={{ width: "15%" }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Your portfolio has very low correlation with traditional equity markets.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

