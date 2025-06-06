import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { AnalyticsChart } from "@/components/app/analytics-chart"
import { RiskAssessment } from "@/components/app/risk-assessment"
import { PerformanceMetrics } from "@/components/app/performance-metrics"
import { MarketCorrelation } from "@/components/app/market-correlation"
import { Download, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto pb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Analytics</h1>
          <p className="text-muted-foreground">Detailed analysis and insights for your STIKS investments.</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>Track the performance of your investments over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsChart />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="mb-8">
        <TabsList className="bg-muted/20 text-royal">
          <TabsTrigger value="performance" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Performance
          </TabsTrigger>
          <TabsTrigger value="risk" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Risk Analysis
          </TabsTrigger>
          <TabsTrigger value="correlation" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Market Correlation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-6">
          <PerformanceMetrics />
        </TabsContent>

        <TabsContent value="risk" className="mt-6">
          <RiskAssessment />
        </TabsContent>

        <TabsContent value="correlation" className="mt-6">
          <MarketCorrelation />
        </TabsContent>
      </Tabs>
    </div>
  )
}

