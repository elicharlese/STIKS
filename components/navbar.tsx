"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BarChart3, ChevronDown, Menu, Layers, X, Wallet } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-royal text-white backdrop-blur supports-[backdrop-filter]:bg-royal/95">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Layers className="h-7 w-7 text-gold-light" />
            <span className="text-2xl font-serif font-semibold tracking-tight">STIKS</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link
            href="/products"
            className="text-base font-medium hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/governance"
            className="text-base font-medium hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Governance
          </Link>
          <Link
            href="/analytics"
            className="text-base font-medium hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Analytics
          </Link>
          <Link
            href="/docs"
            className="text-base font-medium hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Documentation
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="border-gold-light text-gold-light hover:bg-royal-light hover:text-gold btn-enhanced"
            asChild
          >
            <Link href="/connect">
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-gold-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-6 bg-royal">
          <nav className="flex flex-col gap-5">
            <Link
              href="/products"
              className="flex items-center gap-3 text-base font-medium text-white hover:text-gold-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="/governance"
              className="flex items-center gap-3 text-base font-medium text-white hover:text-gold-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Layers className="h-5 w-5" />
              Governance
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-3 text-base font-medium text-white hover:text-gold-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="/docs"
              className="flex items-center gap-3 text-base font-medium text-white hover:text-gold-light transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronDown className="h-5 w-5" />
              Documentation
            </Link>
            <Button size="lg" className="mt-4 bg-gold text-black hover:bg-gold-light btn-enhanced" asChild>
              <Link href="/connect" onClick={() => setIsMenuOpen(false)}>
                <Wallet className="mr-2 h-5 w-5" />
                Connect Wallet
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

