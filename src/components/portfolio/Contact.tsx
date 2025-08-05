import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "wnamlong.9@gmail.com",
      link: "mailto:wnamlong.9@gmail.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/namlongvu",
      link: "https://www.linkedin.com/in/nam-long-vu-920a2a174/",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/NamLongVu",
      link: "https://github.com/NamLongVu",
    },
  ];

  return (
      <section
          id="contact"
          className="py-20 px-6 bg-gradient-to-t from-background to-secondary/5"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Left: Email Form */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Send me a message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Name
                    </label>
                    <input
                        type="text"
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                        placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                        placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                        rows={4}
                        className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                        placeholder="Tell me about your project or question..."
                    ></textarea>
                  </div>
                  <Button
                      type="submit"
                      className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 text-lg px-8 py-3"
                  >
                    Start a Conversation
                  </Button>
                </form>
              </div>
            </div>

            {/* Right: Contact Cards */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in touch
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                    <Card
                        key={index}
                        className="bg-gradient-to-br from-card via-card to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                    >
                      <CardContent className="p-6 flex items-center space-x-4">
                        <div className="text-3xl group-hover:animate-float">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <a
                              href={method.link}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <h4 className="font-semibold text-foreground group-hover:text-primary-glow transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {method.value}
                            </p>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;