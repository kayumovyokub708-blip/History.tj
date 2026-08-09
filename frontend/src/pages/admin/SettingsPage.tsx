import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted">Platform configuration</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Site Name</label>
            <input
              defaultValue="History.tj"
              className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Default Language</label>
            <select className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option>Tajik</option>
              <option>Russian</option>
              <option>English</option>
            </select>
          </div>
          <Button>Save changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Admin Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              defaultValue="admin@history.tj"
              className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">New Password</label>
            <input
              type="password"
              placeholder="Leave blank to keep current"
              className="w-full h-10 px-3 rounded-lg bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <Button>Update account</Button>
        </CardContent>
      </Card>
    </div>
  )
}
