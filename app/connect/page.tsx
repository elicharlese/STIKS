"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRight, Shield, AlertTriangle } from "lucide-react"

export default function ConnectWalletPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = async (walletType: string) => {
    setIsConnecting(true)

    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress = "8xH7...F9j2"
      setWalletAddress(mockAddress)
      setIsConnected(true)
      setIsConnecting(false)
    }, 1500)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 max-w-[800px] mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connect Your Wallet</h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              Connect your Solana wallet to access STIKS financial products and services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          {!isConnected ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Phantom</CardTitle>
                  <CardDescription>Connect with Phantom Wallet</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex justify-center py-6">
                    <Wallet className="h-16 w-16 text-purple-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-royal hover:bg-royal-light"
                    onClick={() => handleConnect("phantom")}
                    disabled={isConnecting}
                  >
                    {isConnecting ? "Connecting..." : "Connect"}
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Solflare</CardTitle>
                  <CardDescription>Connect with Solflare Wallet</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex justify-center py-6">
                    <Wallet className="h-16 w-16 text-orange-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-royal hover:bg-royal-light"
                    onClick={() => handleConnect("solflare")}
                    disabled={isConnecting}
                  >
                    {isConnecting ? "Connecting..." : "Connect"}
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Ledger</CardTitle>
                  <CardDescription>Connect with Ledger Hardware Wallet</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex justify-center py-6">
                    <Shield className="h-16 w-16 text-blue-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-royal hover:bg-royal-light"
                    onClick={() => handleConnect("ledger")}
                    disabled={isConnecting}
                  >
                    {isConnecting ? "Connecting..." : "Connect"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <Card className="max-w-[500px] mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gold" />
                  Wallet Connected
                </CardTitle>
                <CardDescription>Your wallet has been successfully connected to STIKS.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-4 py-4">
                  <Wallet className="h-16 w-16 text-green-500" />
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Wallet Address</p>
                    <p className="font-mono font-medium">{walletAddress}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full bg-royal hover:bg-royal-light" asChild>
                  <a href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4" />
                  <p>Never share your private keys or seed phrase with anyone.</p>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>
    </main>
  )
}

