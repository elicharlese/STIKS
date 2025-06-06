"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationSettings() {
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
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how and when you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="email">
            <TabsList className="mb-4">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="push">Push Notifications</TabsTrigger>
              <TabsTrigger value="sms">SMS</TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailInvestmentUpdates">Investment Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about your investments</p>
                </div>
                <Switch id="emailInvestmentUpdates" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailMarketAlerts">Market Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts about significant market changes</p>
                </div>
                <Switch id="emailMarketAlerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailNewProducts">New Products</Label>
                  <p className="text-sm text-muted-foreground">
                    Be notified when new investment products are available
                  </p>
                </div>
                <Switch id="emailNewProducts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailMaturityReminders">Maturity Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders when your investments are about to mature
                  </p>
                </div>
                <Switch id="emailMaturityReminders" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="emailNewsletters">Newsletters</Label>
                  <p className="text-sm text-muted-foreground">Receive our weekly newsletter with market insights</p>
                </div>
                <Switch id="emailNewsletters" />
              </div>
            </TabsContent>

            <TabsContent value="push" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="pushInvestmentUpdates">Investment Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about your investments</p>
                </div>
                <Switch id="pushInvestmentUpdates" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="pushMarketAlerts">Market Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts about significant market changes</p>
                </div>
                <Switch id="pushMarketAlerts" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="pushNewProducts">New Products</Label>
                  <p className="text-sm text-muted-foreground">
                    Be notified when new investment products are available
                  </p>
                </div>
                <Switch id="pushNewProducts" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="pushMaturityReminders">Maturity Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders when your investments are about to mature
                  </p>
                </div>
                <Switch id="pushMaturityReminders" defaultChecked />
              </div>
            </TabsContent>

            <TabsContent value="sms" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="smsInvestmentUpdates">Investment Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about your investments</p>
                </div>
                <Switch id="smsInvestmentUpdates" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="smsMarketAlerts">Market Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts about significant market changes</p>
                </div>
                <Switch id="smsMarketAlerts" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="smsMaturityReminders">Maturity Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders when your investments are about to mature
                  </p>
                </div>
                <Switch id="smsMaturityReminders" defaultChecked />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-2 pt-4 border-t">
            <Label htmlFor="notificationFrequency">Notification Frequency</Label>
            <Select defaultValue="realtime">
              <SelectTrigger id="notificationFrequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Summary</SelectItem>
              </SelectContent>
            </Select>
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
  )
}

