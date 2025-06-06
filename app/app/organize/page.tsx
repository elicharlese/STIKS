import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FolderList } from "@/components/app/folder-list"
import { TagManager } from "@/components/app/tag-manager"
import { OrganizedAssets } from "@/components/app/organized-assets"
import { Plus, Search, Tag, Folder } from "lucide-react"

export default function OrganizePage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto pb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Organize</h1>
          <p className="text-muted-foreground">Organize and categorize your STIKS investments.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            New Tag
          </Button>
          <Button className="bg-royal text-white hover:bg-royal-light flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Folder
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 mb-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Organization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>

                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Folder className="mr-2 h-4 w-4" />
                    All Assets
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Folder className="mr-2 h-4 w-4" />
                    Favorites
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Folder className="mr-2 h-4 w-4" />
                    Recently Viewed
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Folders</h3>
                  <FolderList />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Tags</h3>
                  <TagManager />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-muted/20 text-royal">
              <TabsTrigger value="all" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                All Assets
              </TabsTrigger>
              <TabsTrigger value="folders" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Folders
              </TabsTrigger>
              <TabsTrigger value="tags" className="data-[state=active]:bg-royal data-[state=active]:text-white">
                Tags
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <OrganizedAssets />
            </TabsContent>

            <TabsContent value="folders" className="mt-6">
              <OrganizedAssets filter="folders" />
            </TabsContent>

            <TabsContent value="tags" className="mt-6">
              <OrganizedAssets filter="tags" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

