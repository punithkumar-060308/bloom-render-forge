import { ArrowRight, Code2, Users, Kanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.png";
import CodeRainBackground from "@/components/CodeRainBackground";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <CodeRainBackground />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
              <span className="text-sm font-mono text-primary">v1.0 — Now Live</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Build <span className="text-gradient">together</span>,{" "}
              <br />
              ship faster.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 font-sans leading-relaxed">
              The collaboration hub where student developers create projects, 
              manage tasks, and build amazing things as a team.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 text-base px-8 h-12 rounded-xl transition-transform duration-200 hover:scale-105"
                onClick={() => navigate("/dashboard")}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base px-8 h-12 rounded-xl transition-colors duration-200 hover:bg-accent"
                onClick={() => navigate("/dashboard")}
              >
                Browse Projects
              </Button>
            </div>
          </div>

          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Developer collaboration illustration"
                className="relative rounded-2xl border border-border/50 shadow-2xl transition-shadow duration-300 hover:shadow-primary/10"
              />
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="mt-24 grid sm:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: "Create Projects", desc: "Spin up new projects and invite your team in seconds" },
            { icon: Kanban, title: "Manage Tasks", desc: "Kanban boards, assignments, and progress tracking" },
            { icon: Users, title: "Collaborate", desc: "Real-time updates, comments, and team coordination" },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
