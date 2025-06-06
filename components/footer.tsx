import Link from "next/link"
import { Layers } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-royal text-white py-10 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Layers className="h-6 w-6 text-gold-light" />
          <span className="text-xl font-serif font-semibold">STIKS</span>
        </div>
        <nav className="flex gap-6 sm:gap-8">
          <Link
            href="/terms"
            className="text-sm md:text-base text-gray-300 hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm md:text-base text-gray-300 hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/disclaimer"
            className="text-sm md:text-base text-gray-300 hover:text-gold-light hover:underline underline-offset-4 transition-colors"
          >
            Risk Disclaimer
          </Link>
        </nav>
        <p className="text-sm md:text-base text-gray-400">© {new Date().getFullYear()} STIKS. All rights reserved.</p>
      </div>
    </footer>
  )
}

