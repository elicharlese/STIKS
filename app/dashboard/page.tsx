"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Layers, Package, ArrowUpRight, ArrowDownRight, DollarSign, Activity, PieChart } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-royal text-royal hover:bg-royal/10">
              <DollarSign className="mr-2 h-4 w-4" />
              Deposit
            </Button>
            <Button size="sm" className="bg-royal text-white hover:bg-royal-light">
              <Activity className="mr-2 h-4 w-4" />
              Invest
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="bg-muted/20 text-royal">
            <TabsTrigger value="overview" className="data-[state=active]:bg-royal data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="investments" className="data-[state=active]:bg-royal data-[state=active]:text-white">
              Investments
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-royal data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-gold" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
                  <Layers className="h-4 w-4 text-gold" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">2 CDOs, 1 STIK PAK</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Yield</CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+$2,350.45</div>
                  <p className="text-xs text-muted-foreground">+2.5% from previous period</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                  <Wallet className="h-4 w-4 text-gold" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,234.56</div>
                  <p className="text-xs text-muted-foreground">Ready to invest</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">Performance Chart</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <PieChart className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">Allocation Chart</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your recent investment activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium">Invested in Senior CDO Tranche</p>
                          <p className="text-sm text-muted-foreground">May 15, 2023</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$10,000.00</p>
                        <p className="text-sm text-muted-foreground">Pending</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <DollarSign className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Deposit</p>
                          <p className="text-sm text-muted-foreground">May 12, 2023</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$15,000.00</p>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Yield Payment</p>
                          <p className="text-sm text-muted-foreground">May 1, 2023</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">+$750.25</p>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Products</CardTitle>
                  <CardDescription>Based on your investment profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="h-5 w-5" />
                        <h4 className="font-medium">Balanced CDO</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        A diversified CDO with moderate risk and return profile.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span>Expected Return:</span>
                        <span className="font-medium">8-12%</span>
                      </div>
                    </div>

                    <div className="border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="h-5 w-5" />
                        <h4 className="font-medium">Growth STIK PAK</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        High-growth potential with emerging crypto assets.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span>Expected Return:</span>
                        <span className="font-medium">15-25%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-royal hover:bg-royal-light">Explore Products</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="investments" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Senior CDO Tranche</CardTitle>
                    <div className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</div>
                  </div>
                  <CardDescription>Low-risk, stable returns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Investment Amount</span>
                      <span className="font-medium">$10,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Value</span>
                      <span className="font-medium">$10,450.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Return</span>
                      <span className="font-medium text-green-600">+4.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Maturity Date</span>
                      <span className="font-medium">Nov 15, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Mezzanine CDO Tranche</CardTitle>
                    <div className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</div>
                  </div>
                  <CardDescription>Medium-risk, enhanced returns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Investment Amount</span>
                      <span className="font-medium">$15,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Value</span>
                      <span className="font-medium">$16,350.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Return</span>
                      <span className="font-medium text-green-600">+9.0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Maturity Date</span>
                      <span className="font-medium">Dec 20, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Balanced STIK PAK</CardTitle>
                    <div className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</div>
                  </div>
                  <CardDescription>Diversified crypto portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Investment Amount</span>
                      <span className="font-medium">$20,000.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Current Value</span>
                      <span className="font-medium">$22,400.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Return</span>
                      <span className="font-medium text-green-600">+12.0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Lock Period</span>
                      <span className="font-medium">30 days remaining</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Portfolio Analytics</CardTitle>
                  <CardDescription>Detailed analysis of your investment performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">Analytics Dashboard</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

// Wallet component for the dashboard
function Wallet({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={className} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    </div>
  )
}

