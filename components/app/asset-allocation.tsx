import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "lucide-react"

export function AssetAllocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Distribution of your investments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full flex items-center justify-center bg-muted/20 rounded-md">
          <div className="flex flex-col items-center justify-center text-center">
            <PieChart className="h-16 w-16 text-muted mb-2" />
            <p className="text-muted-foreground">Asset Allocation Chart</p>
            <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Senior Tranches</span>
            <div className="flex items-center justify-between">
              <span className="font-medium">35%</span>
              <div className="w-16 h-2 bg-royal/30 rounded-full">
                <div className="h-full bg-royal rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Mezzanine Tranches</span>
            <div className="flex items-center justify-between">
              <span className="font-medium">45%</span>
              <div className="w-16 h-2 bg-royal/30 rounded-full">
                <div className="h-full bg-royal rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Junior Tranches</span>
            <div className="flex items-center justify-between">
              <span className="font-medium">10%</span>
              <div className="w-16 h-2 bg-royal/30 rounded-full">
                <div className="h-full bg-royal rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">STIK PAKS</span>
            <div className="flex items-center justify-between">
              <span className="font-medium">10%</span>
              <div className="w-16 h-2 bg-royal/30 rounded-full">
                <div className="h-full bg-royal rounded-full" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

