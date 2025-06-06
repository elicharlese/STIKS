import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, FileText, Video, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LearnPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn About STIKS</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Educational resources to help you understand cryptocurrency CDOs, STIK PAKS, and decentralized finance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="beginners" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/20 text-royal">
              <TabsTrigger value="beginners" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Beginners
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Intermediate
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Advanced
              </TabsTrigger>
            </TabsList>

            <TabsContent value="beginners" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <CardTitle>Introduction to DeFi</CardTitle>
                    </div>
                    <CardDescription>Learn the basics of decentralized finance and its key concepts.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>What is DeFi?</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Key DeFi Protocols</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>DeFi vs. Traditional Finance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>DeFi Explained (Video)</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/beginners/defi-intro">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <CardTitle>Understanding CDOs</CardTitle>
                    </div>
                    <CardDescription>A beginner's guide to Collateralized Debt Obligations.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>What are CDOs?</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>CDO Structure Basics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Risk and Return Profiles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>CDOs Simplified (Video)</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/beginners/cdo-basics">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <CardTitle>Crypto Wallets 101</CardTitle>
                    </div>
                    <CardDescription>Learn how to set up and use cryptocurrency wallets.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Types of Crypto Wallets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Setting Up a Solana Wallet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Wallet Security Best Practices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>Wallet Setup Tutorial (Video)</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/beginners/crypto-wallets">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-gold" />
                      <CardTitle>Advanced CDO Structures</CardTitle>
                    </div>
                    <CardDescription>Deeper dive into CDO structures and mechanics.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Tranche Mechanics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Waterfall Payment Structures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Collateral Selection Strategies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Performance Analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/intermediate/advanced-cdos">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-gold" />
                      <CardTitle>Risk Management</CardTitle>
                    </div>
                    <CardDescription>Strategies for managing risk in cryptocurrency investments.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Risk Assessment Frameworks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Diversification Strategies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Hedging Techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Market Volatility Management</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/intermediate/risk-management">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-gold" />
                      <CardTitle>DeFi Governance</CardTitle>
                    </div>
                    <CardDescription>Understanding governance in decentralized finance.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>DAO Structures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Governance Tokens</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Voting Mechanisms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Proposal Creation and Implementation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/intermediate/defi-governance">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-gold" />
                      <CardTitle>Quantitative Analysis</CardTitle>
                    </div>
                    <CardDescription>Advanced quantitative methods for analyzing crypto assets.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Statistical Models for Crypto</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Risk-Adjusted Return Analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Portfolio Optimization Techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Machine Learning Applications</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/advanced/quantitative-analysis">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-gold" />
                      <CardTitle>Smart Contract Development</CardTitle>
                    </div>
                    <CardDescription>Advanced guide to developing smart contracts for DeFi.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Solana Program Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Security Best Practices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Testing and Auditing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Advanced Contract Patterns</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/advanced/smart-contracts">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-gold" />
                      <CardTitle>Regulatory Compliance</CardTitle>
                    </div>
                    <CardDescription>Navigating the complex regulatory landscape of DeFi.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Global Regulatory Frameworks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>KYC/AML Considerations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Securities Regulations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Compliance Strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/learn/advanced/regulatory-compliance">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Learning Paths</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Structured learning paths to guide your educational journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-gold" />
                  <CardTitle>DeFi Fundamentals</CardTitle>
                </div>
                <CardDescription>A comprehensive path to understanding decentralized finance.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  This learning path covers the essential concepts of decentralized finance, from basic principles to
                  advanced applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Completion Time:</span>
                    <span className="text-sm font-medium">4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Difficulty:</span>
                    <span className="text-sm font-medium">Beginner to Intermediate</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/learn/paths/defi-fundamentals">
                    Start Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-gold" />
                  <CardTitle>CDO Specialist</CardTitle>
                </div>
                <CardDescription>Become an expert in cryptocurrency CDOs.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  This specialized path focuses on the mechanics, structures, and strategies of Cryptocurrency
                  Collateralized Debt Obligations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Completion Time:</span>
                    <span className="text-sm font-medium">6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Difficulty:</span>
                    <span className="text-sm font-medium">Intermediate to Advanced</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/learn/paths/cdo-specialist">
                    Start Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-gold" />
                  <CardTitle>DeFi Developer</CardTitle>
                </div>
                <CardDescription>Learn to build decentralized finance applications.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">
                  This technical path teaches you how to develop smart contracts and applications for the decentralized
                  finance ecosystem.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Completion Time:</span>
                    <span className="text-sm font-medium">8 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Difficulty:</span>
                    <span className="text-sm font-medium">Advanced</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                  <Link href="/learn/paths/defi-developer">
                    Start Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

