import { GraduationCap, Award, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      year: "2024-2025",
      title: "Formation en développement web et mobile",
      institution: "Sonatel Académie",
    },
    {
      year: "2023-2024",
      title: "Licence 3 en génie logiciel",
      institution: "Institut Supérieur d'Informatique (ISI)",
    },
    {
      year: "2022-2023",
      title: "BTS en informatique appliquée à la gestion des entreprises",
      institution: "Institut Supérieur d'Informatique",
    },
    {
      year: "2019-2020",
      title: "Baccalauréat S2",
      institution: "Lycée Moderne de Rufisque",
    },
  ];

  const certifications = [
    "Développement Low Code No Code",
    "Développement Frontend",
    "Modern JavaScript: Iterators and Generators",
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gradient">À propos de moi</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développeur passionné avec une solide formation en génie logiciel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-effect hover-lift">
            <CardContent className="p-6 flex items-center gap-4">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Localisation</p>
                <p className="font-semibold">Rufisque, Sénégal</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect hover-lift">
            <CardContent className="p-6 flex items-center gap-4">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">sembenpape4@gmail.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect hover-lift">
            <CardContent className="p-6 flex items-center gap-4">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <p className="font-semibold">78 115 77 73</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formation académique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="flex gap-4 hover-lift p-4 rounded-lg transition-all">
                  <div className="min-w-[100px] text-primary font-semibold">
                    {item.year}
                  </div>
                  <div className="border-l-2 border-primary pl-4 space-y-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 glass-effect rounded-lg hover-lift text-center"
                >
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
