"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Layers,
  LayoutDashboard,
  ShoppingCart,
  PieChart,
  BarChart3,
  FolderKanban,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/app",
      active: pathname === "/app",
    },
    {
      label: "Purchase",
      icon: ShoppingCart,
      href: "/app/purchase",
      active: pathname === "/app/purchase",
    },
    {
      label: "Portfolio",
      icon: PieChart,
      href: "/app/portfolio",
      active: pathname === "/app/portfolio",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/app/analytics",
      active: pathname === "/app/analytics",
    },
    {
      label: "Organize",
      icon: FolderKanban,
      href: "/app/organize",
      active: pathname === "/app/organize",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/app/settings",
      active: pathname === "/app/settings",
    },
  ]

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-royal text-white border-r border-royal-light/20 overflow-hidden">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-gold" />
          <span className="text-xl font-serif font-semibold">STIKS</span>
        </Link>
      </div>

      <div className="flex-1 px-3 py-4 overflow-y-auto">
        <div className="space-y-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white/70 hover:text-white hover:bg-white/10",
                route.active && "bg-white/10 text-white",
              )}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-5 w-5" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-royal-light/20">
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
            asChild
          >
            <Link href="/docs">
              <HelpCircle className="mr-2 h-5 w-5" />
              Help & Support
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
            <LogOut className="mr-2 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}

