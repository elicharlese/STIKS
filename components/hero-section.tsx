import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Layers, BarChart3 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-royal/90 to-royal-dark/95 text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-royal-light/10 blur-3xl"></div>

      <div className="container px-4 md:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-royal-light/20 border border-gold/20 text-gold-light mb-4 max-w-max">
              <Layers className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Premier Financial Institution</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold tracking-tighter leading-tight text-balance">
                Sophisticated <span className="text-gold-light">Cryptocurrency</span> Financial Products
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-[650px]">
                STIKS delivers institutional-grade Collateralized Debt Obligations and structured financial products for
                the decentralized economy, combining traditional finance expertise with blockchain innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                className="bg-gold/90 text-black hover:bg-gold btn-enhanced text-base px-6 py-6 shadow-lg"
                asChild
                size="lg"
              >
                <Link href="/connect">Connect Wallet</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 btn-enhanced text-base px-6 py-6"
                size="lg"
                asChild
              >
                <Link href="/products">
                  Explore Products
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif font-bold text-gold-light">$250M+</span>
                <span className="text-sm text-gray-300">Total Value Locked</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif font-bold text-gold-light">15+</span>
                <span className="text-sm text-gray-300">Financial Products</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-serif font-bold text-gold-light">10,000+</span>
                <span className="text-sm text-gray-300">Active Investors</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Card stack effect */}
              <div className="absolute top-8 -right-4 w-full h-[320px] bg-royal-dark/80 rounded-xl border border-gold/10 transform rotate-6"></div>
              <div className="absolute top-4 -left-4 w-full h-[320px] bg-royal-dark/90 rounded-xl border border-gold/10 transform -rotate-3"></div>

              {/* Main card */}
              <div className="relative z-10 w-full h-[320px] bg-gradient-to-br from-royal-light/40 to-royal-dark/60 backdrop-blur-sm rounded-xl border border-gold/20 p-6 shadow-xl">
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <Layers className="h-6 w-6 text-gold" />
                      <span className="ml-2 font-serif text-xl font-medium">STIKS CDO</span>
                    </div>
                    <div className="px-3 py-1 bg-gold/20 rounded-full">
                      <span className="text-xs font-medium text-gold-light">Premium</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif font-bold mb-4 text-gold-light">Structured Tranches</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Senior Tranche</span>
                        <span className="text-sm font-medium">4-6% APY</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full">
                        <div className="bg-gold/70 h-full rounded-full w-[30%]"></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mezzanine Tranche</span>
                        <span className="text-sm font-medium">8-12% APY</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full">
                        <div className="bg-gold/70 h-full rounded-full w-[60%]"></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Junior Tranche</span>
                        <span className="text-sm font-medium">15-25% APY</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full">
                        <div className="bg-gold/70 h-full rounded-full w-[90%]"></div>
                      </div>
                    </div>
                  </div>

                  <Button variant="secondary" className="bg-gold/90 text-black hover:bg-gold w-full" asChild>
                    <Link href="/products/cdos">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Investment Options
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

