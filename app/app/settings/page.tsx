import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "@/components/app/settings/profile-settings"
import { AccountSettings } from "@/components/app/settings/account-settings"
import { NotificationSettings } from "@/components/app/settings/notification-settings"
import { SecuritySettings } from "@/components/app/settings/security-settings"
import { DisplaySettings } from "@/components/app/settings/display-settings"

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto pb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-muted/20 text-royal w-full justify-start border-b rounded-none p-0 h-auto">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-transparent data-[state=active]:text-royal data-[state=active]:border-b-2 data-[state=active]:border-royal rounded-none py-3 px-4"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-transparent data-[state=active]:text-royal data-[state=active]:border-b-2 data-[state=active]:border-royal rounded-none py-3 px-4"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-transparent data-[state=active]:text-royal data-[state=active]:border-b-2 data-[state=active]:border-royal rounded-none py-3 px-4"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-transparent data-[state=active]:text-royal data-[state=active]:border-b-2 data-[state=active]:border-royal rounded-none py-3 px-4"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="display"
            className="data-[state=active]:bg-transparent data-[state=active]:text-royal data-[state=active]:border-b-2 data-[state=active]:border-royal rounded-none py-3 px-4"
          >
            Display
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="account" className="mt-6 space-y-6">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="display" className="mt-6 space-y-6">
          <DisplaySettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

