import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your recent investment activities</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full">
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
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <DollarSign className="h-4 w-4 text-blue-500" />
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
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <ArrowDownRight className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium">Yield Payment</p>
                <p className="text-sm text-muted-foreground">May 1, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-green-600">+$750.25</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

