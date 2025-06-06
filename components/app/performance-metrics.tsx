import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, TrendingDown } from "lucide-react"

export function PerformanceMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators for your investments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Benchmark</TableHead>
                <TableHead>Comparison</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Total Return</TableCell>
                <TableCell>20.1%</TableCell>
                <TableCell>15.3%</TableCell>
                <TableCell className="flex items-center text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +4.8%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Annualized Return</TableCell>
                <TableCell>12.4%</TableCell>
                <TableCell>10.2%</TableCell>
                <TableCell className="flex items-center text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +2.2%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sharpe Ratio</TableCell>
                <TableCell>1.8</TableCell>
                <TableCell>1.5</TableCell>
                <TableCell className="flex items-center text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +0.3
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Volatility</TableCell>
                <TableCell>15.2%</TableCell>
                <TableCell>12.8%</TableCell>
                <TableCell className="flex items-center text-red-600">
                  <TrendingDown className="mr-1 h-4 w-4" />
                  +2.4%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Max Drawdown</TableCell>
                <TableCell>-8.5%</TableCell>
                <TableCell>-10.2%</TableCell>
                <TableCell className="flex items-center text-green-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +1.7%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Best Performing Assets</CardTitle>
          <CardDescription>Your top performing investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">DeFi Opportunity CDO</p>
                <p className="text-sm text-muted-foreground">Junior Tranche</p>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>+24.5%</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Balanced Growth CDO</p>
                <p className="text-sm text-muted-foreground">Mezzanine Tranche</p>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>+15.2%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Growth PAK</p>
                <p className="text-sm text-muted-foreground">STIK PAK</p>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>+12.8%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Worst Performing Assets</CardTitle>
          <CardDescription>Your underperforming investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Blue Chip CDO</p>
                <p className="text-sm text-muted-foreground">Senior Tranche</p>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>+4.5%</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">Stability PAK</p>
                <p className="text-sm text-muted-foreground">STIK PAK</p>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>+3.2%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Stablecoin CDO</p>
                <p className="text-sm text-muted-foreground">Senior Tranche</p>
              </div>
              <div className="flex items-center text-red-600">
                <TrendingDown className="mr-1 h-4 w-4" />
                <span>-0.5%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

