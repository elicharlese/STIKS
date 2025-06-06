import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, Clock, DollarSign, AlertTriangle } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  type: string
  riskLevel: string
  expectedReturn: string
  minInvestment: string
  lockPeriod: string
  description: string
}

export function ProductCard({
  id,
  title,
  type,
  riskLevel,
  expectedReturn,
  minInvestment,
  lockPeriod,
  description,
}: ProductCardProps) {
  // Determine badge color based on risk level
  const getBadgeVariant = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={getBadgeVariant(riskLevel)}>
            {riskLevel} Risk
          </Badge>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            {type}
          </Badge>
        </div>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Expected Return</p>
              <p className="font-medium">{expectedReturn}</p>
            </div>
          </div>
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Min Investment</p>
              <p className="font-medium">{minInvestment}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Lock Period</p>
              <p className="font-medium">{lockPeriod}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Layers className="h-4 w-4 text-muted-foreground mr-2" />
            <div>
              <p className="text-xs text-muted-foreground">Product Type</p>
              <p className="font-medium">{type}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/10 pt-4">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Details
          </Button>
          <Button className="flex-1 bg-royal text-white hover:bg-royal-light">Invest</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

