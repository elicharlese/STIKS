export function StatsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal font-serif mb-3">$250M+</div>
            <div className="text-base md:text-lg text-muted-foreground">Total Value Locked</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal font-serif mb-3">15+</div>
            <div className="text-base md:text-lg text-muted-foreground">Financial Products</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal font-serif mb-3">10,000+</div>
            <div className="text-base md:text-lg text-muted-foreground">Active Investors</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal font-serif mb-3">99.9%</div>
            <div className="text-base md:text-lg text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

