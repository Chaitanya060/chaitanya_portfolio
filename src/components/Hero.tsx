import { Download, Github, Linkedin, Mail, Phone, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';
import ResumeViewer from '@/components/ResumeViewer';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Chaitanya Kishore Batta</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Computer Science & Engineering Student | Java Full Stack Developer
            <br />
            <span className="gradient-text font-semibold">
              AWS Certified | Innovator in Cloud-Enabled Solutions
            </span>
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card-elevated p-4 rounded-lg">
              <Phone className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">+91 96522504888</p>
            </div>
            <div className="card-elevated p-4 rounded-lg">
              <Mail className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">chaitanyakishorebatta@gmail.com</p>
            </div>
            <div className="card-elevated p-4 rounded-lg">
              <Linkedin className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/chaitanya-kishore/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-primary-glow transition-colors"
              >
                View Profile
              </a>
            </div>
            <div className="card-elevated p-4 rounded-lg">
              <Github className="mx-auto mb-2 text-primary" size={24} />
              <p className="text-sm text-muted-foreground">GitHub</p>
              <a 
                href="https://github.com/Chaitanya060/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-primary-glow transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ResumeViewer>
              <Button className="btn-primary px-8 py-3 text-lg rounded-lg">
                <Eye className="mr-2" size={20} />
                View Resume
              </Button>
            </ResumeViewer>
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;