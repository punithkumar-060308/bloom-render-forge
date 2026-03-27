import AppLayout from "@/components/AppLayout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  { name: "Alex", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", role: "Frontend Dev", projects: 3, status: "online" },
  { name: "Sam", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam", role: "Backend Dev", projects: 2, status: "online" },
  { name: "Jordan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan", role: "Full Stack", projects: 2, status: "away" },
  { name: "Casey", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey", role: "DevOps", projects: 2, status: "offline" },
  { name: "Riley", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley", role: "UI/UX Designer", projects: 2, status: "online" },
];

const statusColor: Record<string, string> = {
  online: "bg-success",
  away: "bg-warning",
  offline: "bg-muted-foreground",
};

const Team = () => {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-muted-foreground mt-1">Your collaborators across all projects</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div key={member.name} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${statusColor[member.status]}`} />
                </div>
                <div>
                  <h3 className="font-mono font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{member.projects} projects</span>
                <Badge variant="outline" className="capitalize text-xs">{member.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Team;
