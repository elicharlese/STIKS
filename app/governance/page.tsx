import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, Vote, Clock } from "lucide-react"
import Link from "next/link"

export default function GovernancePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Decentralized Governance</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              STIKS is governed by a Decentralized Autonomous Organization (DAO) to ensure transparent and democratic
              decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Governance Works</h2>
                <p className="text-muted-foreground md:text-lg">
                  STIKS governance is powered by our native governance token, allowing token holders to propose and vote
                  on changes to the protocol. This ensures that the platform evolves according to the collective will of
                  its users.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-muted/20 border border-muted p-6">
                <div className="h-full flex flex-col justify-center items-center">
                  <Users className="h-24 w-24 mb-6 text-primary/80" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Community-Driven</h3>
                    <p className="text-muted-foreground">
                      Decisions made by token holders through transparent voting processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Active Proposals</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Current governance proposals open for voting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>STIK-23: New CDO Structure</CardTitle>
                    <CardDescription>Proposal to introduce a new CDO structure with four tranches.</CardDescription>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium rounded-full bg-gold/20 text-gold-dark">
                    Voting Active
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Votes For: 65%</span>
                    <span>Votes Against: 35%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-muted [&>div]:bg-gold" />

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Ends in 3 days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/governance/proposals/stik-23">View Details</Link>
                </Button>
                <Button className="bg-royal hover:bg-royal-light">
                  <Vote className="mr-2 h-4 w-4" />
                  Cast Vote
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>STIK-24: Treasury Allocation</CardTitle>
                    <CardDescription>Proposal to allocate 10% of treasury to research and development.</CardDescription>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium rounded-full bg-gold/20 text-gold-dark">
                    Voting Active
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Votes For: 78%</span>
                    <span>Votes Against: 22%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-muted [&>div]:bg-gold" />

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Ends in 5 days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/governance/proposals/stik-24">View Details</Link>
                </Button>
                <Button className="bg-royal hover:bg-royal-light">
                  <Vote className="mr-2 h-4 w-4" />
                  Cast Vote
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-royal hover:bg-royal-light" asChild>
              <Link href="/governance/proposals">View All Proposals</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Governance Process</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                How proposals move from idea to implementation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle>Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Community members discuss ideas and potential improvements in the forum.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle>Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Ideas are formalized into proposals and submitted for consideration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle>Voting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Token holders vote on proposals, with voting power proportional to holdings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Approved proposals are implemented by the development team.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/governance/forum">Join Discussion Forum</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

