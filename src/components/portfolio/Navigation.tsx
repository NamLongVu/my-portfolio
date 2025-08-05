import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          id: item.id,
          top: Math.abs(rect.top),
        };
      }).filter(Boolean) as { id: string; top: number }[];

      if (offsets.length > 0) {
        const closest = offsets.reduce((prev, curr) =>
            curr.top < prev.top ? curr : prev
        );
        setActiveSection(closest.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
      <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-background/80 backdrop-blur-md border-b border-primary/20"
                  : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
                onClick={() => window.location.href = "/"}
                className="text-2xl font-bold bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent"
            >
              Rabbit
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-medium transition-colors hover:text-primary-glow ${
                          activeSection === item.id
                              ? "text-primary-glow"
                              : "text-muted-foreground"
                      }`}
                  >
                    {item.label}
                  </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navigation;