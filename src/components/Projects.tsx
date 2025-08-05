import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Smartphone, ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import React from "react";

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
      info: "Hippy is a social music experience where users challenge their friends by playing songs via the Spotify app. Create or join sessions and test your musical memory by guessing the release year, song details, and more. Built with Flutter and integrated with the Spotify SDK, Hippy offers an engaging way to rediscover your playlists and compete in a fun, interactive format. Choose from various game modes and dificulty levels to keep the challenge fresh.",
      note: "To test the app, the Spotify app must be installed and a Spotify Premium account is required. The Spotify user also needs to be added to a list of active users in the Spotify Developer settings. To bypass the playback of the tracks and test the demo, you can enter a dedicated demo mode by presing the 'Skapa ett spel' button, then long-pressing the back button, followed by a long-press on the question mark and then long-pressing the desired game session.",
      images: ["/niclas-portfolio/images/hippy/hippy_thumbnail.png", "/niclas-portfolio/images/hippy/hippy_in_game.png", "/niclas-portfolio/images/hippy/hippy_start_screen.png", "/niclas-portfolio/images/hippy/hippy_creation_result.png"],
      tags: ["Flutter", "Firebase", "Spotify SDK", "SQL"],
      category: "Games & Trivia",
      color: "from-green-400 to-blue-500",
      appStore: "https://apps.apple.com/se/app/hippy/id6746072263?l=en-GB",
      playStore: "https://play.google.com/store/apps/details?id=com.koda.hippy",
      apk: "/niclas-portfolio/apks/hippy-1-3-001.zip",
    },
    {
      title: "Ordly",
      description: "A daily challenge where the user guesses the Swedish word in a limited number of tries.",
      info: "Ordly is a daily word challenge where players try to guess a hidden five-letter Swedish word in six attempts. After each guess, the game provides feedback to help narrow down the solution - making it both strategic and satisfying. The game is available on both Android and iOS and works seamlessly across all screen sizes, from phones to tablets. Simple to pick up, hard to put down - inspired by the classic word game format with a Swedish twist.",
      images: ["/niclas-portfolio/images/ordly/ordly_thumbnail.png", "/niclas-portfolio/images/ordly/ordly_sizes.png", "/niclas-portfolio/images/ordly/ordly_theme.png", "/niclas-portfolio/images/ordly/ordly_result.png"],
      tags: ["Flutter", "Firebase", "SQL"],
      category: "Puzzles",
      color: "from-purple-400 to-pink-500",
      appStore: "https://apps.apple.com/se/app/ordly-ordpussel/id6746171956?l=en-GB",
      playStore: "https://play.google.com/store/apps/details?id=com.koda.ordly",
      apk: "/niclas-portfolio/apks/ordly-1-0-005.zip",
    },
    {
      title: "Unravel",
      description: "A murder mystery game where players find clues, solve puzzles and unravel the truth",
      info: "Unravel is a social detective experience originally created for a personal summer party. It blends physical and digital clues, encouraging players to explore their surroundings while uncovering the mystery. The app integrates with ESP32 modules to interact with the physical environment, resulting in a unique and immersive adventure.",
      note: "To solve the case accurately, physical evidence must also be collected. Because of this, the digital clues are insufficient to solve the case.",
      images: ["/niclas-portfolio/images/unravel/unravel_thumbnail.png", "/niclas-portfolio/images/unravel/unravel_sizes.png", "/niclas-portfolio/images/unravel/unravel_clues.png", "/niclas-portfolio/images/unravel/unravel_puzzles.png"],
      tags: ["Flutter", "https", "ESP32"],
      category: "Games & Puzzles",
      color: "from-orange-400 to-red-500",
      appStore: "https://testflight.apple.com/join/9qYEYgHS",
      playStore: "https://play.google.com/store/apps/details?id=com.koda.unravel",
      apk: "/niclas-portfolio/apks/unravel-1-0-002.zip",
    },
    {
      title: "Heptas",
      description: "Manages stock levels, orders, and product flow with ease, all in one smart inventory app.",
      info: "Heptas is a powerful yet easy-to-use app designed to help the user monitor and manage an inventory with ease. Keep track of stock levels, incoming deliveries, and outgoing customer orders — all in one intuitive interface. Heptas also provides clear flow analytics, offering insights into trends and performance, and helps ensure that you always have the right products in stock. Perfect for businesses that want to streamline operations and avoid running out of essential items.",
      images: ["/niclas-portfolio/images/heptas/heptas_thumbnail.png", "/niclas-portfolio/images/heptas/heptas_notification.png", "/niclas-portfolio/images/heptas/heptas_inventory.png", "/niclas-portfolio/images/heptas/heptas_more.png"],
      tags: ["Android", "Kotlin", "Firebase", "SQL"],
      category: "Logisitics",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Pappas rökeri",
      description: "Monitors meat temperatures, estimates cook times, and notifies when the food is ready",
      info: "Pappas rökeri is a home automation app designed to work with a Bluetooth-connected meat thermometer device that supports up to five probes. In the app, users can set a target temperature for each probe, receive notifications when the desired temperature is reached, and view an estimated time remaining until each probe reaches its target. The app also allows adding multiple devices to monitor additional probes simultaneously. This makes it possible to track the internal temperature of different pieces of meat in real time, providing better control during grilling or smoking.",
      images: ["/niclas-portfolio/images/smoker/smoker_thumbnail.png", "/niclas-portfolio/images/smoker/smoker_notification.png", "/niclas-portfolio/images/smoker/smoker_set_temp.png", "/niclas-portfolio/images/smoker/smoker_add.png"],
      tags: ["Android", "Kotlin", "Jetpack Compose", "ESP32"],
      category: "Home automation",
      color: "from-teal-400 to-blue-500",
      github: undefined
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Some of my <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A look into some mobile apps I have crafted during late nights and passion-driven weekends.
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
            Feel free to download and test the apps that are available.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <Card
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-left border-0 shadow-lg cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s`, width: '400px', maxWidth: '100%' }}
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
                    {project.apk ? (
                      <a
                        href={project.apk}
                        download
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white text-sm font-medium transition-all duration-200 hover:bg-primary/80"
                        onClick={e => e.stopPropagation()}
                      >
                        <Smartphone className="mr-2 h-4 w-4" />
                        Download APK
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1 transition-all duration-200 bg-transparent text-zinc-500 border-zinc-300 cursor-not-allowed opacity-40"
                        disabled
                      >
                        <Smartphone className="mr-2 h-4 w-4" />
                        Download APK
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
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Dialog open={openIndex === index} onOpenChange={() => setOpenIndex(null)}>
                <DialogContent className="w-full max-w-5xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto p-2 sm:p-4 md:p-8 min-h-[400px] max-h-[90vh] flex flex-col">
                  <DialogHeader className="p-8 pb-4 flex-shrink-0">
                    <DialogTitle className="text-3xl font-bold mb-2 gradient-text">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="mb-4 text-muted-foreground text-lg">
                      {project.category}
                    </DialogDescription>
                    {(project.appStore || project.playStore) && (
                      <div className="absolute top-6 right-12 z-50">
                        <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold shadow text-sm flex items-center gap-2">
                          <span role="img" aria-label="party">🎉</span> Published application
                        </div>
                      </div>
                    )}
                  </DialogHeader>

                  <div className="flex-1 overflow-y-auto px-8">
                    <div className="relative w-full" style={{ height: 'clamp(237px, 38vw, 376px)' }}>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="absolute object-cover rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                        style={{
                          width: 'clamp(171px, 36vw, 359px)',
                          height: 'clamp(114px, 24vw, 238px)',
                          left: 'clamp(4px, 1.9vw, 11px)',
                          top: 'clamp(11px, 3.8vw, 35px)',
                          boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)',
                          outline: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        onClick={() => openImageDialog(project, 0)}
                      />
                      <img
                        src={project.images[3]}
                        alt="Extra 3"
                        className="absolute object-cover rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                        style={{
                          width: 'clamp(114px, 24vw, 243px)',
                          height: 'clamp(114px, 27vw, 258px)',
                          left: 'clamp(209px, 66.5vw, 652px)',
                          top: 'clamp(4px, 1.9vw, 17px)',
                          boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)',
                          outline: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        onClick={() => openImageDialog(project, 3)}
                      />
                      <img
                        src={project.images[1]}
                        alt="Extra 1"
                        className="absolute object-cover rounded-xl hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                        style={{
                          width: 'clamp(114px, 34vw, 347px)',
                          height: 'clamp(57px, 12vw, 129px)',
                          left: 'clamp(85px, 27.5vw, 272px)',
                          top: 'clamp(57px, 19vw, 190px)',
                          boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)',
                          outline: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        onClick={() => openImageDialog(project, 1)}
                      />
                      <img
                        src={project.images[2]}
                        alt="Extra 2"
                        className="absolute object-cover rounded-xl z-40 hover:scale-105 cursor-pointer transition-all duration-300 hover:shadow-2xl"
                        style={{
                          width: 'clamp(114px, 24vw, 243px)',
                          height: 'clamp(76px, 15vw, 162px)',
                          left: 'clamp(124px, 39.9vw, 394px)',
                          top: 'clamp(4px, 1.9vw, 11px)',
                          boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.3)',
                          outline: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
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
                      {project.apk ? (
                        <a
                          href={project.apk}
                          download
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white text-sm font-medium transition-all duration-200 hover:bg-primary/80"
                          onClick={e => e.stopPropagation()}
                        >
                          <Smartphone className="mr-2 h-4 w-4" />
                          Download APK
                        </a>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 transition-all duration-200 bg-transparent text-zinc-500 border-zinc-300 cursor-not-allowed opacity-40"
                          disabled
                        >
                          <Smartphone className="mr-2 h-4 w-4" />
                          Download APK
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
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </React.Fragment>
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
