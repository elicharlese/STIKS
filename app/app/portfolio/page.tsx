import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioCard } from "@/components/app/portfolio-card"
import { PortfolioStats } from "@/components/app/portfolio-stats"
import { PortfolioChart } from "@/components/app/portfolio-chart"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto pb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">My Portfolio</h1>
          <p className="text-muted-foreground">Manage and track your STIKS investments.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <PortfolioStats />
      </div>

      <div className="mb-8">
        <PortfolioChart />
      </div>

      <Tabs defaultValue="active" className="mb-8">
        <TabsList className="bg-muted/20 text-royal">
          <TabsTrigger value="active" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Active Investments
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Pending
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              id="inv-001"
              title="Blue Chip CDO"
              type="Senior Tranche"
              investedAmount="$10,000"
              currentValue="$10,450"
              returnPercentage="+4.5%"
              maturityDate="Nov 15, 2023"
              status="active"
            />

            <PortfolioCard
              id="inv-002"
              title="Balanced Growth CDO"
              type="Mezzanine Tranche"
              investedAmount="$15,000"
              currentValue="$16,350"
              returnPercentage="+9.0%"
              maturityDate="Dec 20, 2023"
              status="active"
            />

            <PortfolioCard
              id="inv-003"
              title="Stability PAK"
              type="STIK PAK"
              investedAmount="$5,000"
              currentValue="$5,150"
              returnPercentage="+3.0%"
              maturityDate="Oct 30, 2023"
              status="active"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered */}
      </Tabs>
    </div>
  )
}

