import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, Clock, Wallet } from "lucide-react"

export function PortfolioSummary() {
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
            <span className="text-xs text-muted-foreground ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Active Investments</p>
            <Wallet className="h-4 w-4 text-gold" />
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="flex items-center pt-1">
            <span className="text-xs text-muted-foreground">2 CDOs, 1 STIK PAK</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Monthly Yield</p>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold">+$2,350.45</div>
          <div className="flex items-center pt-1">
            <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-xs text-green-500">+2.5%</span>
            <span className="text-xs text-muted-foreground ml-1">from previous period</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">Next Maturity</p>
            <Clock className="h-4 w-4 text-gold" />
          </div>
          <div className="text-2xl font-bold">15 days</div>
          <div className="flex items-center pt-1">
            <span className="text-xs text-muted-foreground">Blue Chip CDO</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

