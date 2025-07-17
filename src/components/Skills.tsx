import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Flutter", "Android", "iOS"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-teal-500",
      skills: ["Dart", "Kotlin", "Java", "Swift", "C#", "C++", "C", "TypeScript", "Python"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      title: "Backend & APIs",
      icon: <Database className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["Firebase Firestore", "Firebase Auth", "BankID", "Spotify API", "SQL"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
      skills: ["Azure", "Google Cloud", "Jira", "Firebase", "GitHub"]
    },
    {
      title: "Security & Testing",
      icon: <Shield className="h-6 w-6" />,
      color: "from-teal-500 to-green-500",
      skills: ["Fireebase Auth", "JUnit", "BankID", "Mockito", "Jenkins"]
    },
    {
      title: "Collaboration",
      icon: <Users className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      skills: ["Git", "Jira", "Azure", "Gerrit"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building world-class mobile applications
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-5">
            {skillCategories.slice(0, 4).map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-slide-in-right flex flex-col items-stretch" style={{animationDelay: `${index * 0.1}s`, width: '320px', height: '200px'}}>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-5">
            {skillCategories.slice(4).map((category, index) => (
              <Card key={index + 4} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-slide-in-right flex flex-col items-stretch" style={{animationDelay: `${(index + 4) * 0.1}s`, width: '320px', height: '200px'}}>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
