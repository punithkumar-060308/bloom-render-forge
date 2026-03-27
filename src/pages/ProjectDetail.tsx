import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Settings, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import TaskColumn from "@/components/TaskColumn";
import ProjectChat from "@/components/ProjectChat";
import { mockProjects, mockTasks, type Task } from "@/lib/mock-data";
import AppLayout from "@/components/AppLayout";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground font-mono">Project not found</p>
        </div>
      </AppLayout>
    );
  }

  const statuses: Task["status"][] = ["todo", "in-progress", "review", "done"];

  return (
    <AppLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 -ml-2 mb-3 text-muted-foreground"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Button>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
              <Badge variant="outline" className="capitalize">{project.status}</Badge>
            </div>
            <p className="text-muted-foreground mt-2 max-w-2xl">{project.description}</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 rounded-lg hidden sm:flex">
            <Settings className="w-4 h-4" /> Settings
          </Button>
        </div>

        {/* Project meta */}
        <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <div className="flex -space-x-2">
              {project.members.map((m) => (
                <Avatar key={m.name} className="w-7 h-7 border-2 border-background">
                  <AvatarImage src={m.avatar} />
                  <AvatarFallback className="text-xs">{m.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{project.members.length} members</span>
          </div>
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">main</span>
          </div>
          <div className="flex gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Task Board */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-mono">Task Board</h2>
            <Button size="sm" className="gap-1 rounded-lg">
              + Add Task
            </Button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {statuses.map((status) => (
              <TaskColumn key={status} status={status} tasks={mockTasks} />
            ))}
          </div>
        </div>

        {/* Team Chat */}
        <div className="mt-8">
          <ProjectChat />
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectDetail;
