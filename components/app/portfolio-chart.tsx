import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3 } from "lucide-react"

export function PortfolioChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Growth</CardTitle>
        <CardDescription>Track the growth of your portfolio over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Time</TabsTrigger>
            <TabsTrigger value="year">1 Year</TabsTrigger>
            <TabsTrigger value="month">1 Month</TabsTrigger>
            <TabsTrigger value="week">1 Week</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">Portfolio Growth Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
          <TabsContent
            value="year"
            className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">1 Year Growth Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
          <TabsContent
            value="month"
            className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">1 Month Growth Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
          <TabsContent
            value="week"
            className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">1 Week Growth Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

