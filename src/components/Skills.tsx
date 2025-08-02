import { useState, useEffect } from 'react';
import { 
  Coffee, 
  Database, 
  Cloud, 
  Globe, 
  Server, 
  Code, 
  Layers,
  Shield,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSkills((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-card');
    skillElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Java",
      icon: Coffee,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      description: "Object-oriented programming",
      level: "Advanced"
    },
    {
      name: "Python",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Versatile programming language",
      level: "Intermediate"
    },
    {
      name: "MySQL",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      description: "Relational database management",
      level: "Advanced"
    },
    {
      name: "Spring Boot",
      icon: Layers,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: "Java framework for web apps",
      level: "Advanced"
    },
    {
      name: "Microservices",
      icon: Server,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Distributed system architecture",
      level: "Intermediate"
    },
    {
      name: "AWS",
      icon: Cloud,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Cloud computing platform",
      level: "Certified"
    },
    {
      name: "Full Stack Development",
      icon: Globe,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      description: "End-to-end web development",
      level: "Advanced"
    },
    {
      name: "JWT & Security",
      icon: Shield,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      description: "Authentication & authorization",
      level: "Intermediate"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Individual Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-index={index}
              className={`skill-card card-elevated p-6 rounded-xl text-center group cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                visibleSkills.includes(index) 
                  ? 'animate-scale-in' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Skill Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${skill.bgColor} mb-4 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110`}>
                <skill.icon className={`${skill.color}`} size={40} />
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-bold mb-2 gradient-text group-hover:scale-105 transition-transform duration-300">
                {skill.name}
              </h3>

              {/* Skill Description */}
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {skill.description}
              </p>

              {/* Skill Level Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${skill.bgColor} ${skill.color} border border-current/20`}>
                {skill.level}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-xl ${skill.bgColor} animate-pulse-glow`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Visualization */}
        <div className="card-elevated p-8 rounded-xl animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technology Expertise
          </h3>
          
          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                <Coffee className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold gradient-text">Programming</h4>
              <p className="text-sm text-muted-foreground">Java, Python</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-secondary/10 mb-3">
                <Layers className="text-secondary" size={24} />
              </div>
              <h4 className="font-semibold gradient-text">Frameworks</h4>
              <p className="text-sm text-muted-foreground">Spring Boot, Microservices</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-accent/10 mb-3">
                <Database className="text-accent" size={24} />
              </div>
              <h4 className="font-semibold gradient-text">Database</h4>
              <p className="text-sm text-muted-foreground">MySQL, JPA</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-primary-glow/10 mb-3">
                <Cloud className="text-primary-glow" size={24} />
              </div>
              <h4 className="font-semibold gradient-text">Cloud</h4>
              <p className="text-sm text-muted-foreground">AWS, Serverless</p>
            </div>
          </div>

          {/* Animated Tech Tags */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              "Java", "Python", "Spring Boot", "MySQL", "AWS", 
              "Microservices", "Full Stack", "JWT", "React", "Cloud Computing"
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl animate-fade-in"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;