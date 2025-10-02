import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: Code,
      skills: ["C", "C++", "C#", "Java", "Python", "PHP", "JavaScript", "TypeScript"],
    },
    {
      title: "Développement Web",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "React.js", "Vue.js", "Laravel"],
    },
    {
      title: "Bases de données",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    },
    {
      title: "Outils & Environnements",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "UML",
        "Figma",
        "VS Code",
        "PhpStorm",
        "IntelliJ IDEA",
        "PowerAMC",
        "PyCharm",
        "Android Studio",
        "Laragon",
        "Docker",
      ],
    },
    {
      title: "Compétences transversales",
      icon: Users,
      skills: [
        "Travail en équipe",
        "Adaptabilité",
        "Gestion du temps",
        "Curiosité technologique",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">Compétences</h1>
          <p className="text-xl text-muted-foreground">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <category.icon className="w-6 h-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl">Autres compétences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <p className="text-lg">API REST</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <p className="text-lg">Développement Low Code / No Code</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <p className="text-lg">Architecture logicielle & UML</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
