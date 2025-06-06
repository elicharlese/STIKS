import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Package, ArrowRight, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function StikPaksPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <Link href="/products" className="text-sm text-muted-foreground hover:underline">
              ← Back to Products
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">STIK PAKS</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A suite of financial products designed to meet the diverse needs of cryptocurrency investors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What are STIK PAKS?</h2>
                <p className="text-muted-foreground md:text-lg">
                  STIK PAKS are specialized financial instruments designed to provide investors with exposure to various
                  cryptocurrency assets and strategies. Each PAK is tailored to specific investment objectives, risk
                  profiles, and market conditions.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-muted/20 border border-muted p-6">
                <div className="h-full flex flex-col justify-center items-center">
                  <Package className="h-24 w-24 mb-6 text-primary/80" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Diversified Strategies</h3>
                    <p className="text-muted-foreground">
                      Curated investment packages with different risk-return characteristics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Available STIK PAKS</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Explore our range of STIK PAKS, each designed to meet specific investment objectives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-6 w-6 text-gold" />
                  <CardTitle>Stability PAK</CardTitle>
                </div>
                <CardDescription>Low volatility, steady returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  The Stability PAK focuses on blue-chip cryptocurrencies and stablecoins, providing a low-volatility
                  investment option with steady, predictable returns.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Risk Level</span>
                    <span>Low</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Expected Return</span>
                    <span>3-5% APY</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Lock Period</span>
                    <span>30 Days</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Min. Investment</span>
                    <span>$1,000</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/products/stik-paks/stability">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-6 w-6 text-gold" />
                  <CardTitle>Balanced PAK</CardTitle>
                </div>
                <CardDescription>Moderate risk, enhanced returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  The Balanced PAK offers a diversified portfolio of established cryptocurrencies and DeFi tokens,
                  providing a balance between growth potential and stability.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Risk Level</span>
                    <span>Medium</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Expected Return</span>
                    <span>8-12% APY</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Lock Period</span>
                    <span>60 Days</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Min. Investment</span>
                    <span>$5,000</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/products/stik-paks/balanced">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-gold" />
                  <CardTitle>Growth PAK</CardTitle>
                </div>
                <CardDescription>Higher risk, maximum growth potential</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  The Growth PAK focuses on emerging cryptocurrencies and high-potential DeFi protocols, aiming for
                  substantial returns with a higher risk tolerance.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Risk Level</span>
                    <span>High</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Expected Return</span>
                    <span>15-25% APY</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Lock Period</span>
                    <span>90 Days</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Min. Investment</span>
                    <span>$10,000</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/products/stik-paks/growth">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of STIK PAKS</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Our STIK PAKS offer several advantages for cryptocurrency investors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Professional Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each PAK is professionally managed by our team of cryptocurrency experts, ensuring optimal asset
                  allocation and risk management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Diversification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  STIK PAKS provide instant diversification across multiple cryptocurrencies and strategies, reducing
                  overall portfolio risk.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All PAK activities are recorded on the blockchain, providing complete transparency and auditability
                  for investors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-lg">Liquidity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  STIK PAKS offer flexible liquidity options, allowing investors to access their funds after the lock
                  period with minimal friction.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-royal hover:bg-royal-light" asChild>
              <Link href="/products/stik-paks/compare">Compare All STIK PAKS</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

