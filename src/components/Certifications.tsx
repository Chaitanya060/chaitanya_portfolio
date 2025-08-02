import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Developer Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      url: "https://www.credly.com/badges/b0b9b558-2ccc-4447-864a-d0a3bbfadb12/public_url",
      description: "Demonstrates expertise in developing applications on AWS with focus on security, deployment, and troubleshooting.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Red Hat Certified Enterprise",
      issuer: "Red Hat",
      date: "2024",
      url: "https://www.credly.com/badges/87ae4c6e-be80-45a5-8772-9ab7ea07091e/public_url",
      description: "Validates skills in Red Hat Enterprise Linux system administration and management.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Aviatrix Multi-Cloud Network Associate",
      issuer: "Aviatrix",
      date: "2024",
      url: "https://www.credly.com/badges/31d2ee1c-1c87-438e-bf09-66b8630f3853/public_url",
      description: "Demonstrates understanding of multi-cloud networking concepts and Aviatrix platform capabilities.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Automation Anywhere Certified Essentials RPA Professional",
      issuer: "Automation Anywhere",
      date: "2023",
      url: "https://certificates.automationanywhere.com/92f9ecd9-5564-40d8-bc8c-eaaa212c8913#acc.mT1YgPx6",
      description: "Certification in Robotic Process Automation using Automation 360 platform.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2024",
      url: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=UnL87JEXNFA6sVTdalglcYFOx116SeFFu7I69phSmmjnpe/SNlS4qzlQWLQ/Auwc",
      description: "Validates foundational knowledge of artificial intelligence concepts and Salesforce AI solutions.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications validating my expertise in cloud technologies and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="card-elevated p-8 rounded-xl group hover:scale-105 transition-all duration-300">
              {/* Certificate Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${cert.bgColor} mb-6`}>
                <Award className={`${cert.color}`} size={32} />
              </div>

              {/* Certificate Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold gradient-text leading-tight">
                  {cert.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* View Certificate Button */}
                <Button 
                  variant="outline"
                  className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(cert.url, '_blank')}
                >
                  <ExternalLink className="mr-2" size={16} />
                  View Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 card-elevated p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">5</div>
              <p className="text-muted-foreground">Professional Certifications</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4</div>
              <p className="text-muted-foreground">Cloud & Enterprise Technologies</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2024</div>
              <p className="text-muted-foreground">Latest Certification Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;