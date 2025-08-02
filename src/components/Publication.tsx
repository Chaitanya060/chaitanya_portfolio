import { FileText, Calendar, ExternalLink, Brain, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import facialRecognitionResearch from '@/assets/facial-recognition-research.jpg';

const Publication = () => {
  return (
    <section id="publication" className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="gradient-text">Publication</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Contributing to the advancement of AI and cloud computing technologies
          </p>
        </div>

        {/* Featured Publication */}
        <div className="card-elevated rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Publication Image */}
            <div className="relative overflow-hidden">
              <img 
                src={facialRecognitionResearch} 
                alt="Cloud-Enabled Facial Emotion Recognition Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden"></div>
            </div>

            {/* Publication Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Publication Meta */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-primary">
                  <FileText size={20} />
                  <span className="font-semibold">Research Paper</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>August 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-6 gradient-text leading-tight">
                Cloud-Enabled Facial Emotion Recognition: A Comprehensive AWS Rekognition Analysis
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Integrated React with AWS Rekognition APIs to create a responsive, user-friendly 
                interface for real-time facial emotion detection, demonstrating superior performance 
                over traditional machine learning models. Research highlights enhanced scalability, 
                robust error handling, and future potential for cross-platform compatibility and 
                explainable AI.
              </p>

              {/* Key Highlights */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold gradient-text">Key Contributions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Brain className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">AI Integration</p>
                      <p className="text-sm text-muted-foreground">Real-time emotion detection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="text-secondary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Cloud Scalability</p>
                      <p className="text-sm text-muted-foreground">AWS Rekognition integration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 gradient-text">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "AWS Rekognition", "Machine Learning", "Cloud Computing", "API Integration"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                className="btn-primary w-full lg:w-auto"
                onClick={() => window.open('#', '_blank')}
              >
                <ExternalLink className="mr-2" size={18} />
                Read Full Paper
              </Button>
            </div>
          </div>
        </div>

        {/* Research Impact */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-elevated p-8 rounded-xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">AI</div>
            <p className="text-muted-foreground">Artificial Intelligence</p>
            <p className="text-sm text-muted-foreground mt-2">
              Advanced emotion recognition algorithms
            </p>
          </div>
          <div className="card-elevated p-8 rounded-xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">AWS</div>
            <p className="text-muted-foreground">Cloud Integration</p>
            <p className="text-sm text-muted-foreground mt-2">
              Scalable cloud-based solution
            </p>
          </div>
          <div className="card-elevated p-8 rounded-xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">React</div>
            <p className="text-muted-foreground">Frontend Framework</p>
            <p className="text-sm text-muted-foreground mt-2">
              Responsive user interface
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;