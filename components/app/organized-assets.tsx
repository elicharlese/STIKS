import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Layers, MoreHorizontal } from "lucide-react"

interface OrganizedAssetsProps {
  filter?: "folders" | "tags"
}

export function OrganizedAssets({ filter }: OrganizedAssetsProps) {
  const assets = [
    {
      id: 1,
      name: "Blue Chip CDO",
      type: "Senior Tranche",
      value: "$10,450",
      tags: ["Stable", "Senior"],
      folder: "Low Risk",
    },
    {
      id: 2,
      name: "Balanced Growth CDO",
      type: "Mezzanine Tranche",
      value: "$16,350",
      tags: ["DeFi", "Favorite"],
      folder: "Medium Risk",
    },
    {
      id: 3,
      name: "DeFi Opportunity CDO",
      type: "Junior Tranche",
      value: "$18,431",
      tags: ["High Yield", "Junior", "DeFi"],
      folder: "High Risk",
    },
  ]

  // Filter assets based on the filter prop
  const filteredAssets = assets

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing {filteredAssets.length} assets</p>
        <Button variant="outline" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {filteredAssets.map((asset) => (
          <Card key={asset.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id={`asset-${asset.id}`} />
                  <div>
                    <CardTitle className="text-lg">{asset.name}</CardTitle>
                    <CardDescription>{asset.type}</CardDescription>
                  </div>
                </div>
                <Badge>{asset.folder}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Current Value</span>
                </div>
                <span className="font-medium">{asset.value}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex flex-wrap gap-2">
                {asset.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

