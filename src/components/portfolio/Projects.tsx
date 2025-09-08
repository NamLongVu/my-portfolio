import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, ASP .NET Core, and SQL Server. Features include user authentication, payment processing, and inventory management.",
      technologies: ["React", "ASP .NET Core", "SQL Server", "Stripe"],
      image: "🛒",
      demoUrl: "#",
      codeUrl: "https://github.com/NamLongVu/CleanArchitecture",
      status: "Planning"
    },
    {
      title: "Food Donation Website",
      description: "A web platform inspired by Too Good To Go that connects restaurants with surplus food to people looking for affordable meals. The goal is to reduce food waste by allowing users to browse and reserve leftover meals from local restaurants before they’re discarded.",
      technologies: ["React", "Spring Boot", "Socket.io", "My SQL"],
      image: "🍱",
      demoUrl: "#",
      codeUrl: "https://github.com/NamLongVu/FoodDonation_Backend/tree/main",
      status: "Planning"
    },
    {
      title: "Restaurant Website",
      description: "This project is a website for my dream restaurant. I started by creating the front-end first, and plan to build the back-end later.",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      image: "🍛",
      demoUrl: "https://my-restaurant-tawny.vercel.app/",
      codeUrl: "https://github.com/NamLongVu/my-restaurant",
      status: "Finished"
    },
    {
      title: "Portfolio Website",
      description: "My responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "💼",
      demoUrl: "#",
      codeUrl: "https://github.com/NamLongVu/my-portfolio",
      status: "Finished"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card via-card to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4 text-center group-hover:animate-float">
                  {project.image}
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                {project.status && (
                    <p className="text-sm text-muted-foreground italic">
                      Project status: {project.status}
                    </p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button
                        size="sm"
                        className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300"
                    >
                      Live Demo
                    </Button>
                  </a>

                  <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 text-foreground hover:bg-primary/10"
                    >
                      View Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;