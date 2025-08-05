import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WorkExperience = () => {
  const workExperience = [
    {
      title: "Junior Software Developer",
      company: "getsix Wrocław Sp. z o.o.",
      period: "07/2023 - 08/2024",
      location: "Wroclaw, Poland",
      description: "Developed and deployed backend services for an automated VAT compliance system using Azure Functions and .NET 6, targeting e-commerce clients.",
      achievements: [
        "Reduced manual operations by 50% through integration with Amazon and BaseLinker APIs",
        "Improved exchange rate update accuracy and efficiency via Azure Functions and Logic Apps",
        "Implemented an automated alert system with Azure Logic Apps and SendGrid for critical event delivery"
      ],
      technologies: ["Azure Functions", "Azure Logic Apps", "ASP .NET Core", "SendGrid", "SQL Server"]
    },
    {
      title: "DevOps Intern",
      company: "Kyndryl",
      period: "09/2021 - 02/2022",
      location: "Remote",
      description: "Completed a DevOps internship program at Kyndryl with a focus on practical Linux administration, Docker, and CI/CD practices.",
      achievements: [
        "Practiced Linux server administration and Docker containerization in development/test environments",
        "Documented and suggested improvements for Agile/Scrum processes during training sessions",
        "Engaged in CI/CD pipeline testing and automation using internal tools"
      ],
      technologies: ["Linux", "Docker", "CI/CD", "Agile", "Scrum"]
    }
  ];

  const education = [
    {
      degree: "Engineering in Computer Science",
      school: "Wrocław University of Science and Technology",
      period: "2018 - 2023",
      location: "Wroclaw, Poland",
      description: "Graduated with a focus on software engineering and web development.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List for 6 semesters",
        "President of Computer Science Club"
      ]
    },
    {
      degree: "Microsoft Certified: Power Platform App Maker Associate",
      school: "Microsoft",
      period: "08/2023 - 08/2024",
      location: "Online",
      description: "Certification validating the ability to design and build low-code applications and automate business processes using Microsoft Power Platform.",
      achievements: [
        "Built apps, dashboards, and workflows using Power Apps, Power BI, and Power Automate",
        "Demonstrated understanding of data modeling, business logic, and user experience design",
        "Applied Power Platform capabilities to streamline tasks and solve business challenges"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background in technology
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center animate-slide-up">
            Work Experience
          </h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-card via-card to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-lg text-primary-glow font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground font-medium">{job.period}</p>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary-glow mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center animate-slide-up">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-card via-card to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-primary-glow font-semibold">
                    {edu.school}
                  </p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-secondary-glow mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;