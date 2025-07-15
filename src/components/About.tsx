
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, MapPin, Calendar } from "lucide-react";

const About = () => {
  const achievements = [
    { title: "Apps Published", count: "15+", icon: "📱" },
    { title: "Downloads", count: "500K+", icon: "⬇️" },
    { title: "Years Experience", count: "5+", icon: "💼" },
    { title: "Happy Clients", count: "50+", icon: "😊" }
  ];

  const experience = [
    {
      role: "Senior Mobile Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      highlights: [
        "Led development of flagship iOS/Android apps with 100K+ users",
        "Mentored junior developers and established coding standards",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      role: "Mobile App Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      highlights: [
        "Built cross-platform apps using React Native and Flutter",
        "Collaborated with design team to create intuitive user interfaces",
        "Optimized app performance resulting in 40% faster load times"
      ]
    },
    {
      role: "Junior Developer",
      company: "Digital Solutions",
      period: "2019 - 2020",
      location: "New York, NY",
      highlights: [
        "Developed native iOS applications using Swift and SwiftUI",
        "Participated in agile development process and code reviews",
        "Contributed to open-source mobile development libraries"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate mobile developer with a love for creating exceptional user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 animate-slide-in-left">
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                    MD
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Mobile Developer</h3>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      San Francisco, CA
                    </p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate mobile developer with over 5 years of experience creating innovative 
                  mobile applications that users love. My expertise spans across native iOS and Android 
                  development, as well as cross-platform solutions using React Native and Flutter.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  I believe in writing clean, maintainable code and creating intuitive user interfaces 
                  that provide exceptional user experiences. I'm constantly learning new technologies 
                  and staying up-to-date with the latest mobile development trends.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">iOS Development</Badge>
                  <Badge variant="secondary">Android Development</Badge>
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
                </div>
                
                <Button size="lg" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{achievement.icon}</span>
                        <span className="font-medium">{achievement.title}</span>
                      </div>
                      <span className="text-lg font-bold text-primary">{achievement.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional <span className="gradient-text">Experience</span>
          </h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.role}</h4>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </p>
                      <p className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
