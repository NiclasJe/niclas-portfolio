import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, MapPin, Calendar, Upload } from "lucide-react";

const About = () => {

  const experience = [
    {
      role: "Software developer",
      company: "Gebhardt Nordic AB",
      period: "2023 - Present",
      location: "Göteborg, Sweden",
      highlights: [
        "Full stack .NET development",
        "Development of desktop applications for intralogistics systems",
        "Responsible for the entire development cycle - from requirements gathering to delivery",
        "Close collaboration with clients to ensure functional and efficient solutions",
        "Close collaboration with cross-functional teams including hardware, UX, and product management"
      ],
      technologies: ["C#", "WPF", "SQL Server", "Azure"]
    },
    {
      role: "Android Developer",
      company: "CPAC Systems AB",
      period: "2022 - 2023",
      location: "Göteborg, Sweden",
      highlights: [
        "Full stack Android software development for Volvo Construction Equipment Co-Pilot systems",
        "Embedded systems development, including hardware-near programming and integration",
        "Modeling and simulation of complex machine behavior and system interactions",
        "Responsible for the full product lifecycle - from concept and architecture to implementation, testing, and deployment",
        "Collaborated closely with cross-functional teams including hardware, UX, and product management"
      ],
      technologies: ["Java", "Kotlin", "C/C++", "Android", "Matlab", "Jenkins", "Jira"]
    },
    {
      role: "Flutter Developer",
      company: "Carmark AB",
      period: "2019 - 2022",
      location: "Göteborg, Sweden",
      highlights: [
        "Co-founded a startup focused on advertising and marketing solutions",
        "Developed cross-platform mobile applications using Flutter and Dart to track advertisment on wrapped vehicles"
      ],
      technologies: ["Dart", "Java", "Kotlin", "C#", "Flutter", "Android", "Jira"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A well experienced mobile developer passionate about combining the latest technology with thoughtful design.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="animate-slide-in-left w-full max-w-3xl">
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/images/niclas.jpeg" 
                    alt="Niclas Jernberg" 
                    className="w-20 h-20 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Niclas Jernberg</h3>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Göteborg/Karlstad, Sweden
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate mobile developer with over 5 years of experience creating innovative
                  mobile applications for all purposes. My expertise covers both cross-platform
                  development with Flutter and native Android development, enabling me to build robust
                  and scalable solutions across platforms.
                </p>

                <p className="text-muted-foreground mb-6">
                  I am a mobile developer who values clean, maintainable code and intuitive user interfaces
                  that elevate the overall user experience. I stay consistently engaged with new
                  technologies and keep up with the latest trends in mobile development — there is rarely
                  a day when I am not building something new or learning a new tool or concept.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the years, I have had the privilege of working closely with industry experts, which
                  has helped accelerate my growth and deepen my technical knowledge. Through a combination
                  of professional roles and personal projects, I have built up substantial experience in
                  mobile app development, particularly within Flutter and Android.
                </p>

                <p className="text-muted-foreground mb-6">
                  My previous experiences have given me a strong understanding of the full software
                  development lifecycle — from initial idea and design, through development and testing,
                  all the way to release, post-launch support, and iteration based on user feedback.
                  This holistic perspective allows me to contribute not only as a developer but as a
                  product-minded team member who understands the importance of usability, quality, and
                  long-term maintainability.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">Android</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
                  <Badge variant="secondary">5+ years experience</Badge>
                  <Badge variant="secondary">3 published apps</Badge>
                </div>

                <a
                  href="/CV 2025 Niclas Jernberg - English.pdf"
                  download="CV 2025 Niclas Jernberg - English.pdf"
                  className="inline-flex"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-fade-in mt-32">
          <h3 className="text-3xl font-bold text-center mb-16">
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies && exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
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

export default About;
