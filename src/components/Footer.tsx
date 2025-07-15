
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-space mb-4">
              <span className="gradient-text">Mobile Developer</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating exceptional mobile experiences that users love. Specializing in iOS, Android, and cross-platform development.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">iOS Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Android Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">React Native</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Flutter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-2" /> by Mobile Developer
          </p>
          <p className="mt-2">© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
