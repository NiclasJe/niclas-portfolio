import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<typeof projects[0] | null>(null);

  const openImageDialog = (project: typeof projects[0], imageIndex: number) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setImageDialogOpen(true);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setImageDialogOpen(false);
  };

  const projects = [
    {
      title: "Hippy",
      description: "A fun and engaging music quiz app where friends guess the song using Spotify playbacks.",
      info: "Hippy is a social music experience where users challenge their friends by playing songs via Spotify. Create or join sessions and test your musical memory by guessing the release year, song details, and more. Built with Flutter and integrated with Spotify, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Choose from various game modes and dificulty levels to keep the challenge fresh.",
      note: "To test the app, the Spotify app must be installed and a Spotify Premium account is required. The Spotify user also needs to be added to a list of active users in the Spotify Developer settings. To bypass the playback of the tracks and test the demo, you can enter a dedicated demo mode by presing the 'Skapa ett spel' button, then long-pressing the back button, followed by a long-press on the question mark and then long-pressing the desired game session.",
      images: ["/images/hippy/hippy_thumbnail.png", "/images/hippy/hippy_in_game.png", "/images/hippy/hippy_start_screen.png", "/images/hippy/hippy_creation_result.png"],
      tags: ["Flutter", "Firebase", "Spotify SDK"],
      category: "Games and Trivia",
      color: "from-green-400 to-blue-500",
      appStore: "https://apps.apple.com/app/hippy-music-quiz/id123456789",
      playStore: "https://play.google.com/store/apps/details?id=com.example.hippy",
      github: "https://github.com/niclas/hippy"
    },
    {
      title: "TaskMaster",
      description: "An intuitive task management app with team collaboration features and AI-powered productivity insights.",
      info: "Hippy is a social music experience where users challenge their friends using real Spotify tracks. Create or join sessions and test your musical memory by guessing song placements, details, and more — all in real-time. Built with Flutter and integrated with Spotify, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Spotify Premium required for session hosts.",
      images: ["/images/hippy/hippy_thumbnail.png", "/images/hippy/hippy_start_screen.png"],
      tags: ["Flutter", "Node.js", "MongoDB", "AI/ML"],
      category: "Productivity",
      color: "from-purple-400 to-pink-500",
      appStore: "https://apps.apple.com/app/taskmaster-productivity/id123456790",
      playStore: "https://play.google.com/store/apps/details?id=com.example.taskmaster",
      github: "https://github.com/niclas/taskmaster"
    },
    {
      title: "FoodieExplorer",
      description: "Discover local restaurants, read reviews, and order food with this social dining experience app.",
      info: "Hippy is a social music experience where users challenge their friends using real Spotify tracks. Create or join sessions and test your musical memory by guessing song placements, details, and more — all in real-time. Built with Flutter and integrated with Spotify, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Spotify Premium required for session hosts.",
      images: ["/images/hippy/hippy_thumbnail.png", "/images/hippy/hippy_start_screen.png"],
      tags: ["Swift", "SwiftUI", "Core Data", "MapKit"],
      category: "Food & Dining",
      color: "from-orange-400 to-red-500",
      appStore: "https://apps.apple.com/app/foodie-explorer/id123456791",
      playStore: "https://play.google.com/store/apps/details?id=com.example.foodieexplorer",
      github: "https://github.com/niclas/foodie-explorer"
    },
    {
      title: "CryptoWallet",
      description: "Secure cryptocurrency wallet with multi-currency support, portfolio tracking, and trading features.",
      info: "Hippy is a social music experience where users challenge their friends using real Spotify tracks. Create or join sessions and test your musical memory by guessing song placements, details, and more — all in real-time. Built with Flutter and integrated with Spotify, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Spotify Premium required for session hosts.",
      images: ["/images/hippy/hippy_thumbnail.png", "/images/hippy/hippy_start_screen.png"],
      tags: ["Kotlin", "Blockchain", "Security", "API"],
      category: "Finance",
      color: "from-yellow-400 to-orange-500",
      appStore: "https://apps.apple.com/app/crypto-wallet-secure/id123456792",
      playStore: "https://play.google.com/store/apps/details?id=com.example.cryptowallet",
      github: "https://github.com/niclas/crypto-wallet"
    },
    {
      title: "MindfulMoments",
      description: "Meditation and mindfulness app with guided sessions, progress tracking, and community features.",
      info: "Hippy is a social music experience where users challenge their friends using real Spotify tracks. Create or join sessions and test your musical memory by guessing song placements, details, and more — all in real-time. Built with Flutter and integrated with Spotify, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Spotify Premium required for session hosts.",
      images: ["/images/hippy/hippy_thumbnail.png", "/images/hippy/hippy_start_screen.png"],
      tags: ["React Native", "Audio", "Analytics", "Push Notifications"],
      category: "Wellness",
      color: "from-teal-400 to-blue-500",
      appStore: "https://apps.apple.com/app/mindful-moments/id123456793",
      playStore: "https://play.google.com/store/apps/details?id=com.example.mindfulmoments",
      github: "https://github.com/niclas/mindful-moments"
    },
    {
      title: "ShopSmart",
      description: "E-commerce app with AR try-on features, personalized recommendations, and seamless checkout.",
      info: "Hippy is a social music experience where users challenge their friends using real Spotify tracks. Create or join sessions and test your musical memory by guessing song placements, details, and more — all in real-time. Built with Flutter and integrated with Spotify, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Spotify Premium required for session hosts.",
      images: ["/images/hippy/hippy_thumbnail.png", "/images/hippy/hippy_start_screen.png"],
      tags: ["ARKit", "Swift", "Machine Learning", "Payment"],
      category: "E-commerce",
      color: "from-indigo-400 to-purple-500",
      appStore: "https://apps.apple.com/app/shop-smart-ar/id123456794",
      playStore: "https://play.google.com/store/apps/details?id=com.example.shopsmart",
      github: "https://github.com/niclas/shop-smart"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Some of my <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A look into the mobile apps I have crafted during late nights and passion-driven weekends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <>
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-left border-0 shadow-lg cursor-pointer"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setOpenIndex(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.images[0]} 
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
                      Download APK
                    </Button>
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.appStore && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.appStore, '_blank')}
                      >
                        <FaApple className="h-4 w-4" />
                      </Button>
                    )}
                    {project.playStore && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.playStore, '_blank')}
                      >
                        <FaGooglePlay className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Dialog open={openIndex === index} onOpenChange={() => setOpenIndex(null)}>
                <DialogContent className="max-w-5xl mx-auto p-0 min-h-[500px] max-h-[80vh] flex flex-col">
                  <DialogHeader className="p-8 pb-4 flex-shrink-0">
                    <DialogTitle className="text-3xl font-bold mb-2 gradient-text">{project.title}</DialogTitle>
                    <DialogDescription className="mb-4 text-muted-foreground text-lg">
                      {project.category}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex-1 overflow-y-auto px-8">
                    <div className="relative w-full" style={{height: '396px'}}>
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="absolute object-cover rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl" 
                        style={{width: '378px', height: '251px', left: '12px', top: '37px', boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)', outline: '1px solid rgba(255, 255, 255, 0.2)'}} 
                        onClick={() => openImageDialog(project, 0)}
                      />
                      <img 
                        src={project.images[3]} 
                        alt="Extra 3" 
                        className="absolute object-cover rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl" 
                        style={{width: '256px', height: '272px', left: '687px', top: '18px', boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)', outline: '1px solid rgba(255, 255, 255, 0.2)'}} 
                        onClick={() => openImageDialog(project, 3)}
                      />
                      <img 
                        src={project.images[1]} 
                        alt="Extra 1" 
                        className="absolute object-cover rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl" 
                        style={{width: '365px', height: '136px', left: '287px', top: '201px', boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)', outline: '1px solid rgba(255, 255, 255, 0.2)'}} 
                        onClick={() => openImageDialog(project, 1)}
                      />
                      <img 
                        src={project.images[2]} 
                        alt="Extra 2" 
                        className="absolute object-cover rounded-xl z-40 hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl" 
                        style={{width: '256px', height: '170px', left: '416px', top: '12px', boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)', outline: '1px solid rgba(255, 255, 255, 0.2)'}} 
                        onClick={() => openImageDialog(project, 2)}
                      />
                    </div>
                    
                    <div className="relative mb-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </div>
                    </div>
                    
                    <p className="mb-4 text-base leading-relaxed text-foreground">
                      {project.info}
                      {project.note && (
                        <>
                          <br /><br />
                          <strong>Note: </strong>{project.note}
                        </>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 p-8 pt-4 border-t bg-background">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.appStore && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(project.appStore, '_blank')}
                        >
                          <FaApple className="h-4 w-4" />
                        </Button>
                      )}
                      {project.playStore && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open(project.playStore, '_blank')}
                        >
                          <FaGooglePlay className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          ))}
        </div>

        <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
          <DialogContent 
            className="max-w-6xl h-[90vh] p-0 bg-transparent border-none flex flex-col"
            onKeyDown={handleKeyDown}
          >
            <div 
              className="relative w-full flex-1 flex items-center justify-center"
              onClick={() => setImageDialogOpen(false)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-36 right-36 z-50 text-white hover:text-red-400 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setImageDialogOpen(false);
                }}
              >
                <X className="h-6 w-6" />
              </Button>
              {currentProject && currentProject.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-44 z-50 text-white hover:text-blue-400 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft style={{ width: '32px', height: '32px' }} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-44 z-50 text-white hover:text-blue-400 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight style={{ width: '32px', height: '32px' }} />
                  </Button>
                </>
              )}
              {currentProject && (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <img
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                    className="object-contain rounded-lg shadow-2xl cursor-pointer"
                    style={{ 
                      maxWidth: '60%', 
                      maxHeight: '60%' 
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  />
                  <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
