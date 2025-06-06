import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp } from "lucide-react"

export function PortfolioStats() {
  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Value</p>
            <DollarSign className="h-4 w-4 text-gold" />
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <div className="flex items-center pt-1">
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-xs text-green-500">+20.1%</span>
            <span className="text-xs text-muted-foreground ml-1">from initial</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Invested</p>
            <DollarSign className="h-4 w-4 text-gold" />
          </div>
          <div className="text-2xl font-bold">$37,650.00</div>
          <div className="flex items-center pt-1">
            <span className="text-xs text-muted-foreground">Across 3 products</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Returns</p>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-green-600">+$7,581.89</div>
          <div className="flex items-center pt-1">
            <span className="text-xs text-green-500">+20.1% ROI</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

