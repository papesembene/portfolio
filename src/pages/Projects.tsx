import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, MessageSquare, GraduationCap, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Chat Messagerie",
      description: "Application de messagerie en temps réel",
      technologies: ["Vanilla JavaScript", "JSON-Server"],
      category: "Web",
      icon: MessageSquare,
      github: "https://github.com/papesembene/senChat.git",
    },
    {
      title: "Gestion des Apprenants",
      description: "Système de gestion des étudiants et formations",
      technologies: ["PHP Native", "JSON"],
      category: "Web",
      icon: GraduationCap,
      github: "https://github.com/papesembene/SONTEL_ACADEMY_PHP1.git",
    },
    {
      title: "Gestion des Étudiants",
      description: "Plateforme complète de gestion académique",
      technologies: ["Laravel", "PostgreSQL"],
      category: "Full Stack",
      icon: Users,
      github: "https://github.com/papesembene/Gestion_Students.git",
    },
    {
      title: "Gestion des Produits & Stocks",
      description: "Système e-commerce avec gestion des commandes",
      technologies: ["Laravel", "PostgreSQL"],
      category: "Full Stack",
      icon: Package,
      github: "https://github.com/papesembene/Product-Manager_Laravel.git",
    },
    {
      title: "Système de Recrutement",
      description: "Plateforme de gestion des candidatures",
      technologies: ["PHP", "JavaScript", "MySQL"],
      category: "Web",
      icon: Users,
    },
    {
      title: "Gestion des Tâches",
      description: "Application de suivi et organisation des tâches",
      technologies: ["Python", "Flask", "PostgreSQL"],
      category: "Full Stack",
      icon: Package,
    },
    {
      title: "Gestion de Bibliothèque ISI",
      description: "Analyse et conception d'un système de bibliothèque",
      technologies: ["UML", "PowerAMC"],
      category: "Analyse",
      icon: GraduationCap,
    },
    {
      title: "Gestion Hôtelière",
      description: "Système de réservation et gestion clients",
      technologies: ["C", "File System"],
      category: "Desktop",
      icon: Package,
    },
    {
      title: "Calculatrice Scientifique",
      description: "Application de calculs avancés",
      technologies: ["C#", "WinForms"],
      category: "Desktop",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">Projets</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez mes réalisations académiques et personnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-effect hover-lift group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <project.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github ? (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full group"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="w-full group" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    <Button size="sm" className="w-full group">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Détails
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
