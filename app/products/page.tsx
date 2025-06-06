import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ArrowRight, Shield, TrendingUp } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Financial Products</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore our range of structured financial products designed for the decentralized economy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cryptocurrency CDOs</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Structured financial products that pool digital assets into tranches, offering different risk and return
                profiles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-6 w-6 text-gold" />
                  <CardTitle>Senior Tranche CDO</CardTitle>
                </div>
                <CardDescription>Low risk, stable returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  The Senior Tranche is the most secure layer of the CDO structure, designed for conservative investors
                  seeking stable returns with minimal risk.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Risk Level</span>
                    <span>Low</span>
                  </div>
                  <div className="flex flex-col p-2 border rounded-lg">
                    <span className="font-medium">Expected Return</span>
                    <span>4-6% APY</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/products/cdos">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-6 w-6 text-gold" />
                  <CardTitle>Mezzanine Tranche CDO</CardTitle>
                </div>
                <CardDescription>Medium risk, enhanced returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  The Mezzanine Tranche offers a balanced risk-return profile, suitable for investors seeking moderate
                  returns with manageable risk.
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
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/products/cdos">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-6 w-6 text-gold" />
                  <CardTitle>Junior Tranche CDO</CardTitle>
                </div>
                <CardDescription>Higher risk, maximum returns</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  The Junior Tranche offers the highest potential returns but is the first to absorb losses, designed
                  for risk-tolerant investors seeking significant returns.
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
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/products/cdos">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">STIK PAKS</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                A suite of financial products designed to meet the diverse needs of cryptocurrency investors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
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
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/products/stik-paks">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
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
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/products/stik-paks">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
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
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/products/stik-paks">
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Custom Solutions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Need a tailored financial product for your specific investment needs? Our team can create custom
                solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-royal text-white hover:bg-royal-light" asChild size="lg">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button variant="outline" className="border-royal text-royal hover:bg-royal/10" size="lg" asChild>
                <Link href="/products/custom">Learn About Custom Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

