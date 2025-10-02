import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import profileImage from "@/assets/profile.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Bonjour, je suis</p>
            <h1 className="text-5xl md:text-6xl font-bold">
              Pape Birame Sembene <br />
              <TypewriterEffect
                texts={["Développeur Fullstack", "Web/Mobile"]}
              />
            </h1>
            <p className="text-sm text-primary font-semibold pt-2">SEM'S - Coding to Success</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Diplômé en génie logiciel à ISI et apprenant à la Sonatel Académie. 
            Passionné par le développement web et mobile, je recherche des opportunités 
            pour contribuer à des projets innovants.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <Button className="group">
                Voir mes projets
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" className="group">
              <Download className="mr-2 w-4 h-4" />
              Télécharger CV
            </Button>
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/pape-birame-sembene-83159822b/', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => window.open('https://github.com/papesembene', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex gap-6 pt-4">
            <div className="glass-effect p-4 rounded-lg hover-lift">
              <p className="text-3xl font-bold text-gradient">3+</p>
              <p className="text-sm text-muted-foreground">Années d'études</p>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-lift">
              <p className="text-3xl font-bold text-gradient">10+</p>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-lift">
              <p className="text-3xl font-bold text-gradient">3</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-3xl opacity-20 animate-glow-pulse" />
          <img
            src={profileImage}
            alt="Pape Birame Sembene"
            className="relative w-full max-w-md mx-auto rounded-2xl glass-effect p-2 animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
