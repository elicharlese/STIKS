import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, DollarSign } from "lucide-react"

interface PortfolioCardProps {
  id: string
  title: string
  type: string
  investedAmount: string
  currentValue: string
  returnPercentage: string
  maturityDate: string
  status: "active" | "pending" | "completed"
}

export function PortfolioCard({
  id,
  title,
  type,
  investedAmount,
  currentValue,
  returnPercentage,
  maturityDate,
  status,
}: PortfolioCardProps) {
  // Determine badge color based on status
  const getBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Determine return color
  const getReturnColor = (returnPct: string) => {
    return returnPct.startsWith("+") ? "text-green-600" : "text-red-600"
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={getBadgeVariant(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            {type}
          </Badge>
        </div>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Invested Amount</p>
              <p className="font-medium">{investedAmount}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Current Value</p>
              <p className="font-medium">{currentValue}</p>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Return</p>
              <p className={`font-medium ${getReturnColor(returnPercentage)}`}>{returnPercentage}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Maturity Date</p>
              <p className="font-medium">{maturityDate}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/10 pt-4">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Details
          </Button>
          <Button className="flex-1 bg-royal text-white hover:bg-royal-light">Manage</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

