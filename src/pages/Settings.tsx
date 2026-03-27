import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
        </div>

        <div className="space-y-8">
          {/* Profile */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-mono font-semibold text-lg mb-4">Profile</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm">Display Name</Label>
                <Input id="name" defaultValue="Student Dev" className="mt-1.5 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input id="email" defaultValue="student@university.edu" className="mt-1.5 rounded-xl" />
              </div>
              <Button className="rounded-xl">Save Changes</Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-mono font-semibold text-lg mb-4">Notifications</h2>
            <div className="space-y-4">
              {[
                { label: "Email notifications", desc: "Receive updates about your projects" },
                { label: "Task assignments", desc: "Get notified when assigned a task" },
                { label: "Chat messages", desc: "Notify on new team messages" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="glass-card rounded-2xl p-6 border-destructive/30">
            <h2 className="font-mono font-semibold text-lg mb-2 text-destructive">Danger Zone</h2>
            <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all data.</p>
            <Button variant="destructive" className="rounded-xl">Delete Account</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
