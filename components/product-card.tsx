import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

interface ProductCardProps {
  title: string
  description: string
  icon: ReactNode
  link: string
}

export function ProductCard({ title, description, icon, link }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full border-2 border-muted hover:border-gold/30 transition-colors card-enhanced">
      <CardHeader className="pb-4">
        <div className="mb-4 text-royal">{icon}</div>
        <CardTitle className="text-2xl font-serif mb-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 py-4">
        <CardDescription className="text-base leading-relaxed text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          variant="ghost"
          className="w-full justify-between text-royal hover:text-gold hover:bg-royal/5 text-base py-6"
          asChild
        >
          <Link href={link}>
            Learn More
            <ChevronRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

