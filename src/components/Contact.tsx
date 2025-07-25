import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "jernberg.niclas@gmail.com",
      href: "mailto:jernberg.niclas@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+46 70 571 08 10",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Göteborg/Karlstad, Sweden",
      href: "#"
    }
  ];

  return (
    <section id="lets-connect" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your mobile app idea to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="flex justify-center mb-96">
          <div className="animate-slide-in-right w-full max-w-lg">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 mb-20">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
