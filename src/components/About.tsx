import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import educationBg from '@/assets/education-bg.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate developer with a strong foundation in full-stack development and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Summary */}
            <div className="card-elevated p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Computer Science and Engineering student with expertise in Java Full Stack Development, 
                AWS, Spring Boot, Java Microservices, and Database Management. Skilled in Python, Java, 
                MySQL, and cloud-based applications. Published groundbreaking research on Cloud-Enabled 
                Facial Emotion Recognition and spearheaded innovative coding initiatives.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Education</h3>
              
              {/* B.Tech */}
              <div className="card-elevated p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">
                      B.Tech, Computer Science and Engineering
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>2021 – 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>KL University, Vijayawada, India</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-500" size={16} />
                      <span className="font-semibold text-primary">CGPA: 9.05</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="card-elevated p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <GraduationCap className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">
                      Intermediate Board of Education
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>2019 – 2021</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>Narayana Junior College, Visakhapatnam, India</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-500" size={16} />
                      <span className="font-semibold text-secondary">CGPA: 7.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={educationBg} 
                alt="Education and University" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Continuous Learning
                </h4>
                <p className="text-muted-foreground">
                  Constantly exploring new technologies and enhancing skills through 
                  hands-on projects and certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;