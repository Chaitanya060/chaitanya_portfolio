import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brewbeanProject from '@/assets/brewbean-project.jpg';
import awsTtsProject from '@/assets/aws-tts-project.jpg';
import travelBuddyProject from '@/assets/travel-buddy-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "BrewBean",
      description: "Built a full-stack Cafe Management System using Spring Boot, JSP, MySQL, and JWT/BCrypt for secure admin content management. Implemented a modular backend with JPA models and CRUD operations for scalable user reservations and orders.",
      technologies: ["Spring Boot", "JSP", "MySQL", "JWT", "BCrypt"],
      github: "https://github.com/Chaitanya060/BrewBean",
      image: brewbeanProject,
      featured: true
    },
    {
      title: "AWS Text-to-Speech Integration",
      description: "Utilized AWS, HTML, CSS, and JavaScript to integrate Amazon Polly for text-to-speech conversion. Enhanced accessibility and inclusivity by supporting multiple voice options and languages, ensuring a user-friendly experience for diverse audiences.",
      technologies: ["AWS", "HTML", "CSS", "JavaScript", "Amazon Polly"],
      github: "https://github.com/Chaitanya060/ServerLessProject",
      image: awsTtsProject,
      featured: true
    },
    {
      title: "Travel Buddy",
      description: "Developed a travel website with JSP, CSS, JavaScript, and Spring Boot microservices, integrated with MySQL for hotel search and booking. Designed a modular, scalable microservices architecture for independent service deployment and seamless feature enhancements.",
      technologies: ["JSP", "CSS", "JavaScript", "Spring Boot", "MySQL"],
      github: "https://github.com/Chaitanya060/Travelbuddy",
      image: travelBuddyProject,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my development skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Projects */}
          {projects.filter(project => project.featured).map((project, index) => (
            <div key={index} className="card-elevated rounded-xl overflow-hidden group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <Button 
                    className="btn-primary flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2" size={18} />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center gradient-text">
            Other Projects
          </h3>
          {projects.filter(project => !project.featured).map((project, index) => (
            <div key={index} className="card-elevated p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-2xl font-bold gradient-text">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <Button 
                      className="btn-primary"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2" size={18} />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
