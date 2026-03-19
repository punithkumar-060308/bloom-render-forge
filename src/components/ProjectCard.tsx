import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Clock, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/mock-data";

const statusStyles: Record<Project["status"], string> = {
  active: "bg-success/15 text-success border-success/30",
  planning: "bg-warning/15 text-warning border-warning/30",
  completed: "bg-muted text-muted-foreground border-border",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  const progress = Math.round((project.tasks.completed / project.tasks.total) * 100);

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="glass-card rounded-2xl p-6 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-mono font-semibold text-lg">
          {project.name}
        </h3>
        <Badge variant="outline" className={statusStyles[project.status]}>
          {project.status}
        </Badge>
      </div>

      <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
            {t}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            {project.tasks.completed}/{project.tasks.total} tasks
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.members.slice(0, 4).map((m) => (
            <Avatar key={m.name} className="w-7 h-7 border-2 border-card">
              <AvatarImage src={m.avatar} />
              <AvatarFallback className="text-xs">{m.name[0]}</AvatarFallback>
            </Avatar>
          ))}
          {project.members.length > 4 && (
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-card">
              +{project.members.length - 4}
            </div>
          )}
        </div>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" /> {project.updatedAt}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
