import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with 1+ years of experience creating digital solutions that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary-glow/10 rounded-2xl p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a junior software developer with 1.5 years of hands-on experience in .NET, C#, and Azure cloud services. I specialize in building scalable backend systems, integrating third-party APIs, and automating workflows in the cloud.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in computer science and Agile methodologies, I thrive in collaborative environments and continuous learning. I'm currently seeking full-time opportunities in Wrocław or open to relocation.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Card className="bg-gradient-to-br from-card via-card to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-secondary-glow mb-2">1+</div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-card via-card to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">3</div>
                      <div className="text-muted-foreground">Projects Completed</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-slide-up">
              <img
                  src="/avatar.jpg"
                  alt="Nam Long Vu"
                  className="w-80 h-80 object-cover rounded-full border-[6px] border-primary-glow shadow-xl transform -translate-y-6 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;