import { Badge } from "@/components/ui/badge"

export function TagManager() {
  const tags = [
    { id: 1, name: "High Yield", color: "bg-red-100 text-red-800 hover:bg-red-200" },
    { id: 2, name: "Stable", color: "bg-green-100 text-green-800 hover:bg-green-200" },
    { id: 3, name: "DeFi", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
    { id: 4, name: "Senior", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { id: 5, name: "Junior", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { id: 6, name: "Favorite", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag.id} variant="outline" className={`cursor-pointer ${tag.color}`}>
          {tag.name}
        </Badge>
      ))}
    </div>
  )
}

