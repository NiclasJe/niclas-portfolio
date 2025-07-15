
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HealthTracker Pro",
      description: "A comprehensive health monitoring app with real-time vitals tracking, workout plans, and nutrition guidance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "TypeScript", "Redux"],
      category: "Health & Fitness",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "TaskMaster",
      description: "An intuitive task management app with team collaboration features and AI-powered productivity insights.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Flutter", "Node.js", "MongoDB", "AI/ML"],
      category: "Productivity",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "FoodieExplorer",
      description: "Discover local restaurants, read reviews, and order food with this social dining experience app.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["Swift", "SwiftUI", "Core Data", "MapKit"],
      category: "Food & Dining",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "CryptoWallet",
      description: "Secure cryptocurrency wallet with multi-currency support, portfolio tracking, and trading features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Kotlin", "Blockchain", "Security", "API"],
      category: "Finance",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "MindfulMoments",
      description: "Meditation and mindfulness app with guided sessions, progress tracking, and community features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["React Native", "Audio", "Analytics", "Push Notifications"],
      category: "Wellness",
      color: "from-teal-400 to-blue-500"
    },
    {
      title: "ShopSmart",
      description: "E-commerce app with AR try-on features, personalized recommendations, and seamless checkout.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      tags: ["ARKit", "Swift", "Machine Learning", "Payment"],
      category: "E-commerce",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest mobile applications showcasing innovative features and exceptional user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-left border-0 shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="backdrop-blur-sm bg-white/80">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
