import { Button } from "@/components/ui/button"
import { Folder } from "lucide-react"

export function FolderList() {
  const folders = [
    { id: 1, name: "High Risk" },
    { id: 2, name: "Medium Risk" },
    { id: 3, name: "Low Risk" },
    { id: 4, name: "Long Term" },
    { id: 5, name: "Short Term" },
  ]

  return (
    <div className="space-y-1">
      {folders.map((folder) => (
        <Button key={folder.id} variant="ghost" className="w-full justify-start text-sm">
          <Folder className="mr-2 h-4 w-4" />
          {folder.name}
        </Button>
      ))}
    </div>
  )
}

