import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, Shield, AlertTriangle, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function CDOsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <Link href="/products" className="text-sm text-muted-foreground hover:underline">
              ← Back to Products
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cryptocurrency CDOs</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Structured financial products that pool digital assets into tranches, offering different risk and return
              profiles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What are Cryptocurrency CDOs?</h2>
                <p className="text-muted-foreground md:text-lg">
                  Cryptocurrency Collateralized Debt Obligations (CDOs) are structured financial products that pool
                  various digital assets and divide them into different tranches. Each tranche offers a different risk
                  and return profile, allowing investors to choose the level of exposure that suits their investment
                  strategy.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-muted/20 border border-muted p-6">
                <div className="h-full flex flex-col justify-center items-center">
                  <Layers className="h-24 w-24 mb-6 text-primary/80" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Structured Tranches</h3>
                    <p className="text-muted-foreground">
                      Senior, Mezzanine, and Junior tranches with varying risk-return profiles.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">CDO Tranches</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Our CDOs are divided into three main tranches, each with a different risk-return profile.
              </p>
            </div>
          </div>

          <Tabs defaultValue="senior" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/20 text-royal">
              <TabsTrigger value="senior" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Senior Tranche
              </TabsTrigger>
              <TabsTrigger value="mezzanine" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Mezzanine Tranche
              </TabsTrigger>
              <TabsTrigger value="junior" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Junior Tranche
              </TabsTrigger>
            </TabsList>
            <TabsContent value="senior" className="p-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-500" />
                    <CardTitle>Senior Tranche</CardTitle>
                  </div>
                  <CardDescription>Lowest risk, lowest return</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      The Senior Tranche is the most secure layer of the CDO structure. It has first priority on cash
                      flows and is protected from losses by the lower tranches. This tranche is designed for
                      conservative investors seeking stable returns with minimal risk.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-4 border rounded-lg">
                        <TrendingUp className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm font-medium">Expected Return</span>
                        <span className="text-2xl font-bold">4-6%</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-lg">
                        <AlertTriangle className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm font-medium">Risk Level</span>
                        <span className="text-2xl font-bold">Low</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-royal hover:bg-royal-light">Invest in Senior Tranche</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="mezzanine" className="p-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-yellow-500" />
                    <CardTitle>Mezzanine Tranche</CardTitle>
                  </div>
                  <CardDescription>Medium risk, medium return</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      The Mezzanine Tranche sits between the Senior and Junior tranches, offering a balanced risk-return
                      profile. It provides a buffer for the Senior Tranche while being protected by the Junior Tranche.
                      This tranche is suitable for investors seeking moderate returns with manageable risk.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-4 border rounded-lg">
                        <TrendingUp className="h-8 w-8 text-yellow-500 mb-2" />
                        <span className="text-sm font-medium">Expected Return</span>
                        <span className="text-2xl font-bold">8-12%</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-lg">
                        <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
                        <span className="text-sm font-medium">Risk Level</span>
                        <span className="text-2xl font-bold">Medium</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-royal hover:bg-royal-light">Invest in Mezzanine Tranche</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="junior" className="p-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-red-500" />
                    <CardTitle>Junior Tranche</CardTitle>
                  </div>
                  <CardDescription>Highest risk, highest return</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      The Junior Tranche is the first to absorb losses but also offers the highest potential returns. It
                      provides protection to the higher tranches and is designed for risk-tolerant investors seeking
                      significant returns who can withstand potential losses.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-4 border rounded-lg">
                        <TrendingUp className="h-8 w-8 text-red-500 mb-2" />
                        <span className="text-sm font-medium">Expected Return</span>
                        <span className="text-2xl font-bold">15-25%</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-lg">
                        <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                        <span className="text-sm font-medium">Risk Level</span>
                        <span className="text-2xl font-bold">High</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-royal hover:bg-royal-light">Invest in Junior Tranche</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                The process of investing in our Cryptocurrency CDOs is straightforward and secure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle>Select a CDO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Browse our available CDOs and select one that aligns with your investment goals and risk tolerance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle>Choose a Tranche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Select the tranche that best suits your risk-return preferences: Senior, Mezzanine, or Junior.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle>Invest & Monitor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Complete your investment through our secure platform and monitor your returns in real-time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-royal hover:bg-royal-light" asChild>
              <Link href="/products/cdos/available">View Available CDOs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

