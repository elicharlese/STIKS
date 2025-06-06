import { ProductCard } from "@/components/app/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function PurchasePage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Purchase CDOs</h1>
        <p className="text-muted-foreground">
          Browse and invest in our range of Cryptocurrency Collateralized Debt Obligations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-muted/20 text-royal">
          <TabsTrigger value="all" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            All Products
          </TabsTrigger>
          <TabsTrigger value="senior" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Senior Tranches
          </TabsTrigger>
          <TabsTrigger value="mezzanine" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Mezzanine Tranches
          </TabsTrigger>
          <TabsTrigger value="junior" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            Junior Tranches
          </TabsTrigger>
          <TabsTrigger value="stik-paks" className="data-[state=active]:bg-royal data-[state=active]:text-white">
            STIK PAKS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              id="cdo-001"
              title="Blue Chip CDO"
              type="Senior Tranche"
              riskLevel="Low"
              expectedReturn="4-6%"
              minInvestment="$5,000"
              lockPeriod="30 days"
              description="A senior tranche CDO backed by blue-chip cryptocurrencies, offering stable returns with minimal risk."
            />

            <ProductCard
              id="cdo-002"
              title="Balanced Growth CDO"
              type="Mezzanine Tranche"
              riskLevel="Medium"
              expectedReturn="8-12%"
              minInvestment="$10,000"
              lockPeriod="60 days"
              description="A mezzanine tranche CDO with a balanced portfolio of established cryptocurrencies and DeFi tokens."
            />

            <ProductCard
              id="cdo-003"
              title="DeFi Opportunity CDO"
              type="Junior Tranche"
              riskLevel="High"
              expectedReturn="15-25%"
              minInvestment="$15,000"
              lockPeriod="90 days"
              description="A junior tranche CDO focused on high-potential DeFi protocols, offering significant returns with higher risk."
            />

            <ProductCard
              id="pak-001"
              title="Stability PAK"
              type="STIK PAK"
              riskLevel="Low"
              expectedReturn="3-5%"
              minInvestment="$1,000"
              lockPeriod="30 days"
              description="A low-volatility investment package focused on stablecoins and blue-chip cryptocurrencies."
            />

            <ProductCard
              id="pak-002"
              title="Balanced PAK"
              type="STIK PAK"
              riskLevel="Medium"
              expectedReturn="8-12%"
              minInvestment="$5,000"
              lockPeriod="60 days"
              description="A diversified portfolio of established cryptocurrencies and DeFi tokens with moderate risk."
            />

            <ProductCard
              id="pak-003"
              title="Growth PAK"
              type="STIK PAK"
              riskLevel="High"
              expectedReturn="15-25%"
              minInvestment="$10,000"
              lockPeriod="90 days"
              description="A high-growth potential package focused on emerging cryptocurrencies and DeFi protocols."
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered */}
        <TabsContent value="senior" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              id="cdo-001"
              title="Blue Chip CDO"
              type="Senior Tranche"
              riskLevel="Low"
              expectedReturn="4-6%"
              minInvestment="$5,000"
              lockPeriod="30 days"
              description="A senior tranche CDO backed by blue-chip cryptocurrencies, offering stable returns with minimal risk."
            />
            {/* More senior tranche products would be listed here */}
          </div>
        </TabsContent>

        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </div>
  )
}

