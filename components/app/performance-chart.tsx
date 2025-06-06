import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3 } from "lucide-react"

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>Track the performance of your investments over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="value">
          <TabsList className="mb-4">
            <TabsTrigger value="value">Value</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>
          <TabsContent
            value="value"
            className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">Portfolio Value Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
          <TabsContent
            value="returns"
            className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">Returns Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
          <TabsContent
            value="comparison"
            className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <BarChart3 className="h-16 w-16 text-muted mb-2" />
              <p className="text-muted-foreground">Market Comparison Chart</p>
              <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

