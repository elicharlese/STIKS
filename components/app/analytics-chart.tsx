import { BarChart3 } from "lucide-react"

export function AnalyticsChart() {
  return (
    <div className="h-[400px] w-full flex items-center justify-center bg-muted/20 rounded-md">
      <div className="flex flex-col items-center justify-center text-center">
        <BarChart3 className="h-16 w-16 text-muted mb-2" />
        <p className="text-muted-foreground">Portfolio Analytics Chart</p>
        <p className="text-xs text-muted-foreground">(Chart visualization would be implemented here)</p>
      </div>
    </div>
  )
}

