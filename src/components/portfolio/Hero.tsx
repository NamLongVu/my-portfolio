import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary-glow/10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-secondary-glow/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-primary-glow/20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Nam Long Vu
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Junior .NET Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional web applications that deliver exceptional user experiences.
            Passionate about clean code, modern design, and innovative solutions.
          </p>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 text-lg px-8 py-3 animate-glow"
            >
              My Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;