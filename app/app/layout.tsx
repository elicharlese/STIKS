import type { ReactNode } from "react"
import { AppSidebar } from "@/components/app/app-sidebar"
import { AppHeader } from "@/components/app/app-header"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <AppSidebar />
      <div className="flex flex-col flex-1">
        <AppHeader />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

