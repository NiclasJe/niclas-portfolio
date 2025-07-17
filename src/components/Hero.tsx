import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-80 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-80 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-60 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-bold font-space mb-6">
            <span className="gradient-text text-5xl md:text-7xl block">Niclas Jernberg</span>
            <span className="text-4xl md:text-4xl block">Mobile App Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting innovative mobile experiences that delight users and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="h-10 w-10 p-2 flex items-center justify-center">
              <Github className="h-10 w-10 !w-full !h-full" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 p-2 flex items-center justify-center">
              <Linkedin className="h-10 w-10 !w-full !h-full" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
