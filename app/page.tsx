import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, BarChart3, Layers, Lock } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ProductCard } from "@/components/product-card"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-16 md:py-24 lg:py-28 bg-background">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
                Our Financial Products
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[800px] mx-auto">
                Structured financial instruments designed for the decentralized economy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <ProductCard
              title="Cryptocurrency CDOs"
              description="Structured financial products that pool digital assets into tranches, offering different risk and return profiles."
              icon={<Layers className="h-12 w-12" />}
              link="/products/cdos"
            />
            <ProductCard
              title="STIK PAKS"
              description="A suite of financial products designed to meet the diverse needs of cryptocurrency investors."
              icon={<BarChart3 className="h-12 w-12" />}
              link="/products/stik-paks"
            />
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-16 md:py-24 lg:py-28 bg-muted/50">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">Key Features</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[800px] mx-auto">
                Built on blockchain technology for security, transparency, and efficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background card-enhanced">
              <CardHeader className="pb-4">
                <Shield className="h-10 w-10 mb-4 text-royal" />
                <CardTitle className="text-xl md:text-2xl font-serif">Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Leveraging blockchain technology and smart contracts for secure, transparent, and efficient financial
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background card-enhanced">
              <CardHeader className="pb-4">
                <Lock className="h-10 w-10 mb-4 text-royal" />
                <CardTitle className="text-xl md:text-2xl font-serif">Decentralized Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Governed by a Decentralized Autonomous Organization (DAO) to ensure transparent and democratic
                  decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background card-enhanced">
              <CardHeader className="pb-4">
                <BarChart3 className="h-10 w-10 mb-4 text-royal" />
                <CardTitle className="text-xl md:text-2xl font-serif">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Sophisticated risk assessment and management tools to protect investor assets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-28 bg-background">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">Ready to Invest?</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[800px] mx-auto">
                Join the future of decentralized finance with STIKS.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Button
                className="bg-royal text-white hover:bg-royal-light btn-enhanced text-base px-8 py-6"
                asChild
                size="lg"
              >
                <Link href="/connect">Connect Wallet</Link>
              </Button>
              <Button
                variant="outline"
                className="border-royal text-royal hover:bg-royal/10 btn-enhanced text-base px-8 py-6"
                size="lg"
                asChild
              >
                <Link href="/learn">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

