import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, DollarSign } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Market Analytics</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive data and insights on cryptocurrency markets and STIKS financial products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value Locked</CardTitle>
                <DollarSign className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$245,231,890</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +12.5% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Investors</CardTitle>
                <DollarSign className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10,458</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +8.3% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average APY</CardTitle>
                <DollarSign className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">9.7%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 flex items-center">
                    <TrendingDown className="mr-1 h-4 w-4" />
                    -0.5% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Volatility</CardTitle>
                <DollarSign className="h-4 w-4 text-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Medium</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-yellow-500 flex items-center">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    Slightly increasing
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Market Insights</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Detailed analytics on cryptocurrency markets and STIKS financial products.
              </p>
            </div>
          </div>

          <Tabs defaultValue="market" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/20 text-royal">
              <TabsTrigger value="market" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Market Overview
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Product Performance
              </TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Market Trends
              </TabsTrigger>
            </TabsList>

            <TabsContent value="market" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cryptocurrency Market Overview</CardTitle>
                  <CardDescription>
                    Current state of the cryptocurrency market and its impact on STIKS products.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">Market Overview Chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Performance</CardTitle>
                  <CardDescription>Performance metrics for STIKS CDOs and STIK PAKS.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">Product Performance Chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                  <CardDescription>
                    Emerging trends in the cryptocurrency market and their potential impact.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <PieChart className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">Market Trends Chart</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Risk Assessment</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Current risk levels across different asset classes and STIKS products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bitcoin & Large Cap Assets</CardTitle>
                <CardDescription>Risk assessment for Bitcoin and other large-cap cryptocurrencies.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Current Risk Level:</span>
                    <span className="font-medium text-yellow-500">Medium</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Market volatility has increased slightly, but large-cap assets remain relatively stable compared to
                    smaller altcoins.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DeFi Protocols</CardTitle>
                <CardDescription>Risk assessment for decentralized finance protocols.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Current Risk Level:</span>
                    <span className="font-medium text-red-500">High</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    DeFi protocols are experiencing higher volatility due to regulatory concerns and recent exploits in
                    the ecosystem.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stablecoins</CardTitle>
                <CardDescription>Risk assessment for stablecoins and pegged assets.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Current Risk Level:</span>
                    <span className="font-medium text-green-500">Low</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Major stablecoins are maintaining their pegs well, with adequate reserves and strong market
                    confidence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

