import { PortfolioSummary } from "@/components/app/portfolio-summary"
import { RecentTransactions } from "@/components/app/recent-transactions"
import { MarketOverview } from "@/components/app/market-overview"
import { QuickActions } from "@/components/app/quick-actions"
import { PerformanceChart } from "@/components/app/performance-chart"
import { AssetAllocation } from "@/components/app/asset-allocation"

export default function AppDashboard() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back. Here's an overview of your STIKS portfolio.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <PortfolioSummary />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <QuickActions />
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div>
          <AssetAllocation />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div>
          <MarketOverview />
        </div>
      </div>
    </div>
  )
}

