"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Menu, X } from "lucide-react"
import Link from "next/link"

export function AppHeader() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center bg-white border-b px-4 shadow-sm">
      <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      <div className="flex-1 flex items-center">
        <div className="relative w-full max-w-md hidden md:flex">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search..." className="pl-10 bg-muted/30 border-none" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                <AvatarFallback className="bg-royal text-white">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/app/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/app/portfolio">Portfolio</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/docs">Help & Support</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {showMobileMenu && (
        <div className="fixed top-16 left-0 right-0 bg-white border-b p-4 md:hidden z-30 shadow-md">
          <div className="relative w-full mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search..." className="pl-10 bg-muted/30 w-full" />
          </div>
          <nav className="flex flex-col space-y-2">
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/app">Dashboard</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/app/purchase">Purchase</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/app/portfolio">Portfolio</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/app/analytics">Analytics</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/app/organize">Organize</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/app/settings">Settings</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

