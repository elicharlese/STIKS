import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Code, BookOpen, ExternalLink, Download } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Documentation</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive guides, technical documentation, and resources for STIKS platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-muted/20 text-royal">
              <TabsTrigger value="guides" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                User Guides
              </TabsTrigger>
              <TabsTrigger value="technical" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Technical Docs
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                API Reference
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <CardTitle>Getting Started</CardTitle>
                    </div>
                    <CardDescription>A comprehensive guide to getting started with STIKS platform.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Creating an Account</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Connecting Your Wallet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Making Your First Investment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Understanding Risk Profiles</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/docs/guides/getting-started">Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <CardTitle>Understanding CDOs</CardTitle>
                    </div>
                    <CardDescription>Learn about Cryptocurrency CDOs and how they work.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>What are Cryptocurrency CDOs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Tranche Structure and Risk Profiles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>CDO Performance Metrics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Risk Management Strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/docs/guides/understanding-cdos">Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <CardTitle>STIK PAKS Explained</CardTitle>
                    </div>
                    <CardDescription>Detailed information about STIK PAKS and their benefits.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Introduction to STIK PAKS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Types of STIK PAKS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Investment Strategies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Performance Tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/docs/guides/stik-paks-explained">Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="technical" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-gold" />
                      <CardTitle>Smart Contract Architecture</CardTitle>
                    </div>
                    <CardDescription>Technical documentation on STIKS smart contract architecture.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Contract Overview</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Security Features</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Interaction Patterns</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Audit Reports</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/docs/technical/smart-contracts">View Documentation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-gold" />
                      <CardTitle>Governance Protocol</CardTitle>
                    </div>
                    <CardDescription>Technical details on the STIKS governance protocol.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Governance Token</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Voting Mechanism</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Proposal Lifecycle</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Implementation Process</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/docs/technical/governance">View Documentation</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-gold" />
                      <CardTitle>Risk Management System</CardTitle>
                    </div>
                    <CardDescription>Technical documentation on the risk management system.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Risk Assessment Models</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Collateralization Mechanisms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Liquidation Procedures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Oracle Integration</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal hover:bg-royal-light text-white" asChild>
                      <Link href="/docs/technical/risk-management">View Documentation</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="api" className="p-4">
              <Card>
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>Complete reference documentation for the STIKS API.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">REST API</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The STIKS REST API allows developers to integrate with the platform and access market data, user
                        information, and more.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">Market Data Endpoints</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="text-muted-foreground">GET /api/v1/market/overview</li>
                            <li className="text-muted-foreground">GET /api/v1/market/assets</li>
                            <li className="text-muted-foreground">GET /api/v1/market/products</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2">User Endpoints</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="text-muted-foreground">GET /api/v1/user/portfolio</li>
                            <li className="text-muted-foreground">GET /api/v1/user/transactions</li>
                            <li className="text-muted-foreground">POST /api/v1/user/invest</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">GraphQL API</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The STIKS GraphQL API provides a flexible way to query exactly the data you need.
                      </p>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Example Query</h4>
                        <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
                          {`query {
  products {
    id
    name
    type
    riskLevel
    expectedReturn
    currentValue
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/docs/api/reference">Full API Reference</Link>
                  </Button>
                  <Button className="bg-royal hover:bg-royal-light text-white" asChild>
                    <Link href="/docs/api/playground">API Playground</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="h-5 w-5 text-gold" />
                      <CardTitle>Downloads</CardTitle>
                    </div>
                    <CardDescription>Downloadable resources for STIKS platform.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>STIKS Whitepaper</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </li>
                      <li className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Technical Architecture Overview</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </li>
                      <li className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Security Audit Reports</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Brand Assets</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink className="h-5 w-5 text-gold" />
                      <CardTitle>External Resources</CardTitle>
                    </div>
                    <CardDescription>Useful external resources and references.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <span>Solana Documentation</span>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://docs.solana.com" target="_blank" rel="noopener noreferrer">
                            Visit
                          </a>
                        </Button>
                      </li>
                      <li className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <span>DeFi Risk Framework</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Visit
                        </Button>
                      </li>
                      <li className="flex items-center justify-between border-b pb-2">
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <span>Cryptocurrency Market Data</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Visit
                        </Button>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          <span>Financial Regulations Guide</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Visit
                        </Button>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

