import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, PieChart, BarChart3, Wallet } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
          <CardDescription>Common actions to manage your investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/app/purchase">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase
              </Link>
            </Button>
            <Button variant="outline" className="justify-start">
              <Wallet className="mr-2 h-4 w-4" />
              Deposit
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/app/portfolio">
                <PieChart className="mr-2 h-4 w-4" />
                Portfolio
              </Link>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link href="/app/analytics">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Recommended for You</CardTitle>
          <CardDescription>Based on your investment profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">Balanced Growth CDO</p>
                <p className="text-sm text-muted-foreground">Mezzanine Tranche • 8-12% APY</p>
              </div>
              <Button size="sm" className="bg-royal text-white hover:bg-royal-light" asChild>
                <Link href="/app/purchase">View</Link>
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Stability PAK</p>
                <p className="text-sm text-muted-foreground">STIK PAK • 3-5% APY</p>
              </div>
              <Button size="sm" className="bg-royal text-white hover:bg-royal-light" asChild>
                <Link href="/app/purchase">View</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

