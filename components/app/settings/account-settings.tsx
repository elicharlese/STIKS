"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Wallet, DollarSign, Clock } from "lucide-react"

export function AccountSettings() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Connected Wallets</CardTitle>
          <CardDescription>Manage your connected cryptocurrency wallets.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Wallet className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">Phantom Wallet</p>
                <p className="text-sm text-muted-foreground">8xH7...F9j2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Disconnect
              </Button>
              <Button variant="ghost" size="sm" className="text-royal">
                Primary
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <Wallet className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="font-medium">Solflare Wallet</p>
                <p className="text-sm text-muted-foreground">3jK9...L7m5</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Disconnect
              </Button>
              <Button variant="outline" size="sm">
                Set as Primary
              </Button>
            </div>
          </div>

          <Button className="mt-2 bg-royal text-white hover:bg-royal-light">
            <Wallet className="h-4 w-4 mr-2" />
            Connect New Wallet
          </Button>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Investment Preferences</CardTitle>
            <CardDescription>Configure your default investment settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="defaultCurrency">Default Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="defaultCurrency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="riskTolerance">
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="defaultInvestment">Default Investment Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input id="defaultInvestment" className="pl-10" defaultValue="5000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredLockPeriod">Preferred Lock Period</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input id="preferredLockPeriod" className="pl-10" defaultValue="60" />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">days</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="autoReinvest">Auto-Reinvest Returns</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically reinvest your returns when investments mature
                </p>
              </div>
              <Switch id="autoReinvest" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 border-t pt-6">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" className="bg-royal text-white hover:bg-royal-light" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

