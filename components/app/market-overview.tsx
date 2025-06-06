import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Current market conditions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">BTC/USD</p>
              <p className="text-sm text-muted-foreground">Bitcoin</p>
            </div>
            <div className="text-right flex items-center">
              <p className="font-medium mr-2">$42,567.89</p>
              <div className="flex items-center text-green-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-xs">+2.4%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">ETH/USD</p>
              <p className="text-sm text-muted-foreground">Ethereum</p>
            </div>
            <div className="text-right flex items-center">
              <p className="font-medium mr-2">$2,345.67</p>
              <div className="flex items-center text-green-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-xs">+1.8%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">SOL/USD</p>
              <p className="text-sm text-muted-foreground">Solana</p>
            </div>
            <div className="text-right flex items-center">
              <p className="font-medium mr-2">$87.65</p>
              <div className="flex items-center text-red-500">
                <TrendingDown className="h-4 w-4 mr-1" />
                <span className="text-xs">-0.5%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Market Sentiment</p>
            </div>
            <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Bullish</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

